import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Commande } from 'src/app/commande';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  CommandeID: any;
  commandes:any;
  commandes1:any;
  total:any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.CommandeID = this.route.snapshot.params.id;
      this.getcommandes();
  }
  

  getcommandes(){
    this.dataService.getCommandeinvoice(this.CommandeID).subscribe(res=>{
      console.log(res);
      this.commandes1=res;
      this.commandes=this.commandes1
      this.gettotal();
    });
}
  gettotal(){     
      let t=0;
      for (var val of this.commandes) {
        t+=val.totalligne;
      }
      this.total=t;
  }

}
