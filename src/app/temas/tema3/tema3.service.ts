import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class Tema3Service {
  constructor(private http: HttpClient) {}
  upload(file: File, api: string): Observable<any> {
    // Create form data
    const formData = new FormData();
    api = 'http://34.67.213.198:3000/api/' + api;

    console.log(file);

    // Store form name as "file" with file data
    formData.append('datos', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(api, formData);
  }
}
