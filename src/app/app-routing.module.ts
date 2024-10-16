import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { AddOrdinateurComponent } from './add-ordinateur/add-ordinateur.component';
import { UpdateOrdinateurComponent } from './update-ordinateur/update-ordinateur.component';

const routes:   Routes = [
  {path: "Ordinateurs", component : OrdinateursComponent},
  {path: "add-ordinateur", component : AddOrdinateurComponent},
  { path: "", redirectTo: "Ordinateurs", pathMatch: "full" } , 
  {path: "update/:id", component: UpdateOrdinateurComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
