import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pc } from '../model/pc.model';
import { PcService } from '../services/pc.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-ordinateur',
  templateUrl: './update-ordinateur.component.html',
  styleUrls: ['./update-ordinateur.component.css']
})
export class UpdateOrdinateurComponent implements OnInit{

    marques! : Marque[]  ; 
    updatedMarId! : number;
    currentPc = new Pc();
    constructor(private activatedRoute: ActivatedRoute,
    private pcService: PcService , private router : Router) { }
    

    updatePc() {
      this.currentPc.marquePc = this.marques.
       find(cat => cat.idMarque == this.updatedMarId)!;
      this.pcService.updatePc(this.currentPc).subscribe(prod => {
      this.router.navigate(['Ordinateurs']); }
      );
  }

    ngOnInit(): void {
      this.pcService.listeMarques().
      subscribe(marqs => {this.marques = marqs;
      console.log(marqs);
      });
      this.pcService.consulterPc(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentPc = prod;
      this.updatedMarId =
      this.currentPc.marquePc!.idMarque;
      } ) ;
      }

}
