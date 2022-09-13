import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InformacionpersonalComponent } from './componentes/informacionpersonal/informacionpersonal.component';
import { ExperiencialaboralComponent } from './componentes/experiencialaboral/experiencialaboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardandsoftskillComponent } from './componentes/hardandsoftskill/hardandsoftskill.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    InformacionpersonalComponent,
    ExperiencialaboralComponent,
    EducacionComponent,
    HardandsoftskillComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
