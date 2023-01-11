import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthorComponent } from './component/author/author.component';
import { BookComponent } from './component/book/book.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorDetailComponent } from './component/author/detail/detail.component';
import { EditComponent as AuthorEditComponent } from './component/author/edit/edit.component';
import { DeleteComponent as AuthorDeleteComponent } from './component/author/delete/delete.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AddComponent as AuthorAddComponent } from './component/author/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    BookComponent,
    HomeComponent,
    NavbarComponent,
    AuthorDetailComponent,
    AuthorEditComponent,
    AuthorDeleteComponent,
    PageNotFoundComponent,
    AuthorAddComponent,
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'author/add', component: AuthorAddComponent},
      {path: 'authors', component: AuthorComponent },
      {path: 'author/details/:id', component: AuthorDetailComponent},
      {path: 'author/edit/:id', component: AuthorEditComponent},
      {path: 'author/delete/:id', component: AuthorDeleteComponent},
      {path: 'books', component: BookComponent},
      {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
    ]),
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }