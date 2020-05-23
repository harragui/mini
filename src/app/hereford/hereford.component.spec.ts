import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerefordComponent } from './hereford.component';

describe('HerefordComponent', () => {
  let component: HerefordComponent;
  let fixture: ComponentFixture<HerefordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerefordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerefordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
