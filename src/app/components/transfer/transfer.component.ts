import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  products:Product[]=[];
  products1:Product[]=[];
  newallproducts:Product[]=[];
  allProducts:any;
  search : string=''; 
  searchcodep :string='';
  date:any;
  caisse:any;
  caisse1:any;
  quantite:any=1;
  total:any;
  formatdate:any;
  login:any;
  path:any;
  id:any;
  count:any;
  constructor(private dataService:DataService,public datepipe: DatePipe) { }

  ngOnInit(): void {
      this.getcaisse();
      this.getProducts();
      if (localStorage.getItem("date") === null){
        this.today();
      }
      this.date=localStorage.getItem('date');
  }

  changedate(x:any){
    this.caisse=[];
      this.date = x.target.value ;
      this.formatdate =this.datepipe.transform(this.date, 'yyyy-MM-dd');
      localStorage.setItem('date', this.formatdate);
      this.getcaisse();
      this.gettotal();
  }

  today(){
    this.date=new Date();
    this.formatdate =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    let d=this.datepipe.transform(this.date, 'MM');
    localStorage.setItem('date', this.formatdate);
    this.getcaisse();
    this.gettotal();
  }
  changequantite(x:any,code:any){
    this.quantite = x.target.value ;
    if(x.target.value==""){
      this.quantite = 1;
      
    }else{
      this.quantite = x.target.value ;
    }
    this.searchcodep = code;
    this.searchBycodep();
     x.target.value="";
  }
   

  changequantiteCommande(x:any,code:any){
    this.quantite = x.target.value ;
    this.login=localStorage.getItem("login");
    this.id=code;
    let cmd = [this.id,this.quantite,this.login];
    this.dataService.updateProductTransfer(cmd).subscribe(res=>{
      this.getcaisse();
      this.getProducts();
    });
  }  
  searchBycodep(){
      this.products1 = this.newallproducts.filter(res => res.codep == this.searchcodep );
      this.AddProdIncaisse(); 
  }

  addProductInput(x:any) { 
      this.searchcodep = x.target.value ;
      this.quantite=1;
      this.searchBycodep();
      x.target.value="";
  }
  

  AddProdIncaisse(){
    this.login=localStorage.getItem("login");

      let cmd = [this.products1,this.date,this.quantite,this.login];
      this.dataService.AddProdIntransfer(cmd).subscribe(res=>{
        this.getcaisse();
        this.getProducts();
      });
  }

  getcaisse(){
      this.date=localStorage.getItem('date');
      let d =[this.date];
      this.dataService.gettransfer(d).subscribe(res=>{
        this.caisse1=res;
        this.caisse=this.caisse1[0];
        this.path=this.caisse1[1];
        this.gettotal();
      });
  }
  gettotal(){     
      let t=0;
      let i=0;
      for (var val of this.caisse) {
        t+=val.totalligne;
        i++;
      }
      this.total=t;
      this.count=i;
  }
getProducts(){
    this.dataService.getstock().subscribe(res=>{
      this.allProducts=res;
      this.newallproducts=this.allProducts[0];
      this.path=this.allProducts[1];
      if(this.search!=""){
        this.products = this.newallproducts.filter(res=>{
            return res.name.match(this.search);
        }) ;
      }else if(this.search == ""){
          this.products=[];
      }
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

  deleteProduct(id:any){
      this.dataService.deleteProductOfTransfer(id).subscribe(res=>{
        this.getcaisse();
      });
  }
 

}
