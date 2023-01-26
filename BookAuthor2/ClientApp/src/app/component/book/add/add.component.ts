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
  authorId: number = 0 
  faPlus= faPlusCircle
  title!: string
  genreId: number = 0
  description!: string
  price!: number
  publishers: any
  publisherId: number = 0
  selectedAuthor!: Array<any>

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getPublishers()
    this.getAuthors()
  }

  getPublishers()
  {
    this.apiservice.getPublishersNoPage().subscribe(res => {
      var resp:any = res
      this.publishers = resp.data
    })
  }

  getAuthors()
  {
    this.apiservice.getAllAuthors().subscribe(res => {
      var resp: any = res
      this.authors = resp.data
      console.log(this.authors);
    })
  }

  addBook()
  {
    const data = {
      "Title": this.title,
      "Type": Number(this.genreId),
      "Description": this.description,
      "Price": this.price,
      "PublisherId": Number(this.publisherId)
    }

    this.apiservice.addBook(data).subscribe(res => {
      var resp:any = res
      //console.log(resp.data.id)
      console.log(this.selectedAuthor);


      for(let author of this.selectedAuthor)
      {
        author.bookId = resp.data.id
        this.apiservice.editAuthor(author).subscribe(response => {
          var author:any = response
          author.status == "success" ? alert("Updated successfully") : alert("Failed to update")
        });
      }
  
      
    }, err => {
      alert("Unable to add book"); console.log(err)
    })
  }


  selectedAuthors(event:any)
  {
    this.selectedAuthor = event
  }

}
