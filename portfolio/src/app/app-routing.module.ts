import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotnhomeComponent } from './componentes/botnhome/botnhome.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperiencialaboralComponent } from './componentes/experiencialaboral/experiencialaboral.component';
import { HardandsoftskillComponent } from './componentes/hardandsoftskill/hardandsoftskill.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'experiencialaboral', component: ExperiencialaboralComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'hardandsoftskill', component: HardandsoftskillComponent},
  {path:'proyecto', component: ProyectoComponent},
  {path:'login', component: LoginComponent},
  {path:'botnhome', component: BotnhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }