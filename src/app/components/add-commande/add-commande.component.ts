import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';
import { Commande } from 'src/app/commande';
import { Niveau } from 'src/app/niveau';
import { Clientfidel } from 'src/app/clientfidel';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  products:Product[]=[];
  newallproducts:Product[]=[];
  allProducts:any;
  search : string=''; 
  searchcodep :string='';
  prod:Product[]=[];
  numcommande:any;
  lastnumcommande:any;
  numclient:any=0;
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
  client= new Clientfidel();
  beneficiaries:any;
  buttonAddbenef:boolean=true;
  @ViewChild('numcommandeinput', { static: false }) public numcommandeinput: ElementRef | undefined;
  @ViewChild('codepinput', { static: false }) public codepinput: ElementRef | undefined;


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
      this.getcommandes();
      this.getProducts();
      this.getNiveaux();
      if (localStorage.getItem("numcommande") === null){
        localStorage.setItem('numcommande', '1');
      }
      this.numcommande=localStorage.getItem('numcommande');
      if (localStorage.getItem("numclient") === null){
        localStorage.setItem('numclient', '0');
      }
      this.numclient=localStorage.getItem('numclient');
      if(this.numclient != 0){
        this.getbeneficiaries();
      }
      
  }


  getbeneficiaries(){
    let x=this.numclient;
    this.dataService.getbeneficiariesbyId(x).subscribe(res=>{
      this.beneficiaries=res;
    });
  }

  insertbeneficiaries(){
    this.login=localStorage.getItem("login");
    this.numclient=localStorage.getItem('numclient');
    this.numcommande=localStorage.getItem('numcommande');
    this.gettotal();
    let cmd = [this.numclient,this.login,this.numcommande];
    this.dataService.insertbeneficiaries(cmd).subscribe(res=>{
      this.getcommandes();
      this.getbeneficiaries();
    });
  }

  deletebeneficiaries(id:any){
    this.login=localStorage.getItem("login");
    let cmd = [id,this.numclient,this.login];
    this.dataService.deletebeneficiaries(cmd).subscribe(res=>{
      this.getbeneficiaries();
      this.getcommandes();
    });
  }
  getNiveaux(){
      this.dataService.getNiveaux().subscribe(res=>{
        this.allNiveaux=res;
        this.niveaux=this.allNiveaux;
      });
  }

  selectNiveau(id:any){
    this.login=localStorage.getItem("login");
    this.numcommande=localStorage.getItem('numcommande');
    this.numclient=localStorage.getItem("numclient");
    let cmd = [id,this.numcommande,this.login,this.numclient];
    this.dataService.AddProdInNiveauCommande(cmd).subscribe(res=>{
      this.getcommandes();
    });
  }

  videCommande(){
    this.numcommande=localStorage.getItem('numcommande');
    this.numclient=localStorage.getItem("numclient");
    let cmd = [this.numcommande,this.numclient,this.login];
    this.dataService.videCommande(cmd).subscribe(res=>{
      console.log(res);
    });
  }


  chagenumcommandeInput(x:any){
    this.numcommande = x.target.value ;
  }
  chagenumcommande(){
      if(this.numcommandeinput)
      this.numcommandeinput.nativeElement.value=""
      this.lastnumcommande=localStorage.getItem('numcommande');
      localStorage.setItem('numcommande', this.numcommande);
      
      this.getcommandes();
      this.gettotal();
      
  }


  chagenumclient(x:any){
      this.numclient = x.target.value ;
      x.target.value="";
      if(this.numclient == 0){
        this.client=new Clientfidel();
      }
      let num=localStorage.getItem('numclient');
      localStorage.setItem('numclient', this.numclient);
      this.numcommande=localStorage.getItem('numcommande');
      this.login=localStorage.getItem("login");
      let cmd = [this.numcommande,this.numclient,this.login,num];
      this.dataService.UpdateNumclient(cmd).subscribe(res=>{
          this.commandes=[];
          this.getcommandes();
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
    this.search="";
    x.target.value="";
  }
  changequantiteCommande(x:any,code:any){
    this.quantite = x.target.value ;
    this.login=localStorage.getItem("login");
    this.id=code;
    this.numclient=localStorage.getItem("numclient");
    let cmd = [this.id,this.quantite,this.login,this.numclient,this.numcommande];
    this.dataService.UpdateProduct(cmd).subscribe(res=>{
      this.getcommandes();
    });
  }  
  searchBycodep(){
      this.products = this.newallproducts.filter(res => res.codep == this.searchcodep );
      this.AddProdInCommande(); 
  }
 
  addProductInput(x:any) { 
      this.quantite = 1 ;
      this.searchcodep = x.target.value ;
      this.searchBycodep();
      x.target.value="";
  }
  

  AddProdInCommande(){ 
      this.login=localStorage.getItem("login");
      this.numclient=localStorage.getItem("numclient");
      let cmd = [this.products,this.numcommande,this.quantite,this.login,this.numclient];
      this.dataService.AddProdInCommande(cmd).subscribe(res=>{
        this.getcommandes();
        
        
      });
  }

  getcommandes(){
      this.numcommande=localStorage.getItem('numcommande');
      this.numclient=localStorage.getItem('numclient');
      let cmd = [this.numcommande,this.numclient];
      this.dataService.getCommande(cmd).subscribe(res=>{
        if(res !=null ){
          console.log(res);
            this.commandes=[];
            this.commandes1=res;
            this.commandes=this.commandes1[0]
            this.path=this.commandes1[1];
            if(this.commandes1[2] !=null){
              this.client=this.commandes1[2][0];
              this.numclient=this.client.num;
              localStorage.setItem('numclient', this.numclient );
            }else{
              this.client=new Clientfidel();
              this.numclient=0;
              localStorage.setItem('numclient', '0');
              
            }
            this.buttonAddbenef=this.commandes1[3];
                console.log(this.buttonAddbenef);
            
            if(this.commandes){
              this.gettotal();

            }
            this.getbeneficiaries();
        }else{
          localStorage.setItem('numcommande', this.lastnumcommande);
          this.numcommande=this.lastnumcommande;
        }  
        if(this.codepinput)
        this.codepinput.nativeElement.focus();
      });
  }
  gettotal(){     
      let t=0;
      for (var val of this.commandes) {
        t+=val.totalligne;
      }
      this.total=t;
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.products=[];
      }, 2000);
  }
  getProducts(){
      this.dataService.getstock().subscribe(res=>{
        this.allProducts=res;
        this.newallproducts=this.allProducts[0];
        this.path=this.allProducts[1];
      });
  }
  getLastCommande(){
      this.dataService.selectLastCommande().subscribe(res=>{
        localStorage.setItem('numcommande', JSON.stringify(res));
        localStorage.setItem('numclient', '0');
        this.getcommandes();
        this.gettotal();
        this.products=[];
      });
  }
  
  searchByname(x:any) { 
    this.search=x.target.value;
      if(this.search!=""){
          this.products = this.newallproducts.filter(res=>{
              return res.name.match(this.search);
          }) ;
      }else if(this.search == ""){
          this.products=[];
      }
  }

  deleteProduct(id:any){
      this.login=localStorage.getItem("login");
      let cmd = [id,this.numclient,this.login];
      this.dataService.deleteProductOfCommand(cmd).subscribe(res=>{
          this.getcommandes();
      });
  }
}
