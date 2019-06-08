import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsbarcodeComponent } from './jsbarcode.component';

describe('JsbarcodeComponent', () => {
  let component: JsbarcodeComponent;
  let fixture: ComponentFixture<JsbarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsbarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
