import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteosComponent } from './conteos.component';
import { ChartsModule } from 'ng2-charts';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsElementModule } from '../bs-element/bs-element.module';

describe('ConteosComponent', () => {
  let component: ConteosComponent;
  let fixture: ComponentFixture<ConteosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteosComponent ],
      imports: [
        BsElementModule,
        ChartsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
