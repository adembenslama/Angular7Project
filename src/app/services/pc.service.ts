import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Marque } from '../model/marque.model';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class PcService {
  apiURL: string = 'http://localhost:8090/ordinateurs/api';
  pcs: Pc[]; //un tableau de Pc
  pc!: Pc;
  marques: Marque[];
  constructor( ) {
    this.marques = [{ idMar: 1, nomMar: "PC", descritionMar: "wa" },
    { idMar: 2, nomMar: "Imprimante", descritionMar: "wa" }];
    this.pcs = [
      {
        idPc: 1, nomPc: "PC Asus", prixPc: 3000.600, dateCreation
          : new Date("01/14/2011"), marque: { idMar: 2, nomMar: "PaC", descritionMar: "wa" }
      },
      { idPc: 2, nomPc: "Imprimante Epson", prixPc: 450, dateCreation: new Date("12/17/2010"), marque: { idMar: 1, nomMar: "PC", descritionMar: "wa" } },
      { idPc: 3, nomPc: "Tablette Samsung", prixPc: 900.123, dateCreation: new Date("02/20/2020"), marque: { idMar: 1, nomMar: "PC", descritionMar: "wa" } }
    ];
  }
  listePcs(): Pc[] {
    return this.pcs;
  }
  ajouterPc(prod: Pc) {
    this.pcs.push(prod);
  }
  listeMarques(): Marque[] {
    return this.marques;
  }

  consulterMarque(id: number): Marque {
    return this.marques.find(mar => mar.idMar == id)!;
  }
  consulterPc(id: number): Pc {
    this.pc = this.pcs.find(p => p.idPc == id)!;
    return this.pc;
  }

  updatePc(p: Pc) {
    // console.log(p);
    this.supprimerPc(p);
    this.ajouterPc(p);
    this.trierPcs()
  }

  trierPcs() {
    this.pcs = this.pcs.sort((n1, n2) => {
      if (n1.idPc! > n2.idPc!) {
        return 1;
      }
      if (n1.idPc! < n2.idPc!) {
        return -1;
      }
      return 0;
    });
  }

  supprimerPc(prod: Pc) {
    //supprimer le produit prod du tableau produits
    const index = this.pcs.indexOf(prod, 0);
    if (index > -1) {
      this.pcs.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }
}