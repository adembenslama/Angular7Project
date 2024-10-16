import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../services/pc.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-ordinateur',
  templateUrl: './add-ordinateur.component.html',
  styleUrls: ['./add-ordinateur.component.css']
})
export class AddOrdinateurComponent  implements OnInit{
  newPc  = new Pc() ;
  newIdMar! : number;
  marque! : Marque[] ; 
newMarque! :Marque;
  addPc(){
    
    this.newPc.marquePc = this.marque.find(cat => cat.idMarque == this.newIdMar)!;
console.log(this.newPc)
    this.pcService.ajouterPc(this.newPc)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['Ordinateurs']);
    });
 

    }
    constructor(private pcService : PcService , private router : Router , private auth : AuthService){

    }
  ngOnInit(): void {
    if (this.auth.isAdmin() ==false)
    {
      this.router.navigate(['app-forbidden']);
    }
    this.pcService.listeMarques().
    subscribe(marqs => {this.marque = marqs;
    });
    console.log(this.marque)
  }
}
