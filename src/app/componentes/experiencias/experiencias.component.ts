import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/experiencia';
import { ServicioExpService } from 'src/app/Servicios/servicio-exp.service';
import { TokenService } from 'src/app/Servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  Exp: Experiencia[];
  constructor(private service:  ServicioExpService, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
   this.obtExperiencia();
   if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  private obtExperiencia(){
    this.service.mostrarExpe().subscribe(dato => {
      this.Exp = dato; 
      
    });
}
  
  Editar(Exp:Experiencia):void{
    localStorage.setItem("id",Exp.id.toString());
    this.router.navigate(["editararEdu"]);
   
  }

  
  
  Nuevo(): void{
    this.router.navigate(['registro-estudio']);
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
            this.service.deleteExp(id).subscribe({next:
            data => {
             this.obtExperiencia();
             }
           ,error: err => {console.log(err.error.msg);
             }
         });
       
       }
   
        Swal.fire(
          
          'Eliminado!',
          'Experiencia Eliminada',
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