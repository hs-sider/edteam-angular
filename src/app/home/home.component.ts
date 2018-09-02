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

  // ** Estilo sin Inyeccion de dependencia
  // private nasaApi: NasaApiService;
  // constructor(nasaApi: NasaApiService) {
  //   this.nasaApi = nasaApi;
  // }

  // ** Estilo son inyeccion de dependencias
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {

    this.apod = this.nasaApi.getApod();
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

}
