import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovComponent } from './single-mov.component';

describe('SingleMovComponent', () => {
  let component: SingleMovComponent;
  let fixture: ComponentFixture<SingleMovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
