import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestologsComponent } from './contestologs.component';
import { BsElementModule } from '../bs-element/bs-element.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

describe('ContestologsComponent', () => {
  let component: ContestologsComponent;
  let fixture: ComponentFixture<ContestologsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestologsComponent ],
      imports: [
        BsElementModule,
        ChartsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestologsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
