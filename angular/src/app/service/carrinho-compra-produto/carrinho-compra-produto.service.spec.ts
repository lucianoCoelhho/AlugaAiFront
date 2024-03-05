import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoCompraProdutoService } from './carrinho-compra-produto.service';

describe('CarrinhoCompraProdutoService', () => {
  let component: CarrinhoCompraProdutoService;
  let fixture: ComponentFixture<CarrinhoCompraProdutoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrinhoCompraProdutoService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoCompraProdutoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
