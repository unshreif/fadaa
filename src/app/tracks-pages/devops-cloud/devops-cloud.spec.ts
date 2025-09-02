import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsCloud } from './devops-cloud';

describe('DevopsCloud', () => {
  let component: DevopsCloud;
  let fixture: ComponentFixture<DevopsCloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsCloud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsCloud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
