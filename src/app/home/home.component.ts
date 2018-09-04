import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;

  error: string;

  // ** Estilo SIN Inyeccion de dependencia
  // private nasaApi: NasaApiService;
  // constructor(nasaApi: NasaApiService) {
  //   this.nasaApi = nasaApi;
  // }

  // ** Estilo CON inyeccion de dependencias
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {

    this.nasaApi.getApod()
      .subscribe(data => {
        // setTimeout(() => {
          this.apod = data;
        // }, 1500);
      }, error => {
        setTimeout(() => {
          console.log('Error al conectar con el servidor');
          this.error = 'Error al conectar con el servidor';
        }, 2000);
      });

    // this.apod = this.nasaApi.getApod();

    // this.apod = {
    //   date: '2017-11-08',
    //   title: 'NGC Hubble\'s variable nebula',
    //   explanation: 'explanation',
    //   hdurl: 'hdurl',
    //   media_type: 'image',
    //   service_version: 'v1',
    //   url: 'https://data.whicdn.com/images/258990368/original.gif'
    // };
  }

  // ejemploObservable() {
  //   Rx.Observable.from(['one', 'two', 'three'])
  //     .take(2)
  //     .map(function(s) { s + ' : on ' + new Date()})
  //     .subscribe(function(s) { console.log(s); });
  // }
}
