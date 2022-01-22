import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
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
    if(this.search != ""){
      this.products = this.newallproducts.filter(res=>{
          return res.name.match(this.search);
      }) ;
    }else if(this.search == ""){
          this.products=this.newallproducts;
    }

  }

  getProducts(){
    this.dataService.getstock().subscribe(res=>{
      this.allProducts=res;
      this.newallproducts=this.allProducts[0];
      if(this.search != ""){
        this.products = this.newallproducts.filter(res=>{
            return res.name.match(this.search);
        }) ;
      }else if(this.search == ""){
            this.products=this.newallproducts;
      }
      this.path=this.allProducts[1];
    });
  }

  
  deleteProduct(id:any){
    this.dataService.deleteProduct(id).subscribe(res=>{
      this.getProducts();
      this.searchByname();
    });
  }
}
