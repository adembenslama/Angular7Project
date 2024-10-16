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
    

    updatePc()
    { //console.log(this.currentProduit);
    this.currentPc.marque = this.pcService.consulterMarque(this.updatedMarId);
    this.pcService.updatePc(this.currentPc);
    this.router.navigate(['']);

    }

  ngOnInit(): void {
    this.marques = this.pcService.listeMarques() ;

    this.currentPc = this.pcService.consulterPc(this.activatedRoute.snapshot. params['id']);
    this.updatedMarId = this.currentPc.marque?.idMar !; 
console.log(this.currentPc);

  }

}
