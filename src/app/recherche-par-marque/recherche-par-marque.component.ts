import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Marque } from '../model/marque.model';
import { PcService } from '../services/pc.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent  implements OnInit{
  ngOnInit(): void {
    this.pcService.listeMarques().
    subscribe(cats => {this.marques = cats;
    console.log(cats);
    });
  }
  constructor(private pcService  : PcService   , ){}
  ordinateurs! : Pc[];
  IdMarque! : number;
  marques! : Marque[];
  onChange() {
    this.pcService.rechercherParMarque(this.IdMarque).
    subscribe(prods =>{this.ordinateurs=prods});
    }
}
