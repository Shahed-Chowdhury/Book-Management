import QueryParams  from './interfaces/QueryParams'
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

  getPublishers() {return this.httpclient.get(`${this.Api_URL}/publisher`)}

  addAuthor(data: any) {return this.httpclient.post(`${this.Api_URL}/author/add`, data, {headers: this.headers}) }

  getAuthors(){ return this.httpclient.get(`${this.Api_URL}/author`)}

  getOnlyAuthorsById(id: Number) {return this.httpclient.get(`${this.Api_URL}/author/${id}`)}

  getAuthorsDetailsWithBooks(id: Number) {return this.httpclient.get(`${this.Api_URL}/author/getbooks/${id}`)}

  editAuthor(data: any) {return this.httpclient.patch(`${this.Api_URL}/author/edit`, data, { headers: this.headers })}

  deleteAuthor(id: Number) {return this.httpclient.delete(`${this.Api_URL}/author/delete/${id}`)}

  getAllBooks(page: Number = 1, search: string = "") {return this.httpclient.get(`${this.Api_URL}/book?page=${page}&search=${search}`)}

  addBook(data: any) {return this.httpclient.post(`${this.Api_URL}/book/add`, data, {headers: this.headers})} 

  getBookById(id: Number) {return this.httpclient.get(`${this.Api_URL}/book/${id}`)}

  deleteBook(id: Number) { return this.httpclient.delete(`${this.Api_URL}/book/${id}`)}

  editBook(data: any) {return this.httpclient.patch(`${this.Api_URL}/book`, data, {headers: this.headers})}

  // ------------------------------------------ Publisher services ----------------------------------------------------------

  // get all publishers
  getAllPublishers(params: QueryParams)
  {
    return this.httpclient.get(`${this.Api_URL}/publisher?pageSize=${params.pageSize}&page=${params.page}&search=${params.search}`)
  }

  // add publisher
  addPublisher(data: object) { return this.httpclient.post(`${this.Api_URL}/publisher/add`, data, {headers: this.headers}) }

  // get a publisher
  getPublisher(id: number) { return this.httpclient.get(`${this.Api_URL}/publisher/${id}`) }

}
