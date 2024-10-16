import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../services/pc.service';

@Component({
  selector: 'app-ordinateurs',
  templateUrl: './ordinateurs.component.html',
  styleUrls: ['./ordinateurs.component.css']
})
export class OrdinateursComponent implements OnInit {
  ordinateurs! : Pc[] ;
  constructor(private pcService : PcService){
   
  }
  supprimerProduit(p: Pc)
{
  let conf = confirm("Etes-vous sûr ?");
 if (conf)

  this.pcService.supprimerPc(p).subscribe(() => {
    console.log("produit supprimé");
    this.chargerPcs()
    });


  }
  chargerPcs(){
    this.pcService.listePcs().subscribe(prods => {
    console.log(prods);
    this.ordinateurs = prods;
    });
    }
  ngOnInit(): void {
   this.pcService.listePcs().subscribe(pcs => {console.log(pcs) ; 
    this.ordinateurs = pcs 
   })
  }
}
