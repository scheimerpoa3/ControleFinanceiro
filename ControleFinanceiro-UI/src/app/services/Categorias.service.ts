import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { HttpHeaders } from '@Angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';
import { threadId } from 'worker_threads';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

url = 'api/Categorias'

constructor(private http: HttpClient) { }

PegarTodos(): Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.url);
  }

PegarCatedoriaPeloId(categoriaId: number) : Observable<Categoria>{
  const apiUrl = `${this.url}/${categoriaId}`;
  return this.http.get<Categoria>(apiUrl)
  }
  NovaCategoria(categoria: Categoria) : Observable<any>{
    return this.http.post<Categoria>(this.url, categoria, httpOptions)
  }
  AtualizarCategoria(categoriaId: number, categoria: Categoria): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.put<Categoria>(apiUrl,categoria,httpOptions);
  }
  ExcluirCategoria(categoriaId: number): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.delete<number>(apiUrl,httpOptions);
  }
}