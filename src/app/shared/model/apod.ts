// ng generate interface shared/model/apod
export interface Apod {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl: string;
  media_type: string;
  service_version: string;
}
