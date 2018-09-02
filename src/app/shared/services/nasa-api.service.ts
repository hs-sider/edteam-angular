import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

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

  constructor() { }

  getApod(): Apod {
    return this.DATA;
  }
}
