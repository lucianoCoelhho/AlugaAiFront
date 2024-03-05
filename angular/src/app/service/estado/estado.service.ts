import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../../models/Estado';

@Injectable({
  providedIn: 'root'
})

export class EstadoServive {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<Estado[]>{
    return this.http.get<Estado[]>(this.url);
  }

  inserir(obj:Estado):Observable<Estado>{
    return this.http.post<Estado>(this.url, obj);
  }

  alterar(obj:Estado):Observable<Estado>{
    return this.http.put<Estado>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }


}
