import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficiaries } from 'src/app/beneficiaries';
import { Caisse } from 'src/app/caisse';
import { Commande } from 'src/app/commande';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-detail-benificiere',
  templateUrl: './detail-benificiere.component.html',
  styleUrls: ['./detail-benificiere.component.css']
})
export class DetailBenificiereComponent implements OnInit {
  caisses:Caisse[]=[];
  caisses1:any;
  commandes:Commande[]=[];
  commandesbenef:Beneficiaries[]=[];
  commandes1:any;
  numclient: any;
  path:any;
  constructor(private dataService:DataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this. numclient = this.route.snapshot.params.id;
    this.detailcaisses();
    this.detailcommandes();
  }



  detailcaisses(){
    let d =[this.numclient];
    this.dataService.detailcaisses(d).subscribe(res=>{
      this.caisses1=res;
      this.caisses=this.caisses1[0];
      this.path=this.caisses1[1];
      
    });
  }
  detailcommandes(){
    let d =[this.numclient];
    this.dataService.detailcommandes(d).subscribe(res=>{
      console.log(res);
      this.commandes1=res;
      this.commandesbenef=this.commandes1[0];
      this.commandes=this.commandes1[1];
      
    });
  }


}
