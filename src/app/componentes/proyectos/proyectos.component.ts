import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/proyecto';
import { ServicioProyService } from 'src/app/Servicios/servicio-proy.service';
import { TokenService } from 'src/app/Servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proy: Proyecto[];
  constructor(private service:  ServicioProyService, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
   this.obtProyecto()
   if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  private obtProyecto(){
    this.service.mostrarProyectos().subscribe(dato => {
      this.proy = dato; 
      
    });
}
  
  Editar(proy:Proyecto):void{
    localStorage.setItem("id",proy.id.toString());
    this.router.navigate(["editarEdu"]);
   
  }

  
  
  Nuevo(): void{
    this.router.navigate(['añadirEdu']);
  }

  confirmacionEliminar(id? : number){
    Swal.fire({
      title: 'Estas seguro de Eliminar?',
      text: 'No podra recuperar el registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        if(id != undefined){ 
            this.service.deleteProyecto(id).subscribe({next:
            data => {
             this.obtProyecto();
             }
           ,error: err => {console.log(err.error.msg);
             }
         });
       
       }
   
        Swal.fire(
          
          'Eliminado!',
          'Proyecto Eliminada',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El registro no sera eliminado!',
          'error'
        )
      }
    })
  }

  
}
