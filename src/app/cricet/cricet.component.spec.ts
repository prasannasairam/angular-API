import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricetComponent } from './cricet.component';

describe('CricetComponent', () => {
  let component: CricetComponent;
  let fixture: ComponentFixture<CricetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
