import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/index';
import { ContactoComponent } from './componentes/index';
import { AboutComponent } from './componentes/index';
import { NoticiasComponent } from './componentes/index';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'about',component:AboutComponent},
  {path:'aboutus',redirectTo:'contacto'},
  {path:'noticias/:id',component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
