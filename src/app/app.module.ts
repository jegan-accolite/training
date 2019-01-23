import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { BookComponent } from './book/book.component';
import { BooksModel } from './models/books';
import { LoginComponent } from './login/login.component';
import { BooksService } from './providers/books.service';
import { FileUploaderService } from './providers/file-uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SearchComponent,
    CartComponent,
    OrdersComponent,
    BookFilterPipe,
    BookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ BookFilterPipe ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ BooksModel, BooksService, FileUploaderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
