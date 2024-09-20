import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent {
  imageWith:number = 100;
  imageMargin:number = 2;
  muestraImg:boolean=true;
  mostrarImg():void{
    this.muestraImg=!this.muestraImg
  }

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"R8",
      "Descripcion":"2 puertas",
      "Year":2003,
      "Precio":120000,
      "Marca": "Audi",
      "Color":"Amarillo",
      "ImagenUrl":"https://cdn.motor1.com/images/mgl/JOBB2g/s3/audi-r8-v-10-vegas-yellow.jpg"
    },
    {
      "ProductoId":2,
      "Modelo":"Nissan gtr",
      "Descripcion":"4 puertas",
      "Year":2009,
      "Precio":170000,
      "Marca": "NISSAN",
      "Color":"Negro",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLBJRYUVbBvfxeBl6hdZ8VkJRo1muNapzCQ&s"
    },
    {
      "ProductoId":3,
      "Modelo":"Tundra",
      "Descripcion":"2 puertas",
      "Year":2003,
      "Precio":120000,
      "Marca": "Toyota",
      "Color":"Rojo",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2Us_K9mY9H5v1BELOATpKuHeDNwzBAP2wQ&s"
    },
  ]
 
}
