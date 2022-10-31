import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillsService } from 'src/app/Servicios/skills.service';
import { TokenService } from 'src/app/Servicios/token.service';
import { Skills } from 'src/app/skills';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hy-s',
  templateUrl: './hy-s.component.html',
  styleUrls: ['./hy-s.component.css']
})



export class HySComponent implements OnInit {


  skills: Skills[] = [];

  constructor(private skillS: SkillsService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
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
          this.skillS.delete(id).subscribe({next:
          data => {
           this.cargarSkills();
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