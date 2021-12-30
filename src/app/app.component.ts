import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poke-api';

  public pokemons$: Observable<any> | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    /*this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200") 
      .subscribe(d=> console.log(d));*/
    this.pokemons$ = this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200" );
  }   
}
