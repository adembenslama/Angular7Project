import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { AddOrdinateurComponent } from './add-ordinateur/add-ordinateur.component';
import { UpdateOrdinateurComponent } from './update-ordinateur/update-ordinateur.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';

const routes:   Routes = [
  {path: "Ordinateurs", component : OrdinateursComponent},
  {path: "add-ordinateur", component : AddOrdinateurComponent},
  { path: "", redirectTo: "Ordinateurs", pathMatch: "full" } , 
  {path: "update/:id", component: UpdateOrdinateurComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeMarques", component : ListeMarquesComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
