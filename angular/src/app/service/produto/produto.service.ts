import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../models/Produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  //URL da API
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  buscarTodos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  inserir(obj:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, obj);
  }

  alterar(obj:Produto):Observable<Produto>{
    return this.http.put<Produto>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }
}
