import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  genre: Array<String> = ["Fantasy", "Science", "Horror"];
  book: any
  authors: any
  bookId!: Number 

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      !Number(param.get('id')) ? this.router.navigate(['/books']) : this.bookId = Number(param.get('id'));
    })
    this.getBookDetails(this.bookId)
  }

  getBookDetails(id: Number)
  {
    this.apiservice.getBookById(id).subscribe(res => {
      this.authors = res
      console.log(this.authors)
    })
  }

  getAuthors()
  {
    this.apiservice.getAuthors().subscribe(res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

  editBook()
  {
    const title = (<HTMLInputElement>document.querySelector("#BookName")).value;
    const genre = Number((<HTMLInputElement>document.querySelector("#selectGenre")).value);
    const author = Number((<HTMLInputElement>document.querySelector("#selectAuthor")).value);

    const data = {
      "Id": this.bookId,
      "Title": title,
      "Type": genre,
      "AuthorId": author
    }

    this.apiservice.editBook(data).subscribe(res => {
      alert("Book updated successfully")
    },err => {
      alert("Error")
      console.log(err)
    })
  }

}
