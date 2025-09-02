import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsletter } from './newsletter';

describe('Newsletter', () => {
  let component: Newsletter;
  let fixture: ComponentFixture<Newsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
