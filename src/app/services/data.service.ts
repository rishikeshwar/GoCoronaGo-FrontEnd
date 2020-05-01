import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Name } from '../models/names';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getnames(): Observable<Name[]>{
    return this.http.get<Name[]>("/names")
  }
}

