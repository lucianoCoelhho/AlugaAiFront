import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../../models/Cidade';

@Injectable({
  providedIn: 'root'
})

export class CidadeService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.url);
  }

  inserir(obj:Cidade):Observable<Cidade>{
    return this.http.post<Cidade>(this.url, obj);
  }

  alterar(obj:Cidade):Observable<Cidade>{
    return this.http.put<Cidade>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }


}
