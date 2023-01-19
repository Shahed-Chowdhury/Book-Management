import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faPenNib, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  genre: any = environment.bookGenres;
  book: any
  bookId!: Number 
  publishers: any
  faInfo = faInfoCircle;
  faPenNib = faPenNib;
  faCross = faTrash;
  faPlus = faPlusCircle;
  bookDetails: any

  // ----------------------- Form input
  title!: string
  type!: number
  description!: string
  price!: number
  publishedDate!: string
  publisherId!: number
  authors: any
  totalAuthors!: number

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      !Number(param.get('id')) ? this.router.navigate(['/books']) : this.bookId = Number(param.get('id'));
    })
    this.getBookDetails(this.bookId)
    this.getPublishers()
  }

  getBookDetails(id: Number)
  {
    this.apiservice.getBookById(id).subscribe(res => {
      this.bookDetails = res
      this.title = this.bookDetails.data.title
      this.type = this.bookDetails.data.type
      this.description = this.bookDetails.data.description
      this.price = this.bookDetails.data.price
      this.publishedDate = this.bookDetails.data.publishedDate.split('T')[0]
      this.publisherId = this.bookDetails.data.publisher.id
      this.authors = this.bookDetails.data.authors
      this.totalAuthors = this.authors.length      
    })
  }

  getAuthors()
  {
    this.apiservice.getAuthors().subscribe(res => {
      this.authors = res;
    })
  }

  getPublishers()
  {
    this.apiservice.getPublishers().subscribe(res => {
      var resp:any = res
      this.publishers = resp.data
    })
  }

  editBook()
  {
    
    const data = {
      "Id": this.bookId,
      "Title": this.title,
      "Type": Number(this.type),
      "Description": this.description,
      "Price": this.price,
      "PublisherId": Number(this.publisherId)
    }

    this.apiservice.editBook(data).subscribe(res => {
      alert("Book updated successfully")
    },err => {
      alert("Error")
      console.log(err)
    })
    
  }

  authorMouseEnter(event: any)
  {
    event.target.style.fontSize = "120%";
  }

  authorMouseLeave(event: any)
  {
    event.target.style.fontSize = "100%";
  }

  deleteAuthor(authorId: Number)
  {
    this.apiservice.deleteAuthor(authorId).subscribe(res => {
      
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> {
        this.router.navigate(['/book/edit', this.bookId])
      })
      
    }, err=> {
      alert("Unable to delete author");
      console.log(err)
    });
  }

  addAuthor()
  {
    this.router.navigate(['/author/add'], {queryParams: {bookId: this.bookId}})
  }
}


