import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ContestService } from 'src/app/services/contest.service';
import { ContestModel } from 'src/app/model/contest.model';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
  animations: [routerTransition()]
})
export class ContestComponent implements OnInit {

  listContest: Array<ContestModel>;

  constructor(private contestService: ContestService) { }

  ngOnInit() {
    this.onLoadContests();
  }

  onLoadContests() {
    this.contestService.getContestList()
    .then(u => {
      const x: Array<ContestModel> = u.data;
      this.listContest = x;
    });
  }

}
