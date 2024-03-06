import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoCompraService } from './carrinho-compra.service';

describe('CarrinhoCompraService', () => {
  let component: CarrinhoCompraService;
  let fixture: ComponentFixture<CarrinhoCompraService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrinhoCompraService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoCompraService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
