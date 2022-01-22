import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-duplique-produit',
  templateUrl: './duplique-produit.component.html',
  styleUrls: ['./duplique-produit.component.css']
})
export class DupliqueProduitComponent implements OnInit {
  productID: any;
  products:any;
  prod= new Product();
  message="";
  files:any;

  constructor( private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this. productID = this.route.snapshot.params.id;
    this.getProduct();
  }
  chageCodep(){
    this.dataService.selectLastCodep().subscribe(res=>{
      this.prod.codep=res;
    });
  }
 
  getProduct(){
    this.dataService.getProduct(this.productID).subscribe(res=>{
     this.products=res;
     this.prod=this.products;
    });
  }
  duplicateProduct(){

   let cmd=[this.prod,this.productID];
    this.dataService.duplicate(cmd).subscribe(res=>{      
      this.message="product inserted";
      console.log(res);
    });

  }
  
}
