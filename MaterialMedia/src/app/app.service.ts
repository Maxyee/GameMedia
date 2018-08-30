import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iapp } from './appdata';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  private _url: string = "./assets/data.json";

  constructor(private http: HttpClient) { }

      getAppValue(): Observable<Iapp[]>{
        return this.http.get<Iapp[]>(this._url);
      }
}


