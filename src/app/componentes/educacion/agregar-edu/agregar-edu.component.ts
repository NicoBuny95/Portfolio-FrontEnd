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
    this.service.agregarEstudio( this.estudio ).subscribe({next:
       data=>{
        this.alertWithSuccess();
        this.router.navigate(['']);
      }, 
      error: err =>{
      this.alertError();
      this.router.navigate(['']);
    }
  });
}
 
  onSubmit(): void{
    this.Guardar();
  }

alertWithSuccess(){
  Swal.fire('Registro Exitoso', 'Educacion agregada correctamente!', 'success');
}


alertError(){
  Swal.fire('Atencion', 'El registro no pudo ser agregado!', 'error');
}
}
