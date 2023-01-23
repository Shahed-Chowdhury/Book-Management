import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})

export class PublisherComponent implements OnInit {

  publishers:any;
  spinner:boolean = true; // starts as true, when the data is loaded it gives false
  pageLoadSuccess:boolean = false; // gives true if the data is loaded else gives false
  faInfo = faInfoCircle;
  faPenNib = faPenNib;
  faCross = faTrash;

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.getAllPublishers({page:1, pageSize: 10, search: ''}).subscribe(res => {
      this.publishers = res
      this.publishers = this.publishers.data
      this.spinner = false
      this.pageLoadSuccess = true;
    },
    err => {
      console.log(err);
      this.pageLoadSuccess = false
      this.spinner = false
    });
  }

  searchField!: string

  search(){}

}
