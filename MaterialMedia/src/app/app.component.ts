import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iapp } from './appdata';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent implements OnInit {

  public appvalues = [];

  constructor(private _appService: AppService) {}

  ngOnInit(){
    this._appService.getAppValue()
      .subscribe(data => this.appvalues = data);
  }


  // spaceScreens:Array<any>;

  // private _url: string = "./data.json";

  // constructor(private http: HttpClient) { }

  //     getAppValue(): Observable<Iapp[]>{
  //       return this.http.get<Iapp[]>(this._url);
  //     }



  //title = 'MaterialMedia';
}




