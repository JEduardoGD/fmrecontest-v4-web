import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
  animations: [routerTransition()]
})
export class ContestComponent implements OnInit {

  data: any[] = [];
  x: any;

  constructor(private contestService: ContestService) { }

  ngOnInit() {
    this.onLoadContests();
  }

  onLoadContests() {
    this.contestService.getContestList()
    .then(u => {
      console.log('-------------------------------');
      console.log(u);
      console.log('-------------------------------');
      this.x = u;
    });
  }

}
