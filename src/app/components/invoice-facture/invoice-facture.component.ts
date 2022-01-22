import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Commande } from 'src/app/commande';

@Component({
  selector: 'app-invoice-facture',
  templateUrl: './invoice-facture.component.html',
  styleUrls: ['./invoice-facture.component.css']
})
export class InvoiceFactureComponent implements OnInit {
  factureID: any;
  facture:any;
  facture1:any;
  total:any;
  path:any;
  numfacture:any;
  numfour:any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.factureID = this.route.snapshot.params.id;
      this.getfacture();
  }


  getfacture(){
      this.dataService.getfacture(this.factureID).subscribe(res=>{
        this.facture1=res;
        this.facture=this.facture1[0];
        this.path=this.facture1[1];
        this.numfacture=this.facture1[2];
        this.numfour=this.facture1[3];
        console.log(res);
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

}
