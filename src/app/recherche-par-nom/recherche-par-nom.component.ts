import { Component, OnInit } from '@angular/core';
import { PcService } from '../services/pc.service';
import { Pc } from '../model/pc.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  nomPc  :string ="" ; 
  ordinateurs! : Pc[];




  constructor (private pcService : PcService ){}
  rechercherPc(){
    this.pcService.rechercherParNom(this.nomPc).
    subscribe(prods => {
    this.ordinateurs = prods;
    console.log(prods)});
    }
    
}
