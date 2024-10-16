import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { AddOrdinateurComponent } from './add-ordinateur/add-ordinateur.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateOrdinateurComponent } from './update-ordinateur/update-ordinateur.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    OrdinateursComponent,
    AddOrdinateurComponent,
    UpdateOrdinateurComponent,
    


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule ,
    RouterModule  , 
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
