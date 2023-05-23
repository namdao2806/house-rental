import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {Product} from "../model/product";
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL + '/categories');
  }
  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(API_URL + '/categories', category);
  }

  findById(id:any): Observable<Category> {
    return this.httpClient.get<Category>(API_URL + '/categories/' +id)
  }
  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(API_URL + '/categories/' + id, category);
  }
}
