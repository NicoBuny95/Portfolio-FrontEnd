import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/estudio';
import { ServicioEduService } from 'src/app/Servicios/servicio-edu.service';


@Component({
  selector: 'app-editarar-edu',
  templateUrl: './editarar-edu.component.html',
  styleUrls: ['./editarar-edu.component.css']
})
export class EditararEduComponent implements OnInit {
  educacion: Estudio = null;

  constructor(private router:Router, private service:ServicioEduService,private activatedRouter: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.getEstudioId(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.updateEstudio(this.educacion,id).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar educacion");
         this.router.navigate(['']);
      }
    )
  }

}
