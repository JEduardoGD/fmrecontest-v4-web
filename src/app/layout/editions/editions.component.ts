import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { EditionsService } from 'src/app/services/editions.service';
import { ActivatedRoute } from '@angular/router';
import { EditionModel } from 'src/app/model/edition.model';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.scss'],
  animations: [routerTransition()]
})
export class EditionsComponent implements OnInit {

  listContest: Array<EditionModel>;
  contestid: number;

  constructor(
    private editionsService: EditionsService,
    private sweetAlertService: SweetAlertService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => {
        this.contestid = params['contestid'];
      });
    }

  ngOnInit() {
    this.onLoadContests(this.contestid);
  }

  onLoadContests(contestId: number) {
    this.editionsService.getAllByContestId(contestId)
    .then(u => {
      const x: Array<EditionModel> = u.data;
      this.listContest = x;
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }
}
