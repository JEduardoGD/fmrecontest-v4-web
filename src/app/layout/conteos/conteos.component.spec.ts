import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteosComponent } from './conteos.component';

describe('ConteosComponent', () => {
  let component: ConteosComponent;
  let fixture: ComponentFixture<ConteosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteosComponent ]
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
