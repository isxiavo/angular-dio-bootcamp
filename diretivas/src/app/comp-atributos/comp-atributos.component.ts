import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
  estilo: string = "enable";
  corFundo: string = 'black';
  corTexto: string = 'white';
  item:string = "";
  lista:string[] = []

  adicionarLista() {
    this.lista.push(this.item)
    this.item = ""
  }

  trocar() {
    this.estilo == "disable" ?
      this.estilo = "enable":
        this.estilo = "disable"
  }
}