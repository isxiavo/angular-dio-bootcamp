import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes';
  buttonFirst: string = 'ADICIONAR AO CARRINHO';
  buttonsecond: string = "COMPRAR AGORA"
}