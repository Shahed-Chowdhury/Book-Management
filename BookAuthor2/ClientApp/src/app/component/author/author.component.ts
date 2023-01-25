import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { faInfoCircle, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {

    authors: any;
    faInfo = faInfoCircle;
    faPenNib = faPenNib;
    faCross = faTrash;

    constructor(private apiservice: ApiService) { }

    ngOnInit(): void {
      this.getAllAuthors();
    }

    public getAllAuthors()
    {
        this.apiservice.getAuthors().subscribe(res => {
          this.authors = res
          this.authors = this.authors.data
        })
    }
}
