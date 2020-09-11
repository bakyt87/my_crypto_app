import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinInDetailComponent } from './coin-in-detail.component';

describe('CoinInDetailComponent', () => {
  let component: CoinInDetailComponent;
  let fixture: ComponentFixture<CoinInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
