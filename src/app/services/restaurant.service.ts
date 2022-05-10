import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }


  getResturants(url:string): Observable <any> {

    console.log(url)
    return this.http.get(url).pipe(map(data=>{{
      return data;
    }}))
  } 
}
