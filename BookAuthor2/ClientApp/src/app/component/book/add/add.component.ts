import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  genre: Array<String> = ["Fantasy", "Science", "Horror"];
  authors: any

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAuthor()
  }

  getAuthor()
  {
    this.apiservice.getAuthors().subscribe(res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

  addBook()
  {
    const title = (<HTMLInputElement>document.querySelector("#BookName")).value;
    const genre = Number((<HTMLInputElement>document.querySelector("#selectGenre")).value);
    const author = Number((<HTMLInputElement>document.querySelector("#selectAuthor")).value);

    const data = {
      "Title": title,
      "Type": genre,
      "AuthorId": author
    }

    this.apiservice.addBook(data).subscribe(res => {
      console.log(res)
      return this.router.navigate(['/books'])
    }, err => {
      alert("Unable to add book"); console.log(err)
    })
  }
}
