import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HySComponent } from './componentes/hy-s/hy-s.component';
import { AgregarProyComponent } from './componentes/proyectos/agregar-proy/agregar-proy.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AgregarEduComponent } from './componentes/educacion/agregar-edu/agregar-edu.component';
import { EditarProyComponent } from './componentes/proyectos/editar-proy/editar-proy.component';
import { EditararEduComponent } from './componentes/educacion/editarar-edu/editarar-edu.component';
import { HomeComponent } from './componentes/home/home.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AgregarExpComponent } from './componentes/experiencias/agregar-exp/agregar-exp.component';
import { EditarExpComponent } from './componentes/experiencias/editar-exp/editar-exp.component';
import { interceptorProvider } from './Servicios/interceptor-servicio';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditarAcercaComponent } from './componentes/editar-acerca/editar-acerca.component';
import { EditarSkillComponent } from './componentes/hy-s/editar-skill.component';
import { AgregarSkillComponent } from './componentes/hy-s/agregar-skill.component';
import { EditarPerfilComponent } from './componentes/banner/editar-perfil/editar-perfil.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
 
    ProyectosComponent,
    LoginComponent,
    AgregarExpComponent,
    EditarExpComponent,
    ExperienciasComponent,
  
    HySComponent,
    AgregarProyComponent,
    EditarProyComponent,
    EducacionComponent,
    AgregarEduComponent,
    EditararEduComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    EditarAcercaComponent,
    EditarSkillComponent,
    AgregarSkillComponent,
    EditarPerfilComponent
  ],
  imports: [
     
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
   
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
   
],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
