import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDmcodeComponent } from './js-dmcode.component';

describe('JsDmcodeComponent', () => {
  let component: JsDmcodeComponent;
  let fixture: ComponentFixture<JsDmcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsDmcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDmcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
