import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icone: 'alert',
      nome: 'Alerta',
      link: '/alert'
    },
    {
      icone: 'chatbox-outline',
      nome: 'Abas',
      link: '/action-sheet'
    },
    {
      icone: 'card-outline',
      nome: 'Cards',
      link: '/cards'
    },
    {
      icone: 'calendar-outline',
      nome: 'Datas',
      link: '/datas'
    },
    {
      icone: 'grid-outline',
      nome: 'Grids',
      link: '/grids'
    },
    {
      icone: 'albums-outline',
      nome: 'Inputs',
      link: '/input'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface Componente {
  icone: string;
  nome: string;
  link: string;
}
