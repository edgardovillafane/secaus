import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocacionplacasComponent } from './colocacionplacas.component';

describe('ColocacionplacasComponent', () => {
  let component: ColocacionplacasComponent;
  let fixture: ComponentFixture<ColocacionplacasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColocacionplacasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocacionplacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
