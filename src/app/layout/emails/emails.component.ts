import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss'],
  animations: [routerTransition()]
})
export class EmailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
