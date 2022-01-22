import { Component, OnInit } from '@angular/core';
import { Niveau } from 'src/app/niveau';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-addniveau',
  templateUrl: './addniveau.component.html',
  styleUrls: ['./addniveau.component.css']
})
export class AddniveauComponent implements OnInit {
  products:Product[]=[];
  newallproducts:Product[]=[];
  allProducts:any;
  search : string=''; 
  searchcodep :string='';
  numN:any;
  nomN:any='';
  commandes:any;
  commandes1:any;
  quantite:any=1;
  total:any;
  login:any;
  path:any;
  id:any;
  result:any;
  niveaux:Niveau[]=[];
  allNiveaux:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
      this.getCommandeNiveau();
      this.getProducts();
      this.getNomNiveau();
      this.getNiveaux();
      if (localStorage.getItem("numNiveau") === null){
        localStorage.setItem('numNiveau', '1');
      }
      this.numN=localStorage.getItem('numNiveau');
  }

  chagenumNiveau(x:any){
      this.numN = x.target.value ;
      localStorage.setItem('numNiveau', this.numN);
      this.commandes=[];
      this.getCommandeNiveau();
      this.gettotal();
      this.getNomNiveau();
  }
  chagenomNiveau(x:any){
    this.login=localStorage.getItem("login");
    let cmd = [this.numN,this.nomN,this.login];
    this.dataService.updateNomNiveau(cmd).subscribe(res=>{
      this.getNomNiveau();
      this.getNiveaux();
    });
  }

  getNomNiveau(){
    this.numN=localStorage.getItem('numNiveau');
    this.dataService.getNomNiveau(this.numN).subscribe(res=>{
      this.result=res;
      if(this.result !== null)  
      {
        this.nomN=this.result[0]['nomNiveau'];
      }else{
        this.nomN='';
      }
    });
  }
  changequantite(x:any,code:any){
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
    this.dataService.UpdateProductNiveau(cmd).subscribe(res=>{
      this.getCommandeNiveau();
    });
  }  


  searchBycodep(){
      this.niveaux=[];
      this.products = this.newallproducts.filter(res => res.codep == this.searchcodep );
      this.AddProdInNiveau(); 
  }
 
  addProductInput(x:any) { 
      this.searchcodep = x.target.value ;
      this.searchBycodep();
      x.target.value="";
  }
  

  AddProdInNiveau(){ 
      this.login=localStorage.getItem("login");
      let cmd = [this.products,this.numN,this.quantite,this.login];
      this.dataService.AddProdInNiveau(cmd).subscribe(res=>{
        this.getCommandeNiveau();
        
      });
  }

  getCommandeNiveau(){
      this.numN=localStorage.getItem('numNiveau');
      this.dataService.getCommandeNiveau(this.numN).subscribe(res=>{
        this.commandes1=res;
        this.commandes=this.commandes1[0]
        this.path=this.commandes1[1];
        this.gettotal();
      });
  }

  getNiveaux(){
      this.dataService.getNiveaux().subscribe(res=>{
        this.allNiveaux=res;
        this.niveaux=this.allNiveaux;
        console.log(this.niveaux);
      });
  }

  gettotal(){     
      let t=0;
      for (var val of this.commandes) {
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
  getLastNiveau(){
      this.dataService.selectLastcNiveau().subscribe(res=>{
        localStorage.setItem('numNiveau', JSON.stringify(res));
        this.getCommandeNiveau();
        this.gettotal();
      });
  }
  
  searchByname() { // with type info
      if(this.search!=""){
          this.niveaux=[];
          this.products = this.newallproducts.filter(res=>{
              return res.name.match(this.search);
          }) ;
      }else if(this.search == ""){
          this.products=[];
          this.niveaux=this.allNiveaux;
      }
  }

  deleteProduct(id:any){
      this.dataService.deleteProductOfNiveau(id).subscribe(res=>{
        this.getCommandeNiveau();
      });
  }
}
