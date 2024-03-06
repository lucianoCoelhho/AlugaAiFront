import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/Categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  inserir(obj:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.url, obj);
  }

  alterar(obj:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

}
