import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/estudio';
import { ServicioEduService } from 'src/app/Servicios/servicio-edu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar-edu.component.html',
  styleUrls: ['./agregar-edu.component.css']
})
export class AgregarEduComponent implements OnInit {

  estudio:Estudio=new Estudio();
  constructor(private router:Router, private service:ServicioEduService) { }
  ngOnInit() : void {
  }

  Guardar(){
    this.service.agregarEstudio( this.estudio ).subscribe({ next: dato=>{
      console.log(dato);
     
      this.irALaEstudios();}, 
      error:err => {console.log(err.error.msg);
     
    }
  });
}

  irALaEstudios(){
    this.router.navigate(['']);
  }
  onSubmit(){
    this.Guardar();
  }

alertWithSuccess(){
  Swal.fire('Registro Exitoso', 'Educacion agregada correctamente!', 'success');
}


}
