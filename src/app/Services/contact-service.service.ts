import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiUrl = 'https://api.develope4u.site/api/contact/';

  constructor(private http: HttpClient) { }

  sendContactData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);  // POST request
  }
}
