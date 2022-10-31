import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona';
import { PersonaServicioService } from 'src/app/Servicios/persona-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-acerca',
  templateUrl: './editar-acerca.component.html',
  styleUrls: ['./editar-acerca.component.css']
})
export class EditarAcercaComponent implements OnInit {

  persona: Persona = null;
  constructor(private router:Router, private service:PersonaServicioService,private activatedRouter: ActivatedRoute) { }


  
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
    this.service.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Datos");
         this.router.navigate(['']);
      }
    )
  }

  alertError(){
    Swal.fire('Atencion', 'El registro no pudo ser modificado!', 'error');
  }

}
