import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeopleService {
  private url = 'https://5c7d27c9dd19010014c8e96e.mockapi.io/api/v1/people';
  private url2 = 'http://5c7d27c9dd19010014c8e96e.mockapi.io/api/v1/countreis';

  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<object> {
    return this.http.get(this.url);
  }

  fetchCountries(): Observable<object> {
    return this.http.get(this.url2);
  }
}
