import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracks } from './tracks';

describe('Tracks', () => {
  let component: Tracks;
  let fixture: ComponentFixture<Tracks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tracks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tracks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
