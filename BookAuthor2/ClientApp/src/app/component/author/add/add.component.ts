import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  author: any
  bookId!: number
  name!: string
  dob!: string
  sbio!: string


  constructor(private apiservice: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.bookId = Number(params.get("bookId")) // gets either book id or 0
      if(this.bookId === 0 )
      {
        this.router.navigate(["/books"], {queryParams: {page: 1}})
      }
    })
  }

  public Add() {

    const data = {Name: this.name, DOB: this.dob, shortBio: this.sbio, BookId: this.bookId}

    this.apiservice.addAuthor(data).subscribe(response => {
      this.author = response
      this.router.navigate([`/book/edit/${this.bookId}`])
    }, err => {
      console.log(err)
      alert("Unable to add user")
    })
  }
}
