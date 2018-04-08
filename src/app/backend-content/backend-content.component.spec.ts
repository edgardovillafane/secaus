import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendContentComponent } from './backend-content.component';

describe('BackendContentComponent', () => {
  let component: BackendContentComponent;
  let fixture: ComponentFixture<BackendContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
