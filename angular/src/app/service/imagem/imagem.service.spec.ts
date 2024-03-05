import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemService } from './imagem.service';

describe('ImagemService', () => {
  let component: ImagemService;
  let fixture: ComponentFixture<ImagemService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagemService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagemService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
