import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMl } from './data-ml';

describe('DataMl', () => {
  let component: DataMl;
  let fixture: ComponentFixture<DataMl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataMl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
