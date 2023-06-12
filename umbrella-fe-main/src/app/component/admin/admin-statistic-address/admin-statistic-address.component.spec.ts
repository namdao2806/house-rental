import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticAddressComponent } from './admin-statistic-address.component';

describe('AdminStatisticAddressComponent', () => {
  let component: AdminStatisticAddressComponent;
  let fixture: ComponentFixture<AdminStatisticAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStatisticAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
