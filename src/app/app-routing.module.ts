import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AgregarEduComponent } from './componentes/educacion/agregar-edu/agregar-edu.component';
import { EditararEduComponent } from './componentes/educacion/editarar-edu/editarar-edu.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

import { AgregarExpComponent } from './componentes/experiencias/agregar-exp/agregar-exp.component';
import { EditarExpComponent } from './componentes/experiencias/editar-exp/editar-exp.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HomeComponent } from './componentes/home/home.component';

import { HySComponent } from './componentes/hy-s/hy-s.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgregarProyComponent } from './componentes/proyectos/agregar-proy/agregar-proy.component';
import { EditarProyComponent } from './componentes/proyectos/editar-proy/editar-proy.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


const routes: Routes = [{
  path:'encabezado',component:EncabezadoComponent},
  {path:'',component:HomeComponent},
  {path:'acerca-de',component:AcercaDeComponent},
  {path:'educacion',component:EducacionComponent},
  {path:'experiencias',component:ExperienciasComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'login',component:LoginComponent},
  {path:'editarEdu/:id',component:EditararEduComponent} ,
  {path:'añadirEdu',component:AgregarEduComponent},
  {path:'editarProy/:id',component:EditarProyComponent} ,
  {path:'añadirProy',component:AgregarProyComponent},
  {path:'editarExp/:id',component:EditarExpComponent} ,
  {path:'añadirExp',component:AgregarExpComponent},
  {path:'HYS',component: HySComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
