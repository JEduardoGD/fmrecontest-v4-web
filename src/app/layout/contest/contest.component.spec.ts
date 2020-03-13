import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from 'ng2-charts';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsElementModule } from '../bs-element/bs-element.module';
import { ContestComponent } from './contest.component';

describe('ContestComponent', () => {
  let component: ContestComponent;
  let fixture: ComponentFixture<ContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestComponent ],
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
    fixture = TestBed.createComponent(ContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
