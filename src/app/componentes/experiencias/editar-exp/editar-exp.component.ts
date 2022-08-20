import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/experiencia';
import { ServicioExpService } from 'src/app/Servicios/servicio-exp.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  expe: Experiencia = null;

  constructor(private router:Router, private service:ServicioExpService,private activatedRouter: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.getExpeId(id).subscribe(
      data =>{
        this.expe = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.updateExp(this.expe,id).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
