import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }
  url: any = 'http://localhost:5001/api/v1'  // Localhost ganz wichitg !!!!

  getAllStudents(): Observable<any> {
    return this.http.get(this.url + '/students');
  }

  createStudent(data): Observable<any> {
    return this.http.post(this.url + '/students', data);
  }

  deleteStudent(id): Observable<any> {
    return this.http.delete(this.url + '/students/' + id);
  }

  updateStudent(id,data): Observable<any> {
    return this.http.put(this.url + '/students/' + id, data)
  }
}
