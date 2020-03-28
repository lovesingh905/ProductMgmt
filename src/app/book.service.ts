import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookurl = "/api/books";
  constructor(private http: HttpClient) { }
getbookbyid(bookid:string){
return this.http.get<Book>(this.bookurl + "/"+ bookid )
}

  //Get method
  getbookfromstore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookurl)
  }

  //create Method
  createbook(book: Book): Observable<Book> {
    let httpheaders = new HttpHeaders()
      .set('Content Type', 'application/json')
    let options = {
      headers: httpheaders
    };
    return this.http.post<Book>(this.bookurl , book, options)
  }
  //put method
  updatebook(book: Book): Observable<number> {
    let httpheaders = new HttpHeaders()
      .set('Content Type', 'application/json')
    let options = {
      headers: httpheaders
    };
    return this.http.put<number>(this.bookurl + "/"+ book.id , book, options)
  }

  //Delete Method

Deletebook(bookid: string): Observable<number> {
    let httpheaders = new HttpHeaders()
      .set('Content Type', 'application/json')
    let options = {
      headers: httpheaders
    };
    return this.http.delete<number>(this.bookurl + "/"+ bookid)
  }

}
