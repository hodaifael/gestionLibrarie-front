import { Component, OnInit } from '@angular/core';
import { Clientfidel } from 'src/app/clientfidel';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  client= new Clientfidel();
  clients:Clientfidel[]=[];
  clients1:any;
  newclients:Clientfidel[]=[];
  message="";
  login:any;
  search:any="";
  searchnum:any="";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getclients();
  }


  searchByNomClient(){
    if(this.search !=""){
        this.clients = this.newclients.filter(res=>{
        return res.name.match(this.search);
        }) ;
    }else if(this.search == ""){
        this.clients=this.clients1;
    }
  }

  searchByNumClient(){
    if(this.searchnum !=""){
      this.clients = this.newclients.filter(res => res.num == this.searchnum );

    }else{
      this.clients=this.clients1;
    }
  }
  insertUser(){
    this.login=localStorage.getItem("login");
    let cmd = [this.client,this.login];
    this.dataService.insertClient(cmd).subscribe(res=>{
      this.message="client inserted";
      this.getclients();
    });
    this.client= new Clientfidel();
  }

  getclients(){
    this.dataService.getclients().subscribe(res=>{
      this.clients1=res;
      this.newclients=this.clients1;
      this.searchByNomClient();
    });
  }

  
  deleteclient(id:any){
    this.dataService.deleteclients(id).subscribe(res=>{
      this.getclients();
    });
  }
}
