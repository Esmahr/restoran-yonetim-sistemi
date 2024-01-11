import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../Environments/environments'

@Injectable({
  providedIn: 'root'
})
export class RestoranYonetimiService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  signup(data: any) {
    return this.httpClient.post(this.url + "./signup", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  login(data: any) {
    return this.httpClient.post(this.url + "./login/", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  forgotPassword(data: any) {
    return this.httpClient.post(this.url + "./forgot-password/", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

}
