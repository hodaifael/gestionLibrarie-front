import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-invoice-cmd',
  templateUrl: './invoice-cmd.component.html',
  styleUrls: ['./invoice-cmd.component.css']
})
export class InvoiceCmdComponent implements OnInit {
  CmdID: any;
  facture:any;
  facture1:any;
  total:any;
  path:any;
  numfacture:any;
  numfour:any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.CmdID = this.route.snapshot.params.id;
      this.getCmd();
  }


  getCmd(){
      this.dataService.getCmd(this.CmdID).subscribe(res=>{
        this.facture1=res;
        this.facture=this.facture1[0];
        this.path=this.facture1[1];
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
