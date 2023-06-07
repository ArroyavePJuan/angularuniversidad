import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/Estudiante';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  //atributos
  public estudiantes:Estudiante[]=[]

  //quemando 5 estudiamtes
  public estudianteUno:Estudiante={
    id: 1,
    nombre: "Juan",
    documento: "C.C",
    correo: "juan@example.com",
    acudiente: {
      id: 1,
      nombres: "Gloria",
      telefono: "321534"
    }
  }

  public estudianteDos:Estudiante={
    id: 2,
    nombre: "José",
    documento: "C.C",
    correo: "jose@example.com",
    acudiente: {
      id: 2,
      nombres: "Lucia",
      telefono: "321324234"
    }
  }

  public estudianteTres:Estudiante={
    id: 3,
    nombre: "Pedro",
    documento: "C.C",
    correo: "pedro@example.com",
    acudiente: {
      id: 3,
      nombres: "Marta",
      telefono: "32134534"
    }
  }

  public estudianteCuatro:Estudiante={
    id: 3,
    nombre: "Sara",
    documento: "C.C",
    correo: "sara@example.com",
    acudiente: {
      id: 3,
      nombres: "Gabriel",
      telefono: "3129084"
    }
  }

  public estudianteCinco:Estudiante={
    id: 3,
    nombre: "Angie",
    documento: "C.C",
    correo: "angie@example.com",
    acudiente: {
      id: 3,
      nombres: "Patricia",
      telefono: "3236185"
    }
  }
  


  public constructor(){
    //llamamos al servicio y cargamos los estudiantes

    this.estudiantes.push(this.estudianteUno)
    this.estudiantes.push(this.estudianteDos)
    this.estudiantes.push(this.estudianteTres)
    this.estudiantes.push(this.estudianteCuatro)
    this.estudiantes.push(this.estudianteCinco)
    console.log(this.estudiantes)
    

  }

}
