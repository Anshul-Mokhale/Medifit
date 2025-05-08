import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiUrl = 'http://192.168.1.21:3000/api/contact/contact-request';

  constructor(private http: HttpClient) { }

  sendContactData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);  // POST request
  }
}
