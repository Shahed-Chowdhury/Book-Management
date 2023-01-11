import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  authorId!: Number;
  author: any;

  constructor(
    private apiservice: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      !Number(param.get('id')) ? this.router.navigate(['/author/'+this.authorId]) : this.authorId = Number(param.get('id'));
    })

    this.getAuthorDetails(this.authorId)
  }

  public getAuthorDetails(id: Number){
    this.apiservice.getOnlyAuthorsById(id).subscribe(result => {
      this.author = result
    });
  }

  public EditAuthor(){
    const name = (<HTMLInputElement>document.querySelector("#AuthorName")).value
    const data = {Id: this.authorId, Name: name}
    this.apiservice.editAuthor(data).subscribe(response => {
      this.author = response
      this.author.status == "success" ? alert("Updated successfully") : alert("Failed to update")
    });

  }




}
