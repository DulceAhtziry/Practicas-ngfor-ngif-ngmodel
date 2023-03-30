import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public computadoras:any=[
    {nombre:"Computadora",marca:"Hp",modelo:"ZBOOK",memoria:"250",procesador:"Intel",discoDuro:"Solido"},
    {nombre:"Laptop", marca:"Lenovo", modelo:"Ideapad 330", memoria:"8GB", procesador:"Intel Core i7", discoDuro:"SSD 512GB"},
    {nombre:"Computadora de Escritorio", marca:"Lenovo", modelo:"ThinkCentre M710s", memoria:"4GB", procesador:"Intel Core i5", discoDuro:"SSD 256GB"},
    {nombre:"Computadora de Escritorio", marca:"Lenovo", modelo:"ThinkCentre M920s", memoria:"16GB", procesador:"Intel Core i9", discoDuro:"SSD 1TB"},
    {nombre:"Laptop", marca:"Lenovo", modelo:"Yoga C940", memoria:"16GB", procesador:"Intel Core i7", discoDuro:"SSD 512GB"},
    {nombre:"Computadora", marca:"Hp", modelo:"IdeaCentre AIO 5i", memoria:"8GB", procesador:"Intel Core i5", discoDuro:"SSD 256GB"},
    {nombre:"Laptop para Gaming", marca:"Lenovo", modelo:"Legion Y540", memoria:"16GB", procesador:"Intel Core i7", discoDuro:"SSD 1TB"},
    {nombre:"Laptop", marca:"Lenovo", modelo:"ThinkPad X1 Carbon", memoria:"16GB", procesador:"Intel Core i7", discoDuro:"SSD 1TB"}

  ]

  public mayorEdad(edad:number) : boolean {
		if (edad >= 18) {
			return true;
		} else {
			return false;
		}
	}
}
