import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent implements OnInit {
  beneficiaries:any;
  message="";
  login:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getbeneficiaries();
  }



  getbeneficiaries(){
    this.dataService.getbeneficiaries().subscribe(res=>{
      this.beneficiaries=res;
    });
  }

  
  deletebeneficiaries(id:any){
    this.dataService.deletebeneficiaries(id).subscribe(res=>{
      this.getbeneficiaries();
    });
  }
}

