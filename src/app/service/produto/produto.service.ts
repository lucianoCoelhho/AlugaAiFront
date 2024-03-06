import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../models/Produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  //URL da API
  private url:string = 'http://localhost:8080/api/produto';

  constructor(private http:HttpClient) { }

  buscarTodos():Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.url}/get`);
  }

  inserir(obj:Produto):Observable<Produto>{
    return this.http.post<Produto>(`${this.url}/post`, obj);
  }

  alterar(obj:Produto):Observable<Produto>{
    return this.http.put<Produto>(`${this.url}/put`, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}delete`);
  }
}
