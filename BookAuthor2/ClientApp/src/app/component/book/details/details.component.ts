import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book: any
  bookId!: Number
  genre: Array<String> = ["Fantasy", "Science", "Horror"];
  faInfo = faInfoCircle;

  constructor(private apiservice: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param)=>{
      !Number(param.get('id')) ? this.router.navigate(['/books']) : this.bookId = Number(param.get('id'));
    })
    this.GetBookDetails(this.bookId)
  }

  GetBookDetails(bookId: Number)
  {
    this.apiservice.getBookById(bookId).subscribe(res => {
      this.book = res
      console.log(this.book)
    }, err => {
      console.log(err)
      this.router.navigate(['/books'])
    })
  }

  GoToAuthorDetails(event: any)
  {
    this.router.navigate(["/author/details/"+event.target.value]);
  }

}
