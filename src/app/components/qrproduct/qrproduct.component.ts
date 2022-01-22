import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QRproduct } from 'src/app/qrproduct';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-qrproduct',
  templateUrl: './qrproduct.component.html',
  styleUrls: ['./qrproduct.component.css']
})
export class QRproductComponent  {
  title = 'app';
  search : string=''; 
  list: QRproduct[]=[];
  public myAngularxQrCode: any;
  redd:string="red";
  ProductQR:QRproduct[]=[];
  ProductQR1:any;
  productType:any;
  constructor(private dataService:DataService, private route: ActivatedRoute) {
    this.productType = this.route.snapshot.params.id;
    this.getProductQR();
  }

 
  affiche(x:any){ 
    this.search = x ;
    this.myAngularxQrCode = this.search;
  }

  getProductQR(){
    this.productType=localStorage.getItem('productType');
    let cmd = [this.productType];
    this.dataService.getProductQR(cmd).subscribe(res=>{
      this.ProductQR1=res;
      this.ProductQR=this.ProductQR1[0];
      this.list=this.ProductQR;
      console.log(this.ProductQR);
      
    });
}
}