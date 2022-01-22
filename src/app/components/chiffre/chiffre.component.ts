import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-chiffre',
  templateUrl: './chiffre.component.html',
  styleUrls: ['./chiffre.component.css']
})
export class ChiffreComponent implements OnInit {
  date:any;
  d:any;
  all:any;
  total:any;
  chiffres:any;
  constructor(public datepipe: DatePipe,private dataService:DataService) { }

  ngOnInit(): void {
    if (localStorage.getItem("chiffremois") === null){
      this.d=this.datepipe.transform(new Date(), 'MM');
      localStorage.setItem('chiffremois', this.d );
    }
    this.getchiffres();
  }
  mois(){
    this.d=this.datepipe.transform(new Date(), 'MM');
    localStorage.setItem('chiffremois', this.d );
    this.getchiffres();
  }
  changedate(x:any){
    this.chiffres=[];
    this.d=this.datepipe.transform(x.target.value , 'MM');
    localStorage.setItem('chiffremois', this.d );
    this.getchiffres();
  }

  getchiffres(){
    this.date=localStorage.getItem('chiffremois');
    this.dataService.getchiffreCommande(this.date).subscribe(res=>{
      this.chiffres=res;
      this.all=res;
      this.gettotal();
    });
  }

  gettotal(){     
    let t=0;
    for (var val of this.all) {
      t+=val.totalligne;
    }
    this.total=t;
  }
}
