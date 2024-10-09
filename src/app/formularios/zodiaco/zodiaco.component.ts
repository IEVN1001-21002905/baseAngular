import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})

export class ZodiacoComponent implements OnInit {
 
  zodiaco!: FormGroup;
  edad: number = 0;
  signo: string = '';
  imagenSigno: string = '';

  constructor() {}

  ngOnInit(): void {
    this.zodiaco= new FormGroup({
      nombre: new FormControl('', Validators.required),
      paterno: new FormControl('', Validators.required),
      materno: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      año: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required)
    });
  }

  calcularEdad(): number {
    const añoNacimiento = this.zodiaco.get('año')?.value;
    const mesNacimiento = this.zodiaco.get('mes')?.value;
    const diaNacimiento = this.zodiaco.get('dia')?.value;
    const fechaActual = new Date();


    let edad = fechaActual.getFullYear() - añoNacimiento;


   const mesActual = fechaActual.getMonth() + 1;
   const diaActual = fechaActual.getDate();


    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
    }

    return edad;
  }

  Signo(): string {
    const año = this.zodiaco.get('año')?.value;
    const Zodiaco = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
    const indice = (año - 1900) % 12;
    return Zodiaco[indice];
  }

 

  imprimir(): void {
    this.edad = this.calcularEdad();
    this.signo = this.Signo();


    if (this.signo === 'Rata') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg';
  } else if (this.signo === 'Buey') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg';
  } else if (this.signo === 'Tigre') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg';
  } else if (this.signo === 'Conejo') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg';
  } else if (this.signo === 'Dragón') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg';
  } else if (this.signo === 'Serpiente') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg';
  } else if (this.signo === 'Caballo') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg';
  } else if (this.signo === 'Cabra') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg';
  } else if (this.signo === 'Mono') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg';
  } else if (this.signo === 'Gallo') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg';
  } else if (this.signo === 'Perro') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg';
  } else if (this.signo === 'Cerdo') {
      this.imagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg';
  }
  

   

  }
}
 

