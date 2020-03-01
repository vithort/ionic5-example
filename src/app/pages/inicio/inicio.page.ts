import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [];

  constructor(
    private menu: MenuController
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menu.toggle();
  }
}

interface Componente {
  icone: string;
  nome: string;
  link: string;
}
