import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../services/pc.service';

@Component({
  selector: 'app-ordinateurs',
  templateUrl: './ordinateurs.component.html',
  styleUrls: ['./ordinateurs.component.css']
})
export class OrdinateursComponent implements OnInit {
  ordinateurs : Pc[] ;
  constructor(private pcService : PcService){
    this.ordinateurs = pcService.listePcs() ;
  }
  supprimerProduit(p: Pc)
{
  let conf = confirm("Etes-vous sûr ?");
 if (conf)

  this.pcService.supprimerPc(p);

}
  ngOnInit(): void {
   
  }
}
