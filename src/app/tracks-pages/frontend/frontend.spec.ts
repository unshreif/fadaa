import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frontend } from './frontend';

describe('Frontend', () => {
  let component: Frontend;
  let fixture: ComponentFixture<Frontend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frontend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frontend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
