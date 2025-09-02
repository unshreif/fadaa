import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backednd } from './backend';

describe('Backednd', () => {
  let component: Backednd;
  let fixture: ComponentFixture<Backednd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Backednd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Backednd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
