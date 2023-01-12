import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { faInfoCircle, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  public getAllBooks()
  {
    this.apiservice.getAllBooks().subscribe(res => {
      this.books = res
      console.log(this.books)
      this.router.navigate(['/books'])
    })
  }

}
