import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.css']
})
export class FunFactsComponent {

  randomFact: string = "";
  private apiUrl = 'https://uselessfacts.jsph.pl/random.json';

  constructor(private http: HttpClient) { 
    this.getUselessFact().subscribe({
      next: (response: any) => {
        this.randomFact = response.text;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getUselessFact(): Observable<{ text: string }> {
    return this.http.get<{ text: string }>(this.apiUrl);
  }

}
