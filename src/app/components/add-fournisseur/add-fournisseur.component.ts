import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/fournisseur';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {
  four= new Fournisseur();
  fournisseurs:any;
  message="";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getfournisseur();
  }

  insertfournisseur(){
    this.dataService.insertfournisseurs(this.four).subscribe(res=>{
      this.getfournisseur();
      this.message="founisseur inserted";
    });
    this.four= new Fournisseur();
  }

  getfournisseur(){
    this.dataService.getfournisseurs().subscribe(res=>{
      this.fournisseurs=res;
    });
  }

  
  deletefournisseur(id:any){
    this.dataService.deletefournisseurs(id).subscribe(res=>{
      this.getfournisseur();
    });
  }

}
