import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor(public http: HttpClient) { }

  public getComics(offset: string, limit: string) {
    let url =
      'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=10fe8c8b1d77bb1c05fe46386710dfa1&hash=0b95afabd9fa769cb0cd760379d92959' +
      '&offset=' +
      offset +
      '&limit=' +
      limit;

    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5)
    );
  }
}
