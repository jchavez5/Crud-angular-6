import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movie:Movie={
    name:null,
    username:null,
    email:null
  };
  constructor() { }

  ngOnInit() {
  }
  saveMovie(){
    console.log(this.movie);
    
  }
}
