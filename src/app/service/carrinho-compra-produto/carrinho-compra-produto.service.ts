import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrinhoCompraProduto } from '../../models/CarrinhoCompraProduto';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoCompraProdutoService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<CarrinhoCompraProduto[]>{
    return this.http.get<CarrinhoCompraProduto[]>(this.url);
  }

  inserir(obj:CarrinhoCompraProduto):Observable<CarrinhoCompraProduto>{
    return this.http.post<CarrinhoCompraProduto>(this.url, obj);
  }

  alterar(obj:CarrinhoCompraProduto):Observable<CarrinhoCompraProduto>{
    return this.http.put<CarrinhoCompraProduto>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

}
