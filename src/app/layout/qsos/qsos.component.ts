import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { ActivatedRoute } from '@angular/router';
import { QsosService } from 'src/app/services/qsos.service';
import { Contestqso } from 'src/app/model/contestqso.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DxccEntityService } from 'src/app/services/dxccentity.service';
import { DxccEntityModel } from 'src/app/model/dxccentity.model';
import { BandService } from 'src/app/services/band.service';
import { BandModel } from 'src/app/model/band.service';

@Component({
  selector: 'app-qsos',
  templateUrl: './qsos.component.html',
  styleUrls: ['./qsos.component.scss'],
  animations: [routerTransition()]
})
export class QsosComponent implements OnInit {

  conteoid: number;
  logid: number;
  contestQsoList: Contestqso[];
  closeResult: string;

  dxccEntities: Array<DxccEntityModel>;
  frequencies: Array<BandModel>;

  selectedDxccEntityId: number;
  selectedBandId: number;
  selectedQsoId: number;
  selectedQso: Contestqso;
  selectedUpdateAll: boolean;

  constructor(
    private sweetAlertService: SweetAlertService,
    private qsosService: QsosService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dxccEntityService: DxccEntityService,
    private bandService: BandService) {
      this.route.params.subscribe( params => {
        this.conteoid = params['conteoid'];
        this.logid = params['logid'];
      });
    }

  ngOnInit() {
    this.loadQsos(this.conteoid, this.logid);
    this.loadDxccEntities();
    this.loadFrequencies();
  }

  loadQsos(conteoid, logid) {
    this.qsosService.getAllByConteoIdAndLogId(conteoid, logid)
    .then(u => {
      const x: Array<Contestqso> = u.data;
      this.contestQsoList = x;
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }

  loadDxccEntities() {
    this.dxccEntityService.findAll()
    .then(y => {
      this.dxccEntities = y.data;
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }

  loadFrequencies() {
    this.bandService.findAll()
    .then(y => {
      this.frequencies = y.data;
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }

  open(content, qsoId: number, dxccEntityId: number, qsoBandId: number) {
    this.selectedDxccEntityId = dxccEntityId;
    this.selectedBandId = qsoBandId;
    this.selectedQsoId = qsoId;
    this.selectedQso = this.contestQsoList.find(qso => qso.id === qsoId);
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

  updateDxccOrBand() {
    if (this.selectedQsoId) {
      this.qsosService.find(this.selectedQsoId, this.conteoid)
      .then(y => {
        const contestQso = y.data as Contestqso;
        return contestQso;
      })
      .then(contestQso => {
        contestQso.dxccEntityId = this.selectedDxccEntityId;
        return contestQso;
      })
      .then(contestQso => {
        contestQso.qsoBandId = this.selectedBandId;
        return contestQso;
      })
      .then(contestQso => {
        contestQso.selectedUpdateAll = this.selectedUpdateAll;
        return contestQso;
      })
      .then(contestQso => {
        this.qsosService.save(contestQso)
        .then(y => {
          this.selectedDxccEntityId = null;
          this.selectedBandId = null;
          this.sweetAlertService.successMessage('Actualizado', 'Se actualizó la entidad DXCC o la Banda')
          .then(() => {
            this.loadQsos(this.conteoid, this.logid);
          });
        })
        .catch(e => {
          this.selectedDxccEntityId = null;
          this.selectedBandId = null;
          this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
          console.error(e);
        });
      })
      .catch(e => {
        this.selectedDxccEntityId = null;
        this.selectedBandId = null;
        this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
        console.error(e);
      });
    }
  }

  setAsDxccOrBandError() {
    if (this.selectedQsoId) {
      this.qsosService.find(this.selectedQsoId, this.conteoid)
      .then(y => {
        const contestQso = y.data as Contestqso;
        return contestQso;
      })
      .then(contestQso => {
        contestQso.dxccOrBandError = true;
        return contestQso;
      })
      .then(contestQso => {
        this.qsosService.save(contestQso)
        .then(y => {
          this.selectedDxccEntityId = null;
          this.selectedBandId = null;
          this.sweetAlertService.successMessage('Actualizado', 'Se seteó el QSO como error')
          .then(() => {
            this.loadQsos(this.conteoid, this.logid);
          });
        })
        .catch(e => {
          this.selectedDxccEntityId = null;
          this.selectedBandId = null;
          this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
          console.error(e);
        });
      });
    }
  }
}