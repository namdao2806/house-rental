import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllProductComponent } from './admin-all-product.component';

describe('AdminAllProductComponent', () => {
  let component: AdminAllProductComponent;
  let fixture: ComponentFixture<AdminAllProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
