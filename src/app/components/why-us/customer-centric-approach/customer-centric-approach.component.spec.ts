import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCentricApproachComponent } from './customer-centric-approach.component';

describe('CustomerCentricApproachComponent', () => {
  let component: CustomerCentricApproachComponent;
  let fixture: ComponentFixture<CustomerCentricApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCentricApproachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCentricApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
