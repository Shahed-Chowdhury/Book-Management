import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  authorId!: Number;
  author: any;
  genre: Array<String> = ["Fantasy", "Science", "Horror"];
  faInfo = faInfoCircle;

  constructor(private activatedRoute : ActivatedRoute, private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      !Number(param.get('id')) ? this.router.navigate(['/authors']) : this.authorId = Number(param.get('id'));
    })

    this.getAuthorsById(this.authorId)
  }

  public getAuthorsById(authorId:Number)
  {
      this.apiservice.getOnlyAuthorsById(authorId).subscribe(result=>{
        this.author=result
        // this.author.data == null ? this.router.navigate(['/authors']) : console.log(this.author.data.books)
        console.log(this.author);
      })   
  }
}
