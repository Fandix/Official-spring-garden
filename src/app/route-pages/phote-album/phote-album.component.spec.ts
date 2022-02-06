import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoteAlbumComponent } from './phote-album.component';

describe('PhoteAlbumComponent', () => {
  let component: PhoteAlbumComponent;
  let fixture: ComponentFixture<PhoteAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoteAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoteAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
