import { Component, OnInit } from '@angular/core';
import { ServicioEduService } from 'src/app/Servicios/servicio-edu.service';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/estudio';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/Servicios/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios: Estudio[];
  constructor(private service:  ServicioEduService, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
   this.obtEstudio()
   if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  private obtEstudio(){
    this.service.mostrarEstudios().subscribe(dato => {
      this.estudios = dato; 
      
    });
}
  
  Editar(estudio:Estudio):void{
    localStorage.setItem("id",estudio.id.toString());
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
            this.service.deleteEstudios(id).subscribe({next:
            data => {
             this.obtEstudio();
             }
           ,error: err => {console.log(err.error.msg);
             }
         });
       
       }
   
        Swal.fire(
          
          'Eliminado!',
          'Educacion Eliminada',
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
