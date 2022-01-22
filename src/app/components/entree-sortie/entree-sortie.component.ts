import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/entree';
import { Khadamat } from 'src/app/khadamat';
import { DataService } from 'src/app/service/data.service';
import { Sortie } from 'src/app/sortie';

@Component({
  selector: 'app-entree-sortie',
  templateUrl: './entree-sortie.component.html',
  styleUrls: ['./entree-sortie.component.css']
})
export class EntreeSortieComponent implements OnInit {
    
  entre= new Entree();
  sortie= new Sortie();
  entrees:any;
  sorties:any;
  message="";
  message1="";
  formatdate:any;
  dateES:any;
  login:any;
  constructor(private dataService:DataService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getEntree();
    this.getSortie();
    if (localStorage.getItem("dateES") === null){
      this.today();
    }
    this.dateES=localStorage.getItem('dateES');
  }

  insertEntree(){
    this.login=localStorage.getItem("login");
    let cmd = [this.entre,this.login];
    this.dataService.insertEntree(cmd).subscribe(res=>{
      this.getEntree();
      this.message="Entree inserted";
    });
    this.entre= new Entree();
    
  }

  getEntree(){
    this.dateES=localStorage.getItem('dateES');
    let d =[this.dateES];
    this.dataService.getEntree(d).subscribe(res=>{
      this.entrees=res;
    });
  }

  
  deleteEntree(id:any){
    this.dataService.deleteEntree(id).subscribe(res=>{
      this.getEntree();
    });
  }

  changedate(x:any){
    this.entrees=[];
      this.dateES = x.target.value ;
      this.formatdate =this.datepipe.transform(this.dateES, 'yyyy-MM-dd');
      localStorage.setItem('dateES', this.formatdate);
      this.getEntree();
      this.getSortie();
  }

  today(){
    this.dateES=new Date();
    this.formatdate =this.datepipe.transform(this.dateES, 'yyyy-MM-dd');
    let d=this.datepipe.transform(this.dateES, 'MM');
    localStorage.setItem('dateES', this.formatdate);
    this.getSortie();
    this.getEntree();
  }


  insertSorite(){
    this.login=localStorage.getItem("login");
    let cmd = [this.sortie,this.login];
    this.dataService.insertSortie(cmd).subscribe(res=>{
      this.getSortie();
      this.message1="Sortie inserted";
    });
    this.sortie= new Sortie();
  }

  getSortie(){
    this.dateES=localStorage.getItem('dateES');
    let d =[this.dateES];
    this.dataService.getSortie(d).subscribe(res=>{
      this.sorties=res;
    });
  }

  
  deleteSortie(id:any){
    this.dataService.deleteSortie(id).subscribe(res=>{
      this.getSortie();
    });
  }

}
