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
    this.service.agregarProyecto( this.proy ).subscribe({ next: dato=>{
      console.log(dato);
     
      this.irAProy();}, 
      error:err => {console.log(err.error.msg);
     
    }
  });
}

  irAProy(){
    this.router.navigate(['']);
  }
  onSubmit(){
    this.Guardar();
  }

alertWithSuccess(){
  Swal.fire('Registro Exitoso', 'Educacion agregada correctamente!', 'success');
}


}
