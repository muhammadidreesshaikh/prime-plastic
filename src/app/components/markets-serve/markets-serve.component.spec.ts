import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsServeComponent } from './markets-serve.component';

describe('MarketsServeComponent', () => {
  let component: MarketsServeComponent;
  let fixture: ComponentFixture<MarketsServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketsServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
