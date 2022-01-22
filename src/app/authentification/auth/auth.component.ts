import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  numero:any;
  password:any;
  users:any;
  message="";
  constructor(private dataService:DataService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.numero="";
    this.password="";
  }
  
  auth(){
    let user = [this.numero,this.password];
    this.dataService.auth(user).subscribe(res=>{
      if(res!=null){
        this.users=res;
        localStorage.setItem('type',this.users[0]["type"]);
        localStorage.setItem('login',this.users[0]["numuser"]);
        localStorage.setItem('password',this.users[0]["password"]);
        localStorage.setItem('name',this.users[0]["name"]);
        localStorage.setItem('email',this.users[0]["email"]);
        this.router.navigate(['../']);
      }else{
        this.message="numero or password incorrecte";
      }
    });
  }
}
