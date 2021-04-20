import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEFieldComponent } from './v-efield.component';

describe('VEFieldComponent', () => {
  let component: VEFieldComponent;
  let fixture: ComponentFixture<VEFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VEFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VEFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
