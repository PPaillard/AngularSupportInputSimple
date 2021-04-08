import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Valeur pour le input sans FOR
  title:string = 'AngularSupportInputSimple';

  // Valeur pour le input avec FOR
  films: string[] = ["5eme element", "Alice au pays des merveilles", "Tenet"];

  // l'utilisateur est admin ou pas?
  isAdmin: boolean = true;
}
