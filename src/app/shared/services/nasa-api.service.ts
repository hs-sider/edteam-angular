import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';

@Injectable()
export class NasaApiService {

  private readonly DATA: Apod = {
    date: '2017-11-08',
      title: 'NGC Hubble\'s variable nebula',
      explanation: 'explanation',
      hdurl: 'hdurl',
      media_type: 'image',
      service_version: 'v1',
      url: 'https://data.whicdn.com/images/258990368/original.gif'
  };

  // Dependenci Injection: HttpClient
  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    // return this.DATA;
    // return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`); // Uso de Template Literals
  }

  getMarsImages(camara: string): Observable<any> {
    return this.httpClient.get(`${MARS_URL}&api_key=${API_KEY}&camera=${camara}`);
  }
}
