import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsQRcodeComponent } from './js-qrcode.component';

describe('JsQRcodeComponent', () => {
  let component: JsQRcodeComponent;
  let fixture: ComponentFixture<JsQRcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsQRcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsQRcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
