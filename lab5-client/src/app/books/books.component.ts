import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  constructor(
    private authService: AuthService){

  }

  books = [{
    name:"The Midnight Library",
    src:"https://m.media-amazon.com/images/I/41ATfFjhelL._SX329_BO1,204,203,200_.jpg",
    author:"Matt Haig",
    genre:"Science fiction, Fantasy, Philosophical novel",
    year: 2020,
    desc:"Nora Seed feels stuck in her life, bound to the choices she made that she still isn't sure were right. When Nora is ready to leave it all behind, she finds herself in a peculiar library, where each of the infinite books offers a portal to a parallel world, showing her all the many ways her life could have been slightly or drastically different, had she made other decisions.",
    cost: 13.29
  }]

  ngOnInit(){
  this.authService.getBooks().subscribe({next:(data:any) => this.books = data})
  }

  order(){
    
  }
}
