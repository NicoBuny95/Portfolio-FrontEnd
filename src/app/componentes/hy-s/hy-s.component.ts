import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/Servicios/skills.service';

import { TokenService } from 'src/app/Servicios/token.service';
import { Skills } from 'src/app/skills';

@Component({
  selector: 'app-hy-s',
  templateUrl: './hy-s.component.html',
  styleUrls: ['./hy-s.component.css']
})



export class HySComponent implements OnInit {



  public skills: Skills[] = [];
  public editSkill: Skills | undefined;
  public deleteSkill: Skills | undefined;

  constructor(private service:  SkillsService, private router: Router, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {

    this.obtSkill()
   if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  private obtSkill(){
    this.service.getSkill().subscribe(dato => {
      this.skills = dato; 
      
    });
}



public onOpenModal(mode: string, skill?: Skills): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addSkillModal');
  } else if (mode === 'delete') {
    this.deleteSkill = skill;
    button.setAttribute('data-target', '#deleteSkillModal');
  } else if (mode === 'edit') {
    this.editSkill = skill;
    button.setAttribute('data-target', '#editSkillModal');
  }

  container?.appendChild(button);
  button.click();
}

public onAddSkill(addForm: NgForm): void {
  document.getElementById('add-skill-form')?.click();
  this.service.addSkill(addForm.value).subscribe({
    next: (response: Skills) => {
      console.log(response);
      this.obtSkill();
      addForm.reset();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    },
  });
}

public onUpdateSkill(skill: Skills): void {
  this.editSkill = skill;
  this.service.updateSkill(skill).subscribe({
    next: (response: Skills) => {
      console.log(response);
      this.obtSkill();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    },
  });
}

public onDeleteSkill(idSkill: number): void {
  this.service.deleteSkill(idSkill).subscribe({
    next: (response: void) => {
      console.log(response);
      this.obtSkill();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    },
  });
}
onDrop(event: CdkDragDrop<Skills[]>) {
  if (this.tokenService.getToken()) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

}
