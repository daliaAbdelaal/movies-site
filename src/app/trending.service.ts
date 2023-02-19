import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }

  getTrending(mediatype:any):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=8682944f70561fbcb1563bb52a1c26a1`)
  }
  getDetails(mediatype:any,id:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=8682944f70561fbcb1563bb52a1c26a1&language=en-US`)
  }
}
