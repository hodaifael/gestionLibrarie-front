import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';
import { Fournisseur } from 'src/app/fournisseur';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  products: Product[] = [];
  products1: Product[] = [];
  newallproducts: Product[] = [];
  allProducts: any;
  search: string = '';
  searchcodep: string = '';
  prod: Product[] = [];
  facture: any;
  facture1: any;
  numFinterne: any;
  numfacture: any;
  numfour: any;
  quantite: any = 1;
  total: any;
  totalPHT: number = 0.0;
  login: any;
  fournisseurs1: any;
  fournisseurs: Fournisseur[] = [];
  path: any;
  id: any;
  count: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getfactures();
    this.getProducts();
    this.getFournisseur();
    if (localStorage.getItem("numFinterne") === null) {
      localStorage.setItem('numFinterne', '0');
    }
    if (localStorage.getItem("numfour") === null) {
      localStorage.setItem('numfour', '0');
    }
    if (localStorage.getItem("numfacture") === null) {
      localStorage.setItem('numfacture', '0');
    }

    this.numFinterne = localStorage.getItem('numFinterne');
    this.numfour = localStorage.getItem('numfour');
    this.numfacture = localStorage.getItem('numfacture');
  }

  transfer() {
    this.numFinterne = localStorage.getItem('numFinterne');
    this.login = localStorage.getItem("login");
    let cmd = [this.numFinterne, this.login];
    this.dataService.transfer(cmd).subscribe(res => {

    });
  }
  chagenumFinterne(x: any) {
    this.numFinterne = x.target.value;
  }
  selectFinterne() {
    this.facture = [];
    localStorage.setItem('numFinterne', this.numFinterne);
    this.getfactures();
    this.gettotal();
  }
  changequantiteCommande(x: any, code: any) {
    this.quantite = x.target.value;
    this.login = localStorage.getItem("login");
    this.id = code;
    let cmd = [this.id, this.quantite, this.login];
    this.dataService.UpdateProductFacture(cmd).subscribe(res => {
      this.getfactures();
      this.getProducts();
    });
  }
  chagenumfournisseur() {
    localStorage.setItem('numfour', this.numfour);
    this.updateFourAndFacture();
  }

  chagenumfacture(x: any) {
    this.numfacture = x.target.value;
  }
  selectnumfacture() {
    localStorage.setItem('numfacture', this.numfacture);
    this.updateFourAndFacture();
  }

  updateFourAndFacture() {
    let arr = [this.numFinterne, this.numfour, this.numfacture];
    this.dataService.updateFourAndFacture(arr).subscribe(res => {
      console.log(res);
    });
  }

  AddProdInfacture() {
    this.login = localStorage.getItem("login");
    let cmd = [this.products1, this.numFinterne, this.quantite, this.numfour, this.numfacture, this.login];
    this.dataService.AddProdInfacture(cmd).subscribe(res => {
      this.getfactures();
      this.getProducts();
    });
  }

  getFournisseur() {
    this.dataService.getfournisseurs().subscribe(res => {
      this.fournisseurs1 = res;
      this.fournisseurs = this.fournisseurs1;
      console.log(this.fournisseurs);
    });
  }

  getfactures() {
    this.numFinterne = localStorage.getItem('numFinterne');
    localStorage.setItem('numfour', '0');
    this.numfour = localStorage.getItem('numfour');
    localStorage.setItem('numfacture', '0');
    this.numfacture = localStorage.getItem('numfacture');
    this.dataService.getfacture(this.numFinterne).subscribe(res => {
      if (res) {
        this.facture1 = res;
        this.facture = this.facture1[0];
        this.path = this.facture1[1];
        this.numfacture = this.facture1[2];
        this.numfour = this.facture1[3];
        this.gettotal();
        this.gettotalPHT();
        console.log(res);
      } else {
        this.facture = [];
        localStorage.setItem('numfour', '0');
        this.numfour = localStorage.getItem('numfour');
        localStorage.setItem('numfacture', '0');
        this.numfacture = localStorage.getItem('numfacture');
      }
    });
  }

  gettotal() {
    let t = 0;
    let i = 0;
    for (var val of this.facture) {
      let totalligne = val.pu * val.qt;
      t += totalligne;
      i++;
    }
    this.total = t;
    this.count = i;
  }
  gettotalPHT() {
    let t: number = 0.00;
    let i = 0;
    let totalligne: number;
    for (var val of this.facture) {
      totalligne = parseFloat(val.pht) * val.qt;
      t += totalligne;
      i++;
    }
    this.totalPHT = t;

  }

  totallignePht(qt: any, pht: any) {
    return parseFloat(pht) * qt;
  }

  addProductInput(x: any) {
    this.searchcodep = x.target.value;
    this.quantite = 1;
    this.searchBycodep();
    x.target.value = "";
  }

  searchBycodep() {
    this.products1 = this.newallproducts.filter(res => res.codep == this.searchcodep);
    this.AddProdInfacture();
  }

  getProducts() {
    this.dataService.getstockglobal().subscribe(res => {
      this.allProducts = res;
      this.newallproducts = this.allProducts[0];
      this.path = this.allProducts[1];
      if (this.search != "") {
        this.products = this.newallproducts.filter(res => {
          return res.name.match(this.search);
        });
      } else if (this.search == "") {
        this.products = [];
      }
    });
  }

  getLastfacture() {
    this.dataService.selectLastfacture().subscribe(res => {
      localStorage.setItem('numFinterne', JSON.stringify(res));
      this.getfactures();
      this.facture = [];
      localStorage.setItem('numfour', '0');
      this.numfour = localStorage.getItem('numfour');
      localStorage.setItem('numfacture', '0');
      this.numfacture = localStorage.getItem('numfacture');
    });
  }

  searchByname() { // with type info
    if (this.search != "") {
      this.products = this.newallproducts.filter(res => {
        return res.name.match(this.search);
      });
    } else if (this.search == "") {
      this.products = [];
    }
  }

  changequantite(x: any, code: any) {
    this.quantite = x.target.value;
    if (x.target.value == "") {
      this.quantite = 1;

    } else {
      this.quantite = x.target.value;
    }
    this.searchcodep = code;
    this.searchBycodep();
    x.target.value = "";
  }

  deleteProduct(id: any) {
    this.dataService.deleteProductOffacture(id).subscribe(res => {
      this.getfactures();
      this.getProducts();
    });
  }
}

