import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTextareaComponent } from './v-textarea.component';

describe('VTextareaComponent', () => {
  let component: VTextareaComponent;
  let fixture: ComponentFixture<VTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
