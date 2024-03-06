import { Component } from '@angular/core';
import { Produto } from '../../models/Produto';
import { ProdutoService } from '../../service/produto/produto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  produto = new Produto();

  bntCadastro:boolean = true;

  constructor(private service:ProdutoService){}

  produtos:Produto[] = [];

  selecionar():void{
    this.service.buscarTodos()
    .subscribe(retorno => this.produtos = retorno);
  }
  
  cadastrar():void{
    this.service.inserir(this.produto)
    .subscribe(retorno => {
      this.produtos.push(retorno);
      this.produto = new Produto();
      alert("produto cadastrado com sucesso");
    });
  }

  tabelaCadastro: boolean = true;
  tabela: boolean = true;


  //metodo para selecionar um cliente especifico
  selecionarCliente(posicao: number): void {

    //selecionar cliente  no vetor
    this.produto = this.produtos[posicao];

    //visibilidade dos botoes
    this.bntCadastro = false;

    this.tabelaCadastro = false;

    //visibilidade da tabela
    this.tabela = false;
  }




  //metodo de inicializacao
  ngOnInit() {
    this.selecionar();
  }





/*

  layout: 'list' | "grid" = "list";

  produtos!: Produto[];

  constructor(private productService: ProdutoService) { }

  ngOnInit() {
    this.productService.buscarTodos().subscribe();
  }

  getSeverity(produtos: Produto): string | undefined {
    switch (produtos.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;

    }
  };
*/







}
