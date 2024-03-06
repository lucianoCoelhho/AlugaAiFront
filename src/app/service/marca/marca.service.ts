import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../../models/Marca';

@Injectable({
  providedIn: 'root'
})

export class MarcaService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<Marca[]>{
    return this.http.get<Marca[]>(this.url);
  }

  inserir(obj:Marca):Observable<Marca>{
    return this.http.post<Marca>(this.url, obj);
  }

  alterar(obj:Marca):Observable<Marca>{
    return this.http.put<Marca>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }


}
