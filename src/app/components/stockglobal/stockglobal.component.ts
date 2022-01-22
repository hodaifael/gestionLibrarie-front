import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-stockglobal',
  templateUrl: './stockglobal.component.html',
  styleUrls: ['./stockglobal.component.css']
})
export class StockglobalComponent implements OnInit {
  products:Product[]=[];
  newallproducts:Product[]=[];
  allProducts:any;
  search : string=''; 
  path:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.getProducts();
  }

  searchByname() { // with type info
    if(this.search!=""){
      this.products = this.newallproducts.filter(res=>{
        return res.name.match(this.search);
      }) ;
    }else if(this.search == ""){
      this.products=[];
    }

  }

  getProducts(){
    this.dataService.getstockglobal().subscribe(res=>{
      this.allProducts=res;
      this.newallproducts=this.allProducts[0];
      this.products = this.newallproducts;
      this.path=this.allProducts[1];
    });
  }

  
  deleteProduct(id:any){
    this.dataService.deleteProduct(id).subscribe(res=>{
      this.getProducts();
    });
    
  }
}
