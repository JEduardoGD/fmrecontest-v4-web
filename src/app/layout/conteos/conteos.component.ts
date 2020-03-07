import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { ConteoModel } from 'src/app/model/conteo.model';
import { ConteoService } from 'src/app/services/conteo.service';

@Component({
  selector: 'app-conteos',
  templateUrl: './conteos.component.html',
  styleUrls: ['./conteos.component.scss']
})
export class ConteosComponent implements OnInit {
  conteoList: Array<ConteoModel> = [];
  constructor(
    private conteoService: ConteoService,
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
}
