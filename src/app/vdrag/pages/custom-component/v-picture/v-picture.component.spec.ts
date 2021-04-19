import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPictureComponent } from './v-picture.component';

describe('VPictureComponent', () => {
  let component: VPictureComponent;
  let fixture: ComponentFixture<VPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
