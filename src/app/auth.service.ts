import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
observable
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(registerData:any):Observable<any>
  {
    return this.http.post('http://localhost:3000/signUpUsers',registerData)
  }

  login():Observable<any>
  {
    return this.http.get('http://localhost:3000/signUpUsers')
  }


}
