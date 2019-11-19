import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})

export class DatabindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  // keyUp(event: any) {
  //   this.nome = event.target.value;
  // }
}
