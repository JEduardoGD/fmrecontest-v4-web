import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContestlogService } from 'src/app/services/contestlog.service';
import { Contestlog } from 'src/app/model/contestlog.model';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { routerTransition } from 'src/app/router.animations';
import { ReportsService } from 'src/app/services/reports.service';
import { QsosService } from 'src/app/services/qsos.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-contestologs',
  templateUrl: './contestologs.component.html',
  styleUrls: ['./contestologs.component.scss'],
  animations: [routerTransition()]
})
export class ContestologsComponent implements OnInit {

  conteoid: number;
  contestlogList: Array<Contestlog>;

  constructor(
    private sweetAlertService: SweetAlertService,
    private contestlogService: ContestlogService,
    private reportsService: ReportsService,
    private qsosService: QsosService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => {
        this.conteoid = params['conteoid'];
      });
    }

  ngOnInit() {
    this.loadContestlogs(this.conteoid);
  }

  loadContestlogs(conteoid: number) {
    this.contestlogService.findByConteotId(conteoid)
    .then(u => {
      const x: Array<Contestlog> = u.data;
      this.contestlogList = x;
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }

  downloadFile(conteoId: number, contestologId: number) {
    this.qsosService.getAllByConteoIdAndLogId(conteoId, contestologId)
    .then(y => {
      const contestlog = y.data as Contestlog;
      this.reportsService.getLogReport(conteoId, contestologId)
      .then(x => {
        const blob = new Blob([x], {type: 'text/csv;charset=utf-8'});
        FileSaver.saveAs(blob, `conteo_${conteoId}_contestlog_${contestologId}.csv`);
      })
      .catch(e => {
        this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
        console.error(e);
      });
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }
}
