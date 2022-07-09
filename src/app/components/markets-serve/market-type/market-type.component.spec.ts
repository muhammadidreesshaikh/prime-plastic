import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTypeComponent } from './market-type.component';

describe('MarketTypeComponent', () => {
  let component: MarketTypeComponent;
  let fixture: ComponentFixture<MarketTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
