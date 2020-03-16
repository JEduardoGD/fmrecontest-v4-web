import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContestlogService } from 'src/app/services/contestlog.service';
import { Contestlog } from 'src/app/model/contestlog.model';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { routerTransition } from 'src/app/router.animations';

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
}
