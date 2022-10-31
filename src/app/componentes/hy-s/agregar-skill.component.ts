import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/Servicios/skills.service';
import { Skills } from 'src/app/skills';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  img_skill:string;
  constructor(private skillS: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.nombre, this.porcentaje,this.img_skill);
    this.skillS.save(skill).subscribe({next:
      data=>{
        this.alertWithSuccess();
        this.router.navigate(['']);
      }, 
       error:err =>{
      this.alertError();
      this.router.navigate(['']);
    }
    
  });
}

  alertWithSuccess(){
    Swal.fire('Registro Exitoso', 'Skill agregada correctamente!', 'success');
  }
  
  alertError(){
    Swal.fire('Atencion', 'Skill no pudo ser agregada!', 'error');
  }
}