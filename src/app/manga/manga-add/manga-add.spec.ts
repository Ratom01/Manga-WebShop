import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaAdd } from './manga-add';

describe('MangaAdd', () => {
  let component: MangaAdd;
  let fixture: ComponentFixture<MangaAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
