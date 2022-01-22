import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productID: any;
  products:any;
  prod= new Product();
  message="";

  constructor( private dataService: DataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this. productID = this.route.snapshot.params.id;
    this.getProduct();
  }
 

  getProduct(){
    this.dataService.getProduct(this.productID).subscribe(res=>{
     this.products=res;
     this.prod=this.products;
    });
  }


  updateProduct(){
    let cmd=[this.productID,this.prod]
    this.dataService.editProduct(cmd).subscribe(res=>{
     this.message="product updated";
     });
  }
}
