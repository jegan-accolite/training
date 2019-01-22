import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    let formData = new FormData();
    formData.append('upload', file, file.name);

    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
      withCredentials: true
    };

    // const req = new HttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', formData, options);
    // return this.http.request(req);
    return this.http.post('/FileUploaderRESTService-1/rest/upload', formData, options);
  }
}
