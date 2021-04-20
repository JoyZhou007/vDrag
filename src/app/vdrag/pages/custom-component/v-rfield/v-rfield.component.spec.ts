import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRFieldComponent } from './v-rfield.component';

describe('VRFieldComponent', () => {
  let component: VRFieldComponent;
  let fixture: ComponentFixture<VRFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VRFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VRFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
