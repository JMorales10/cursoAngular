import { EntradaService } from './../../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/Interfaces/interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  public listadoEntradas: any;

  constructor(private entradaService : EntradaService) {

  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas():void{
    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        console.log(data)
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }
}
