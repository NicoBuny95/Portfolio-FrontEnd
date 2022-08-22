import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/proyecto';
import { ServicioProyService } from 'src/app/Servicios/servicio-proy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proy',
  templateUrl: './editar-proy.component.html',
  styleUrls: ['./editar-proy.component.css']
})
export class EditarProyComponent implements OnInit {

  proy: Proyecto = null;

  constructor(private router:Router, private service:ServicioProyService,private activatedRouter: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.getProyectoId(id).subscribe(
      data =>{
        this.proy = data;
      }, err =>{
        this.alertError();
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.updateProyecto(this.proy,id).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }
  alertError(){
    Swal.fire('Atencion', 'El registro no pudo ser modificado!', 'error');
  }


}
