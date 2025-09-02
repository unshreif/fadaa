import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ux } from './ux';

describe('Ux', () => {
  let component: Ux;
  let fixture: ComponentFixture<Ux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ux);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
