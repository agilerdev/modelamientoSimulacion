import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tema7Service {
  constructor(private http: HttpClient) { }
  upload(api: string): Observable<any> {
    // Create form data
    api = 'http://34.67.213.198:3000/api/' + api;


    // Store form name as "file" with file data

    // Make http post request over api
    // with formData as req
    return this.http.get(api);
  }
}
