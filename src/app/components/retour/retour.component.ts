import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';
import { Commande } from 'src/app/commande';
import { Retourbenef } from 'src/app/retourbenef';

@Component({
  selector: 'app-retour',
  templateUrl: './retour.component.html',
  styleUrls: ['./retour.component.css']
})
export class RetourComponent implements OnInit {
  products:Product[]=[];
  newallproducts:Product[]=[];
  allProducts:any;
  search : string=''; 
  searchcodep :string='';
  prod:Product[]=[];
  numcommande:any;
  retour:any;
  retour1:any;
  quantite:any=1;
  total:any;
  login:any;
  Numfacture:any;
  path:any;
  beneficiarie:any;
  beneficiaries:Retourbenef[]=[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
      this.getretour();
      this.getProducts();
  }
 
  addNumFacture(x:any,id:any,totalligne:any,num:any){
    this.Numfacture = x.target.value ;
    
    this.login=localStorage.getItem("login");
    let arr = [this.Numfacture,id,totalligne,this.login,num];
    this.dataService.addNumFacture(arr).subscribe(res=>{
      if(res !=null){
        this.beneficiarie=res;
        this.beneficiaries=this.beneficiarie;
        console.log(this.beneficiarie);
      }
      this.getretour();
      this.products=[];
    });
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
  
  searchBycodep(){
      this.products = this.newallproducts.filter(res => res.codep == this.searchcodep );
      this.AddProdInRetour(); 
  }

  addProductInput(x:any) { 
      this.searchcodep = x.target.value ;
      this.searchBycodep();
      x.target.value="";
  }
  

  AddProdInRetour(){
     this.login=localStorage.getItem("login");
      let cmd = [this.products,this.quantite,this.login];
      this.dataService.AddProdInRetour(cmd).subscribe(res=>{
        this.getretour();
      });
  }

  getretour(){
      this.dataService.getretour().subscribe(res=>{
        this.retour1=res;
        this.retour=this.retour1[0];
        this.path=this.retour1[1];
        this.gettotal();
      });
  }
  gettotal(){     
      let t=0;
      for (var val of this.retour) {
        t+=val.totalligne;
      }
      this.total=t;
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

  deleteProduct(id:any){
      this.dataService.deleteProductOfRetour(id).subscribe(res=>{
        this.getretour();
      });
  }
}
