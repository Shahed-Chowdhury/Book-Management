import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  authorId!: Number;

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      !Number(param.get('id')) ? this.router.navigate(['/author/'+this.authorId]) : this.authorId = Number(param.get('id'));
    })
  }

}
