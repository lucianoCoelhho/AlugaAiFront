import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permissao } from '../../models/Permissao';

@Injectable({
  providedIn: 'root'
})

export class PermissaoService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<Permissao[]>{
    return this.http.get<Permissao[]>(this.url);
  }

  inserir(obj:Permissao):Observable<Permissao>{
    return this.http.post<Permissao>(this.url, obj);
  }

  alterar(obj:Permissao):Observable<Permissao>{
    return this.http.put<Permissao>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

}
