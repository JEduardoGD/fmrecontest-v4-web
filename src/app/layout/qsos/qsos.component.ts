import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { ActivatedRoute } from '@angular/router';
import { QsosService } from 'src/app/services/qsos.service';
import { Contestqso } from 'src/app/model/contestqso.model';

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

  constructor(
    private sweetAlertService: SweetAlertService,
    private qsosService: QsosService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => {
        this.conteoid = params['conteoid'];
        this.logid = params['logid'];
      });
    }

  ngOnInit() {
    this.loadQsos(this.conteoid, this.logid);
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
}
