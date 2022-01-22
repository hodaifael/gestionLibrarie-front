import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DatePipe } from '@angular/common';
import { Statistique } from 'src/app/statistique';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  products:Statistique[]=[];
  newallproducts:Statistique[]=[];
  allProducts:any;
  search : string=''; 
  dateEntre:any;
  dateSortie:any;
  formatdate:any;
  formatdate1:any;
  path:any;
  constructor(private dataService:DataService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    if(localStorage.getItem("dateentree") != ""){
      this.dateEntre =localStorage.getItem("dateentree");
    }
    if(localStorage.getItem("datesortie") != ""){
      this.dateSortie =localStorage.getItem("datesortie");
    }
    this.getStatistique();

  }
 
  changedateEntre(){
    this.formatdate =this.datepipe.transform(this.dateEntre, 'yyyy-MM-dd');
    localStorage.setItem('dateentree', this.formatdate);
  }

  changedateSortie(){
    this.formatdate =this.datepipe.transform(this.dateSortie, 'yyyy-MM-dd');
    localStorage.setItem('datesortie', this.formatdate);
  }


  searchByname() { // with type info
    if(this.search!=""){
      this.products = this.newallproducts.filter(res=>{
        return res.name.match(this.search);
      }) ;
    }else if(this.search == ""){
      this.products=this.newallproducts;
    }

  }
  getStatistique(){
    this.products=[];
    this.dateSortie =localStorage.getItem("datesortie");
    this.dateEntre =localStorage.getItem("dateentree");
    if(this.dateEntre != "" || this.dateSortie != ""){
          let cmd = [this.dateEntre,this.dateSortie];
          this.dataService.getStatistique(cmd).subscribe(res=>{
            this.allProducts=res;
            this.newallproducts=this.allProducts[0];
            this.path=this.allProducts[1];

            this.products = this.newallproducts.filter(res=>{
              return res.name.match(this.search);
            });
          });
    }else{
          this.products=[];
    }       
  }

  
}
