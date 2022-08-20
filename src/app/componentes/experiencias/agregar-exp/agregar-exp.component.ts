import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/experiencia';
import { ServicioExpService } from 'src/app/Servicios/servicio-exp.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar-exp.component.html',
  styleUrls: ['./agregar-exp.component.css']
})
export class AgregarExpComponent implements OnInit {

  expe:Experiencia=new Experiencia();
  constructor(private router:Router, private service:ServicioExpService) { }
  ngOnInit() : void {
  }

  Guardar(){
    this.service.agregarExpe( this.expe ).subscribe({ next: dato=>{
      console.log(dato);
     
      this.irAExpe();}, 
      error:err => {console.log(err.error.msg);
     
    }
  });
}

  irAExpe(){
    this.router.navigate(['experiencias']);
  }
  onSubmit(){
    this.Guardar();
  }

alertWithSuccess(){
  Swal.fire('Registro Exitoso', 'Educacion agregada correctamente!', 'success');
}



}
