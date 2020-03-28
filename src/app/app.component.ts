import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  bookidtoupdate=null;
  bookform: FormGroup;
  allbooks: Observable<Book[]>
  constructor(private formbuilder: FormBuilder, private bookservice: BookService) { }

  ngOnInit() {
    this.bookform = this.formbuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      rating: ['', Validators.required]
    });
    this.getsoftBooks();
  }
  onformsubmit() {
   
    let book = this.bookform.value;
    this.createbooks(book);
    this.bookform.reset();
  }
  createbooks(book: Book) {
    if(this.bookidtoupdate==null){
    this.bookservice.createbook(book).subscribe(
      book => {       
        this.getsoftBooks();
        this.bookidtoupdate=null;
      }
    );
    }
    else{
      book.id=this.bookidtoupdate;
      this.bookservice.updatebook(book).subscribe(book=>{
        this.getsoftBooks();
         this.bookidtoupdate=null;
      });
    }
  }
  getsoftBooks() {
    this.allbooks = this.bookservice.getbookfromstore();

  }

  booktoEdit(bookid:string){
this.bookservice.getbookbyid(bookid).subscribe(book=>{
  this.bookidtoupdate=bookid;
  this.bookform.controls["name"].setValue(book.name);
  this.bookform.controls["category"].setValue(book.category);
});
  }

  bookdelete(bookid:string){
this.bookservice.Deletebook(bookid)
.subscribe(book=>{
  this.getsoftBooks();
});
  }

}
