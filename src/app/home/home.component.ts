import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/Estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //atributos
  public estudiantes:Estudiante[]=[]
 
  public constructor(public peticion:EstudianteService){
    this.peticion.buscarEstudiantes().subscribe((respouesta)=>{
      console.log(respouesta);
    })
  }

}
