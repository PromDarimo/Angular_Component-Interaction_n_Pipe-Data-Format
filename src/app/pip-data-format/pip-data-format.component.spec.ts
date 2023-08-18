import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipDataFormatComponent } from './pip-data-format.component';

describe('PipDataFormatComponent', () => {
  let component: PipDataFormatComponent;
  let fixture: ComponentFixture<PipDataFormatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipDataFormatComponent]
    });
    fixture = TestBed.createComponent(PipDataFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
