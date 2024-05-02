// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Item } from '../../../server/models/item';  // Define this model based on your needs

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:4001/api/items';  // Update port if different

//   constructor(private http: HttpClient) { }

//   getItems(): Observable<Item[]> {
//     return this.http.get<Item[]>(this.baseUrl);
//   }

//   getItem(id: string): Observable<Item> {
//     return this.http.get<Item>(`${this.baseUrl}/${id}`);
//   }

//   addItem(item: Item): Observable<Item> {
//     return this.http.post<Item>(this.baseUrl, item);
//   }

//   updateItem(id: string, item: Item): Observable<Item> {
//     return this.http.put<Item>(`${this.baseUrl}/${id}`, item);
//   }

//   deleteItem(id: string): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${id}`);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const Item = require('../../../server/models/item');

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:4001/api/items';  // Update port if different

  constructor(private http: HttpClient) { }

  getItems(): Observable<typeof Item[]> {
    return this.http.get<typeof Item[]>(this.baseUrl);
  }

  getItem(id: string): Observable<typeof Item> {
    return this.http.get<typeof Item>(`${this.baseUrl}/${id}`);
  }

  addItem(item: typeof Item): Observable<typeof Item> {
    return this.http.post<typeof Item>(this.baseUrl, item);
  }

  updateItem(id: string, item: typeof Item): Observable<typeof Item> {
    return this.http.put<typeof Item>(`${this.baseUrl}/${id}`, item);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
