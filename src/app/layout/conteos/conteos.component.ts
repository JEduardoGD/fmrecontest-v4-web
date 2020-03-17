import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { ConteoModel } from 'src/app/model/conteo.model';
import { ConteoService } from 'src/app/services/conteo.service';
import { routerTransition } from 'src/app/router.animations';
import { ReportsService } from 'src/app/services/reports.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-conteos',
  templateUrl: './conteos.component.html',
  styleUrls: ['./conteos.component.scss'],
  animations: [routerTransition()]
})
export class ConteosComponent implements OnInit {
  conteoList: Array<ConteoModel> = [];
  constructor(
    private conteoService: ConteoService,
    private reportsService: ReportsService,
    private sweetAlertService: SweetAlertService
  ) { }

  ngOnInit() {
    this.onLoadConteos();
  }

  onLoadConteos() {
    this.conteoService.getConteoList()
    .then(u => {
      const x: Array<ConteoModel> = u.data;
      this.conteoList = x;
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }

  downloadFile(conteoId: number) {
    this.reportsService.getConteoById(conteoId)
    .then(y => {
      const conteo = y.data as ConteoModel;
      this.reportsService.getConteoReportById(conteo.id)
      .then(x => {
        const blob = new Blob([x], {type: 'text/csv;charset=utf-8'});
        FileSaver.saveAs(blob, `conteo_${conteo.id}.csv`);
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
