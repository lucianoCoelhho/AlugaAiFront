import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrinhoCompra } from '../../models/CarrinhoCompra';



@Injectable({
  providedIn: 'root'
})

export class CarrinhoCompraService {

  //URL da API
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  buscarTodos():Observable<CarrinhoCompra[]>{
    return this.http.get<CarrinhoCompra[]>(this.url);
  }

  inserir(obj:CarrinhoCompra):Observable<CarrinhoCompra>{
    return this.http.post<CarrinhoCompra>(this.url, obj);
  }

  alterar(obj:CarrinhoCompra):Observable<CarrinhoCompra>{
    return this.http.put<CarrinhoCompra>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

}
