import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  productID: any;
  products:any;
  prod= new Product();
  message="";
  files:any;

  constructor( private dataService: DataService,
    
    private route: ActivatedRoute) { }

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

  imageUpload(event:any){
    this.files=event.target.files[0];
  }

  updateProduct(){
    let formdata=new FormData();
    formdata.append("file",this.files,this.files.name)
    formdata.append("prod",JSON.stringify(this.prod))
    formdata.append("prodId",this.productID)
    console.log(this.files.name)
    this.dataService.updateProduct(formdata).subscribe(res=>{
     this.message="product updated";
     console.log(res)
     });
  }
}
