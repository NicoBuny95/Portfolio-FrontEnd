export class Skills {
  idSkill: number;
  skillName: string;
  picSkill: string;
  percent: number;

  
  constructor(skillName:string, percent: number, picSkill: string){
    this.skillName = skillName;
    this.percent = percent;
    this.picSkill=picSkill;
}
}
