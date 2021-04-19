import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRadioComponent } from './v-radio.component';

describe('VRadioComponent', () => {
  let component: VRadioComponent;
  let fixture: ComponentFixture<VRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
