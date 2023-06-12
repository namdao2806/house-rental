import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticPriceComponent } from './admin-statistic-price.component';

describe('AdminStatisticPriceComponent', () => {
  let component: AdminStatisticPriceComponent;
  let fixture: ComponentFixture<AdminStatisticPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStatisticPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
