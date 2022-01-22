import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user= new User();
  users:any;
  message="";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getusers();
  }


  insertUser(){
    this.dataService.insertUser(this.user).subscribe(res=>{
      this.message="user inserted";
      this.getusers();
    });
    this.user= new User();
  }

  getusers(){
    this.dataService.getusers().subscribe(res=>{
      this.users=res;
    });
  }

  
  deleteusers(id:any){
    this.dataService.deleteusers(id).subscribe(res=>{
      this.getusers();
    });
  }
}
