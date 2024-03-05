import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaService } from './marca.service';

describe('MarcaService', () => {
  let component: MarcaService;
  let fixture: ComponentFixture<MarcaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcaService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
