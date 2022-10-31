import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona';
import { ImageService } from 'src/app/Servicios/image.service';
import { PersonaServicioService } from 'src/app/Servicios/persona-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  persona: Persona = null;
  constructor(private router:Router, private service:PersonaServicioService,private activatedRouter: ActivatedRoute, 
              public imgservice:ImageService) { }


  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.service.detail(id).subscribe(
        data => {
          this.persona = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imgservice.url
    this.service.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Datos");
         this.router.navigate(['']);
      }
    )
  }


  subirImagen($event:any){
   const id=this.activatedRouter.snapshot.params['id'];
   const name= "perfil_" + id
   this.imgservice.subirImagen($event,name)

}

  alertError(){
    Swal.fire('Atencion', 'Nose pudo modificar foto de perfil!', 'error');
  }
}
