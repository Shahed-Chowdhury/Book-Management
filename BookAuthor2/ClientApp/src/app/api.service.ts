import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers : HttpHeaders;
  Api_URL = "https://localhost:7089/api";

  constructor(private httpclient : HttpClient) { 
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
    });
  }

  getAuthors(){ return this.httpclient.get(`${this.Api_URL}/author`)}

  getAuthorsDetailsWithBooks(id: Number) {return this.httpclient.get(`${this.Api_URL}/author/getbooks/${id}`)}

}
