import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUsosComponent } from './item-usos.component';

describe('ItemUsosComponent', () => {
  let component: ItemUsosComponent;
  let fixture: ComponentFixture<ItemUsosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUsosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
