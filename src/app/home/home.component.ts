import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
API_EMDPOINT ='https://jsonplaceholder.typicode.com/users';
movies:Movie[];
  constructor(private moviesService:MoviesService,private httpClient:HttpClient) { 
      httpClient.get(this.API_EMDPOINT).subscribe((data:Movie[])=>{
        this.movies=data;
      })
    }

  ngOnInit() {
  }

}
