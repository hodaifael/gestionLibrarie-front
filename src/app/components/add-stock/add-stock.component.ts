import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  products:any;
  prod= new Product();
  message="";
  codePrduit:any;
  files:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  chageCodep(){
    this.dataService.selectLastCodep().subscribe(res=>{
      this.prod.codep=res;
    });
  }
  insertProduct(){

    let formdata=new FormData();
    formdata.append("file",this.files,this.files.name)
    formdata.append("prod",JSON.stringify(this.prod))
    this.dataService.insertProduct(formdata).subscribe(res=>{      
      this.message="product inserted";
    });
    this.prod= new Product();

  }
  imageUpload(event:any){
    this.files=event.target.files[0];
  }
  

}
