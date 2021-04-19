import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTextComponent } from './v-text.component';

describe('VTextComponent', () => {
  let component: VTextComponent;
  let fixture: ComponentFixture<VTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
