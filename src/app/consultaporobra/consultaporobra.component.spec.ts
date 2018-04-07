import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaporobraComponent } from './consultaporobra.component';

describe('ConsultaporobraComponent', () => {
  let component: ConsultaporobraComponent;
  let fixture: ComponentFixture<ConsultaporobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaporobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaporobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
