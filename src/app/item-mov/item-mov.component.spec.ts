import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMovComponent } from './item-mov.component';

describe('ItemMovComponent', () => {
  let component: ItemMovComponent;
  let fixture: ComponentFixture<ItemMovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
