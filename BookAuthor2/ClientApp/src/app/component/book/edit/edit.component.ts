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
  spinner: boolean = false

  // ----------------------- Form input
  title!: string
  type!: number
  description!: string
  price!: number
  publishedDate!: string
  publisherId!: number
  authors: any
  totalAuthors!: number
  allAuthors!: any
  selectedAuthorIds: Array<string> = []
  selectedAuthors: Array<object> = []

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      !Number(param.get('id')) ? this.router.navigate(['/books']) : this.bookId = Number(param.get('id'));
    })
    this.getBookDetails(this.bookId)
    this.getPublishers()
    this.getAuthors()
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
      this.selectedAuthors = this.authors

      console.log("authors:", this.authors);
      console.log("selected authors:", this.selectedAuthors);

      var selectedAuthorIdsTemp = []
      for(let i=0; i<this.authors.length; i++)
      {
        selectedAuthorIdsTemp.push(this.authors[i].id)
      }

      this.selectedAuthorIds = selectedAuthorIdsTemp;
      
    })
  }

  getAuthors()
  {
    this.apiservice.getAllAuthors().subscribe(res => {
      this.allAuthors = res;
      this.allAuthors = this.allAuthors.data;
    })
  }

  getPublishers()
  {
    this.apiservice.getPublishersNoPage().subscribe(res => {
      var resp:any = res
      this.publishers = resp.data
    })
  }

  editBook()
  {
    this.spinner = true
    const data = {
      "Id": this.bookId,
      "Title": this.title,
      "Type": Number(this.type),
      "Description": this.description,
      "Price": this.price,
      "PublisherId": Number(this.publisherId)
    }

    // finds if the selected author has been unselected from the authors list
    // if none has been removed it returns an empty array
    var arr = this.authors.filter((el:any) => !this.selectedAuthors.some((el2:any) => el.id === el2.id))
    console.log("After matching authors selected with authors:", arr);

    if (arr.length > 0){
      arr.forEach((el:any)=>{
        el.bookId = null
        this.apiservice.editAuthor(el).subscribe(response => {
          var resp = response
          console.log(resp);
        });
      })
    } 
    else {
      this.selectedAuthors.forEach((el:any)=>{
        el.bookId = this.bookId
        this.apiservice.editAuthor(el).subscribe(response => {
          var resp = response
        });
      })
    }

    this.apiservice.editBook(data).subscribe(res => {
        alert("Successfully updated")
        this.spinner = false
        this.router.navigate(['/books'], {queryParams: {page: 1}})
      },err => {
        alert("Error")
        this.spinner = false
      })
  }


  addAuthor() { this.router.navigate(['/author/add'], {queryParams: {bookId: this.bookId}}) }

  selectedAuthorFn(event: Array<object>) { this.selectedAuthors = event }

  authorMouseLeave(event: any) { event.target.style.fontSize = "100%"; }

  authorMouseEnter(event: any) { event.target.style.fontSize = "120%"; }

    // deleteAuthor(authorId: Number)
  // {
  //   this.apiservice.deleteAuthor(authorId).subscribe(res => {
      
  //     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> {
  //       this.router.navigate(['/book/edit', this.bookId])
  //     })
      
  //   }, err=> {
  //     alert("Unable to delete author");
  //     console.log(err)
  //   });
  // }

}


