import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  author: any

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public Add() {
    const name = (<HTMLInputElement>document.querySelector("#AuthorName")).value
    const data = {Name: name}
    this.apiservice.addAuthor(data).subscribe(response => {
      this.author = response
      this.router.navigate(['/authors'])
    }, err => {
      console.log(err)
      alert("Unable to add user")
    })
  }
}
