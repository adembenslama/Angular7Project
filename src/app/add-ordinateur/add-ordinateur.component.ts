import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../services/pc.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';

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
    this.newMarque = this.pcService.consulterMarque(this.newIdMar); 
    this.newPc.marque = this.newMarque ; 

    this.pcService.ajouterPc(this.newPc);
    this.router.navigate(['Ordinateurs']);
    console.log(this.newPc)

    }
    constructor(private pcService : PcService , private router : Router){

    }
  ngOnInit(): void {
    this.marque = this.pcService.listeMarques();
  }
}
