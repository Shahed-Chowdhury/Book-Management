import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  genre: Array<String> = ["Fantasy", "Science", "Horror"];
  authors: any
  faPlus= faPlusCircle
  title!: string
  genreId: number = 0
  description!: string
  price!: number
  publishers: any
  publisherId: number = 0

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getPublishers()
  }

  getPublishers()
  {
    this.apiservice.getPublishers().subscribe(res => {
      var resp:any = res
      this.publishers = resp.data
    })
  }

  // getAuthor()
  // {
  //   this.apiservice.getAuthors().subscribe(res => {
  //     this.authors = res;
  //     console.log(this.authors)
  //   })
  // }

  addBook()
  {

    const data = {
      "Title": this.title,
      "Type": Number(this.genreId),
      "Description": this.description,
      "Price": this.price,
      "PublisherId": Number(this.publisherId)
    }

    console.log(data);

    this.apiservice.addBook(data).subscribe(res => {
      console.log(res)
      return this.router.navigate(['/books'])
    }, err => {
      alert("Unable to add book"); console.log(err)
    })
  }
}
