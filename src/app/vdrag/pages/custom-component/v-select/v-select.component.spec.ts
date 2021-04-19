import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSelectComponent } from './v-select.component';

describe('VSelectComponent', () => {
  let component: VSelectComponent;
  let fixture: ComponentFixture<VSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
