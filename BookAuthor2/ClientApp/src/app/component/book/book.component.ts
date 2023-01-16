import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { faInfoCircle, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books: any
  faInfo = faInfoCircle;
  faPenNib = faPenNib;
  faCross = faTrash;
  genre: Array<String> = ["Fantasy", "Science", "Horror"];
  page: Number = 1
  totalCount!: 0

  constructor(private apiservice: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.page = Number(params.get('page')) 
      this.getAllBooks(this.page)
    })
  }

  public getAllBooks(page : Number)
  {
    this.apiservice.getAllBooks(page).subscribe(res => {
      this.books = res
      this.totalCount = this.books.data[0].totalCount // total count is given in the dtos
    }, err => {
      console.log(err)
    })
  }
}
