import { Component, OnInit } from '@angular/core';
import { Khadamat } from 'src/app/khadamat';
import { DataService } from 'src/app/service/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-khadamat',
  templateUrl: './khadamat.component.html',
  styleUrls: ['./khadamat.component.css']
})
export class KhadamatComponent implements OnInit {
  Typerecharge = [
    {name: "INWI"},
    {name: "MAROC TELECOM"},
    {name: "ORANGE"}
  ];
  Type = [
    {name: "Abonement"},
    {name: "Radeema"}
  ];
  khad= new Khadamat();
  Khadamat:any;
  message="";
  formatdate:any;
  datekhadamat:any;
  login:any;
  constructor(private dataService:DataService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getkhadamat();
    if (localStorage.getItem("datekhadamat") === null){
      this.today();
    }
    this.datekhadamat=localStorage.getItem('datekhadamat');
  }

  insertkhadamat(){
    this.login=localStorage.getItem("login");
    let cmd = [this.khad,this.login];
    this.dataService.insertkhadamat(cmd).subscribe(res=>{
      this.getkhadamat();
      this.message="Khadamat inserted";
    });
    this.khad= new Khadamat();
  }

  getkhadamat(){
    this.datekhadamat=localStorage.getItem('datekhadamat');
    let d =[this.datekhadamat];
    this.dataService.getkhadamat(d).subscribe(res=>{
      this.Khadamat=res;
    });
  }

  
  deletekhadamat(id:any){
    
    this.dataService.deletekhadamat(id).subscribe(res=>{
      this.getkhadamat();
    });
  }

  changedate(x:any){
    this.Khadamat=[];
      this.datekhadamat = x.target.value ;
      this.formatdate =this.datepipe.transform(this.datekhadamat, 'yyyy-MM-dd');
      localStorage.setItem('datekhadamat', this.formatdate);
      this.getkhadamat();
  }

  today(){
    this.datekhadamat=new Date();
    this.formatdate =this.datepipe.transform(this.datekhadamat, 'yyyy-MM-dd');
    let d=this.datepipe.transform(this.datekhadamat, 'MM');
    localStorage.setItem('datekhadamat', this.formatdate);
    this.getkhadamat();
  }
}
