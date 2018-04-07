import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CielorrasosComponent } from './cielorrasos.component';

describe('CielorrasosComponent', () => {
  let component: CielorrasosComponent;
  let fixture: ComponentFixture<CielorrasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CielorrasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CielorrasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
