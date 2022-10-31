import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/proyecto';
import { ServicioProyService } from 'src/app/Servicios/servicio-proy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-proy',
  templateUrl: './agregar-proy.component.html',
  styleUrls: ['./agregar-proy.component.css']
})
export class AgregarProyComponent implements OnInit {

  proy:Proyecto=new Proyecto();
  constructor(private router:Router, private service:ServicioProyService) { }
  ngOnInit() : void {
  }

  Guardar(){
    this.service.agregarProyecto( this.proy ).subscribe({ next: 
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

  irAProy(){
    this.router.navigate(['']);
  }
  onSubmit(): void{
    this.Guardar();
  }

alertWithSuccess(){
  Swal.fire('Registro Exitoso', 'Proyecto agregado correctamente!', 'success');
}

alertError(){
  Swal.fire('Atencion', 'El registro no pudo ser agregado!', 'error');
}

}
