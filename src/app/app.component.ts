import { Component } from '@angular/core';
import { RickAndMortyAPIService } from './services/rick-and-morty-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'rick-n-morty-app';
  characters: Array<any>;

  constructor(private rickAndMortyAPIService: RickAndMortyAPIService) {
    this.characters = [];
  }

  ngOnInit() {
    // Load all characters
    this.rickAndMortyAPIService.getAllCharacters().subscribe(response => {
      console.log(response);
      this.characters = response.results;
    });
  }

}
