import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/Interfaces/IAuthor';
import { Authors } from 'src/app/mock-data';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  Authors: IAuthor[] = Authors

  constructor() { }

  ngOnInit(): void {
  }

}
