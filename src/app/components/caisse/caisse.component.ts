import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DatePipe } from '@angular/common';
import { Caisse } from 'src/app/caisse';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css']
})
export class CaisseComponent implements OnInit {
  products:Caisse[]=[];
  newallproducts:Caisse[]=[];
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
  numclient:string="0";
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


  changenumclient(x:any,code:any){
    this.numclient = x.target.value ;

    if(this.numclient !=""){
        this.login=localStorage.getItem("login");
        let cmd=[this.numclient,code,this.login];
        this.dataService.changenumclient(cmd).subscribe(res=>{
          this.getcaisse();
        });
    }
  }
   

  changequantiteCommande(x:any,code:any){
    this.quantite = x.target.value ;
    this.login=localStorage.getItem("login");
    this.id=code;
    let cmd = [this.id,this.quantite,this.login];
    this.dataService.UpdateProductcaisse(cmd).subscribe(res=>{
      this.getcaisse();
    });
  }  
  searchBycodep(){
      this.products = this.newallproducts.filter(res => res.codep == this.searchcodep );
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

      let cmd = [this.products,this.date,this.quantite,this.login];
      this.dataService.AddProdIncaisse(cmd).subscribe(res=>{
        this.getcaisse();
        console.log(res);
      });
  }

  getcaisse(){
      this.date=localStorage.getItem('date');
      let d =[this.date];
      this.dataService.getcaisse(d).subscribe(res=>{
        this.caisse1=res;
        this.caisse=this.caisse1[0];
        this.path=this.caisse1[1];
        this.gettotal();
      });
  }
  gettotal(){     
      let t=0;
      for (var val of this.caisse) {
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
      this.dataService.deleteProductOfcaisses(id).subscribe(res=>{
        this.getcaisse();
      });
  }

}
