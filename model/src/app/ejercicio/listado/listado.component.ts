import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public personas : string = "Hola";

  public inventario:any = [
    {id:1, nombre:"Pantalon", precio: 250},
    {id:1, nombre:"Chamarra", precio: 500},
  ];
  public formulario:any = {
    id:null,
    nombre:null,
    precio:null
  }

  public seleccionar(articulos:any) : void { 
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
  }

  public eliminar(id:number) : void {
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario.splice(index,1);
        alert("Eliminado con exito!!")
        break;
      }
    }
  }

  public agregar() : void {
    let idExistente = this.inventario.find((item: {id: number, nombre: string, precio: number}) => item.id === this.formulario.id);
    if (idExistente) {
      alert("Ya existe un elemento con el mismo ID.");
      return;
    }
    if (this.formulario.id && this.formulario.nombre && this.formulario.precio) {
      let datoNuevo = {
        id: this.formulario.id,
        nombre: this.formulario.nombre,
        precio: this.formulario.precio
      };
      this.inventario.push(datoNuevo);
      alert("Agregado con exito!!");
      this.limpiarCampos();
    } else {
      alert("Faltan campos por llenar");
    }
    
  }

  public editar(id:any) : void {
    if (!this.formulario.id) {
      alert("Debes seleccionar un registro, no has seleccionado nada");
      return;
    }
    if (!this.formulario.nombre || !this.formulario.precio) {
      alert("Faltan campos por llenar para acompletar el formulario");
      return;
    }
  
    let idExistente = this.inventario.find((item: {id: number, nombre: string, precio: number}) => item.id === id);
    if (!idExistente) {
      alert("El ID seleccionado no existe en el inventario");
      return;
    }
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio = this.formulario.precio;
        alert("Se ha modificado con exito!!");
        break;
      }
      
    }this.limpiarCampos();
  }
  
  public limpiarCampos(): void {
    this.formulario.id = null;
    this.formulario.nombre = '';
    this.formulario.precio = '';
    
  }
  
 
  
}
