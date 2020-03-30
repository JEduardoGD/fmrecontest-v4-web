import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QsosComponent } from './qsos.component';
import { QsosRoutingModule } from './qsos-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { QsosService } from 'src/app/services/qsos.service';
import { BsComponentComponent } from '../bs-component/bs-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContestlogService } from 'src/app/services/contestlog.service';
import { ReportsService } from 'src/app/services/reports.service';
import { DxccEntityService } from 'src/app/services/dxccentity.service';
import { FrequencyService } from 'src/app/services/frequency.service';
import { ButtonsComponent, AlertComponent, ModalComponent, CollapseComponent } from '../bs-component/components';
import { DatePickerComponent, DropdownComponent, PaginationComponent } from '../bs-component/components';
import { PopOverComponent, ProgressbarComponent, TabsComponent } from '../bs-component/components';
import { RatingComponent, TooltipComponent, TimepickerComponent } from '../bs-component/components';
import { BandService } from 'src/app/services/band.service';

@NgModule({
  declarations: [
    QsosComponent,
    BsComponentComponent,
    ButtonsComponent,
    AlertComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
  ],
  imports: [
    CommonModule,
    QsosRoutingModule,
    PageHeaderModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QsosService,
    ContestlogService,
    ReportsService,
    DxccEntityService,
    FrequencyService,
    BandService
  ]
})
export class QsosModule { }
