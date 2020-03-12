import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestologsComponent } from './contestologs.component';

describe('ContestologsComponent', () => {
  let component: ContestologsComponent;
  let fixture: ComponentFixture<ContestologsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestologsComponent ]
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
