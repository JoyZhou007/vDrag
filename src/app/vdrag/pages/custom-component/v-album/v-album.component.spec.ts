import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAlbumComponent } from './v-album.component';

describe('VAlbumComponent', () => {
  let component: VAlbumComponent;
  let fixture: ComponentFixture<VAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
