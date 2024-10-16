import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Marque } from '../model/marque.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class PcService {
  apiURL: string = 'http://localhost:8090/ordinateurs/api/pcs';
  apiURLMar: string = 'http://localhost:8090/ordinateurs/api/marques';
  pcs: Pc[]=[]; //un tableau de Pc
  pc!: Pc;
  marques: Marque[] = [];
  constructor( private http : HttpClient) {
    
  }
  listePcs(): Observable<Pc[]> {
    return this.http.get<Pc[]>(this.apiURL);;
  }
  ajouterPc(pc: Pc) {
    return this.http.post<Pc>(this.apiURL, pc, httpOptions);
  }
  listeMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiURLMar);
  }

  consulterMarque(id: number): Marque {
    return this.marques.find(mar => mar.idMarque == id)!;
  }
  consulterPc(id: number): Observable<Pc> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Pc>(url);
  }

  updatePc(p: Pc) {
    return this.http.put<Pc>(this.apiURL + `/${p.idPc}`, p, httpOptions);

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
  rechercherParNom(nom: string):Observable< Pc[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Pc[]>(url);
    }

    ajouterMarque( cat: Marque):Observable<Marque>{
      return this.http.post<Marque>(this.apiURLMar, cat, httpOptions);
      }
      
    
  rechercherParMarque(idMar: number):Observable< Pc[]> {
    const url = `${this.apiURL}/pcsMar/${idMar}`;
    return this.http.get<Pc[]>(url);
    }
    
  supprimerPc(prod: Pc) {
    const url = `${this.apiURL}/${prod.idPc}`;
    return this.http.delete(url, httpOptions);
  }
}