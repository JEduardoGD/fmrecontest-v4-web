import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
  animations: [routerTransition()]
})
export class ContestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
