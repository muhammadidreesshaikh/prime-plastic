import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFixedAreaComponent } from './contact-fixed-area.component';

describe('ContactFixedAreaComponent', () => {
  let component: ContactFixedAreaComponent;
  let fixture: ComponentFixture<ContactFixedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFixedAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFixedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
