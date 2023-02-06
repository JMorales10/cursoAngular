import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/Interfaces/interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  public listadoEntradas: Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Metas',
        resumen: 'Mis metas son conseguir trabajar de Desarrollador Web y aprender mucho'
      },
      {
        titulo: 'Logros',
        resumen: 'Tengo un titulo de B2, un grado medio y un superior'
      },
      {
        titulo: 'Aficiones',
        resumen: 'Además de programar, en tiempos libres, me informo sobre ordenadores, más enfocado al tema de hardware'
      }
    ]
  }

  ngOnInit(): void {

  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }
}
