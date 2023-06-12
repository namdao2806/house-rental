import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticCateComponent } from './admin-statistic-cate.component';

describe('AdminStatisticCateComponent', () => {
  let component: AdminStatisticCateComponent;
  let fixture: ComponentFixture<AdminStatisticCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStatisticCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
