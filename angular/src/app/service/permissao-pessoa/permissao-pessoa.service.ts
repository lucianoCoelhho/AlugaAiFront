import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissaoPessoa } from '../../models/PermissaoPessoa';

@Injectable({
  providedIn: 'root'
})
export class PermissaoPessoaService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<PermissaoPessoa[]>{
    return this.http.get<PermissaoPessoa[]>(this.url);
  }

  inserir(obj:PermissaoPessoa):Observable<PermissaoPessoa>{
    return this.http.post<PermissaoPessoa>(this.url, obj);
  }

  alterar(obj:PermissaoPessoa):Observable<PermissaoPessoa>{
    return this.http.put<PermissaoPessoa>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }


}
