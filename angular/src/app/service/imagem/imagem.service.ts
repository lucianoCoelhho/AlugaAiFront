import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from '../../models/Imagem';

@Injectable({
  providedIn: 'root'
})

export class ImagemService {

//URL da API
private url:string = 'http://localhost:8080';

constructor(private http:HttpClient) { }

  buscarTodos():Observable<Imagem[]>{
    return this.http.get<Imagem[]>(this.url);
  }

  inserir(obj:Imagem):Observable<Imagem>{
    return this.http.post<Imagem>(this.url, obj);
  }

  alterar(obj:Imagem):Observable<Imagem>{
    return this.http.put<Imagem>(this.url, obj);
  }

  excluir(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

}
