import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRComponent  {
  title = 'app';
  search : string=''; 
  list: any;
  public myAngularxQrCode: any;
  constructor(private dataService:DataService) {
    this.get();
  }

  getRandomInt(max:any) {
    return Math.floor(Math.random() * max);
  }
  get(){
      this.dataService.generate().subscribe(res=>{
          this.list=res; 
      });
  }
  affiche(x:any){ 
    this.search = x ;
    this.myAngularxQrCode = this.search;
  }
}