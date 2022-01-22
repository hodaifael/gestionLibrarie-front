import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-qrproduct',
  templateUrl: './add-qrproduct.component.html',
  styleUrls: ['./add-qrproduct.component.css']
})
export class AddQRproductComponent implements OnInit {
  products:Product[]=[];
  products1:Product[]=[];
  newallproducts:Product[]=[];
  allProducts:any;
  search : string=''; 
  searchcodep :string='';
  prod:Product[]=[];
  ProductTypes:any;
  ProductQR:any;
  ProductQR1:any;
  productType:any;
  color:string='red'; 
  login:any;
  path:any;
  id:any;
  colors:string[]=["Blue","Black","Brown","Cyan","DarkOrange","DeepPink","Green","Gray","GreenYellow","Maroon",
                    "Red","Yellow","BlueViolet","#e6e6e6","white"];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    
    if (localStorage.getItem("productType") === null){
      localStorage.setItem('productType', '');
    }
  
    
    this.getProductQR();
    this.getProducts();
    this.getProductTypes();
  }

  changecolor(x:any){
    this.color=x;
  }
  chageProductType(x:any){
    this.ProductQR=[];
      this.productType = x.target.value ;
      localStorage.setItem('productType', this.productType);
      this.getProductQR();
  }
  
  chageProductTypeByclick(x:any){
    this.ProductQR=[];
      this.productType = x ;
      localStorage.setItem('productType', this.productType);
      this.getProductQR();
  }

  AddProdInProductQR(){
      this.login=localStorage.getItem("login");
      let cmd = [this.products1,this.productType,this.color,this.login];
      this.dataService.AddProdInProductQR(cmd).subscribe(res=>{
        this.getProductQR();
      });
  }

  
  getProductQR(){
      this.productType=localStorage.getItem('productType');
      let cmd = [this.productType];
      this.dataService.getProductQR(cmd).subscribe(res=>{
        this.ProductQR1=res;
        this.ProductQR=this.ProductQR1[0];
        this.path=this.ProductQR1[1];
      });
  }
  getProductTypes(){
     
      this.dataService.getProductTypes().subscribe(res=>{
        this.ProductTypes=res;
        console.log(res);
      });
  }

  

  addProductInput(x:any) { 
    this.searchcodep = x.target.value ;
    this.searchBycodep();
    x.target.value="";
  }

  addProduct(x:any) { 
    this.searchcodep = x ;
    this.searchBycodep();
  }

  searchBycodep(){
    this.products1 = this.newallproducts.filter(res => res.codep == this.searchcodep );
    this.AddProdInProductQR(); 
  }

  getProducts(){
    this.dataService.getstock().subscribe(res=>{
      this.allProducts=res;
      this.newallproducts=this.allProducts[0];
      this.path=this.allProducts[1];
    });
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

  
  deleteProductQR(id:any){
      this.dataService.deleteProductQR(id).subscribe(res=>{
        this.getProductQR();
      });
  }
}

