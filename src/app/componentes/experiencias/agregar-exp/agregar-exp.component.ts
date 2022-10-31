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
    this.service.agregarExpe( this.expe ).subscribe({next:
      data=>{
        this.alertWithSuccess();
        this.router.navigate(['']);
      }, 
       error:err =>{
      this.alertError();
      this.router.navigate(['']);
    }
  });
}

  irAExpe(){
    this.router.navigate(['']);
  }
  onSubmit(){
    this.Guardar();
  }

alertWithSuccess(){
  Swal.fire('Registro Exitoso', 'Experiencia agregada correctamente!', 'success');
}

alertError(){
  Swal.fire('Atencion', 'El registro no pudo ser agregado!', 'error');
}
}



