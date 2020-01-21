import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { EmailsService } from 'src/app/services/email.service';
import { SweetAlertService } from 'src/app/services/sweet.alert.service';
import { ActivatedRoute } from '@angular/router';
import { EmailModel } from 'src/app/model/email.model';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss'],
  animations: [routerTransition()]
})
export class EmailsComponent implements OnInit {

  listEmail: Array<EmailModel>;
  editionid: number;

  constructor(
    private emailsService: EmailsService,
    private sweetAlertService: SweetAlertService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => {
        this.editionid = params['editionid'];
      });
    }

  ngOnInit() {
    this.onLoadEmail(this.editionid);
  }

  onLoadEmail(editionid: number) {
    this.emailsService.getAllByEmailId(editionid)
    .then(u => {
      const x: Array<EmailModel> = u.data;
      this.listEmail = x;
    })
    .catch(e => {
      this.sweetAlertService.errorMessage('Error', 'Intente mas tarde');
      console.error(e);
    });
  }
}
