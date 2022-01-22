import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-commande-fourniss',
  templateUrl: './commande-fourniss.component.html',
  styleUrls: ['./commande-fourniss.component.css']
})
export class CommandeFournissComponent implements OnInit {
  products:Product[]=[];
  products1:Product[]=[];
  newallproducts:Product[]=[];
  allProducts:any;
  search : string=''; 
  searchcodep :string='';
  prod:Product[]=[];
  facture:any;
  facture1:any;
  numCmdFourniss:any;
  quantite:any=1;
  total:any;
  login:any;
  fournisseurs:any;
  path:any;
  id:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    
    if (localStorage.getItem("numCmdFourniss") === null){
      localStorage.setItem('numCmdFourniss', '0');
    }
    this.numCmdFourniss=localStorage.getItem('numCmdFourniss');
    
    this.getCmd();
    this.getProducts();
  }

  chagenumCmd(x:any){
    this.facture=[];
      this.numCmdFourniss = x.target.value ;
      localStorage.setItem('numFinterne', this.numCmdFourniss);
      this.getCmd();
      this.gettotal();
  }
  changequantiteCommande(x:any,code:any){
    this.quantite = x.target.value ;
    this.login=localStorage.getItem("login");
    this.id=code;
    let cmd = [this.id,this.quantite,this.login];
    this.dataService.UpdateProductCmd(cmd).subscribe(res=>{
      this.getCmd();
    });
  }  
  

  AddProdInCmd(){
      this.login=localStorage.getItem("login");
      let cmd = [this.products1,this.numCmdFourniss,this.quantite,this.login];
      this.dataService.AddProdInCmd(cmd).subscribe(res=>{
        this.getCmd();
      });
  }

  
  getCmd(){
      this.numCmdFourniss=localStorage.getItem('numCmdFourniss');
      this.dataService.getCmd(this.numCmdFourniss).subscribe(res=>{
        this.facture1=res;
        this.facture=this.facture1[0];
        this.path=this.facture1[1];
        this.gettotal();
      });
  }

  gettotal(){     
      let t=0;
      for (var val of this.facture) {
        let totalligne=val.pu*val.qt;
        t+=totalligne;
      }
      this.total=t;
  }

  addProductInput(x:any) { 
    this.searchcodep = x.target.value ;
    this.quantite=1;
    this.searchBycodep();
    x.target.value="";
  }

  searchBycodep(){
    this.products1 = this.newallproducts.filter(res => res.codep == this.searchcodep );
    this.AddProdInCmd(); 
}

getProducts(){
  this.dataService.getstock().subscribe(res=>{
    this.allProducts=res;
    this.newallproducts=this.allProducts[0];
    this.path=this.allProducts[1];
  });
}

  getLastCmd(){
      this.dataService.selectLastCmd().subscribe(res=>{
        localStorage.setItem('numCmdFourniss', JSON.stringify(res));
        this.getCmd();
        this.facture=[];
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

  deleteProduct(id:any){
      this.dataService.deleteProductOfCmd(id).subscribe(res=>{
        this.getCmd();
      });
  }
}

