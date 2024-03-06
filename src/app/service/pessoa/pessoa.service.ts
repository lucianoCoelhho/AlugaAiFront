import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../../models/Pessoa';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

  inserir(obj:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.url, obj);
  }

  alterar(obj:Pessoa):Observable<Pessoa>{
    return this.http.put<Pessoa>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

}
