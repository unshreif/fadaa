import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobile } from './mobile';

describe('Mobile', () => {
  let component: Mobile;
  let fixture: ComponentFixture<Mobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
