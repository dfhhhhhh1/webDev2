import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private apiUrl = 'http://localhost:4002/api/items'; // Adjust the URL as needed
  private itemsSubject = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    this.http.get<any[]>(this.apiUrl)
      .subscribe(items => {
        console.log('Received items:', items); // Log the items
        this.itemsSubject.next(items);
      });
    return this.itemsSubject.asObservable();
  }

  getItem(itemId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${itemId}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  deleteItem(itemId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${itemId}`);
  }

  updateItem(itemId: string, item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${itemId}`, item);
  }
  // Other methods remain the same
}
