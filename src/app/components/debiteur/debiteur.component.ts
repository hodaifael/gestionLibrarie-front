import { Component, OnInit } from '@angular/core';
import { Debiteur } from 'src/app/debiteur';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-debiteur',
  templateUrl: './debiteur.component.html',
  styleUrls: ['./debiteur.component.css']
})
export class DebiteurComponent implements OnInit {
  debit= new Debiteur();
  debiteurs:Debiteur[]=[];
  debiteurs1:any;
  newdebiteurs:Debiteur[]=[];
  numcmd:any;
  nomclient:any;
  message="";
  login:any;
  search:any;
  totals:any;
  avances:any;
  rests:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getdebiteur();
  }

  searchByNomclient(){
    if(this.search!=""){
      this.debiteurs = this.newdebiteurs.filter(res=>{
          return res.name.match(this.search);
      }) ;
    }else if(this.search == ""){
        this.debiteurs=this.debiteurs1;
    }
    this.total();
  }
  searchByNumcommande(){
    if(this.numcmd !=""){
      this.debiteurs = this.newdebiteurs.filter(res => res.numcommande == this.numcmd );

    }else{
      this.debiteurs=this.debiteurs1;
    }
    this.total();
  }
  
  total(){
    let t=0;
    let a=0;
    let r=0;
      for (var val of this.debiteurs) {
        t+=val.total;
        a+=val.avance;
        r+=val.total-val.avance;
      }
      this.totals=t;
      this.avances=a;
      this.rests=r;
  }


  getdebiteur(){
    this.dataService.getdebiteurs().subscribe(res=>{
      this.debiteurs1=res;
      this.newdebiteurs=this.debiteurs1;
      this.searchByNumcommande();
      this.searchByNomclient();
    });
  }


  insertdebiteur(){
    this.login=localStorage.getItem("login");
    let cmd=[this.debit,this.login]
    this.dataService.insertdebiteurs(cmd).subscribe(res=>{
      this.getdebiteur();
      this.message="debiteur inserted";
      this.debit= new Debiteur();

    });
  }


  addcommande(debiteur:any){
    this.debit.name=debiteur.name;
    this.debit.tel=debiteur.tel;
  }

  changeavance(x:any,id:any){
  let avance=x.target.value;
    this.login=localStorage.getItem("login");
    let cmd=[avance,id,this.login]
    this.dataService.changeavance(cmd).subscribe(res=>{
      this.getdebiteur();
      this.debit= new Debiteur();

    });
  }


  
  deletedebiteurs(id:any){
    this.dataService.deletedebiteurs(id).subscribe(res=>{
      this.getdebiteur();
    });
  }

}
