import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let component: ProdutoService;
  let fixture: ComponentFixture<ProdutoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
