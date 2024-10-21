import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl='http://localhost:8080/api/Producto';
  constructor(private http: HttpClient) { }

  getProducto():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
