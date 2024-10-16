import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { PcService } from '../services/pc.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styleUrls: ['./liste-marques.component.css']
})
export class ListeMarquesComponent implements OnInit {

ajout:boolean=true;

  marques! : Marque[];
  updatedMarq:Marque = {"idMarque":0,"nomMarque":"" , "descriptionMarque"  : ""};

  constructor(private pcService : PcService) { }
  ngOnInit(): void {
  this.pcService.listeMarques().
  subscribe(cats => {this.marques = cats;
  console.log(cats);
  });
  }
  updateMarq(cat:Marque) {
    this.updatedMarq=cat;
    }
    updateCat(cat:Marque) {
      this.updatedMarq=cat;
      this.ajout=false;
      }
      
 MarqueUpdated(cat:Marque){
    console.log("Cat updated event",cat);
    this.pcService.ajouterMarque(cat).
     subscribe( ()=> this.chargerMarque());
    }
    chargerMarque(){
      this.pcService.listeMarques().
      subscribe(cats => {this.marques = cats;
      console.log(cats);
      });
      }

}