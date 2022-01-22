import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

import { StockComponent } from './stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { CaisseComponent } from './caisse/caisse.component';
import { DatePipe } from '@angular/common';
import { FactureComponent } from './facture/facture.component';
import { DupliqueProduitComponent } from './duplique-produit/duplique-produit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { Fournisseur } from '../fournisseur';
import { AddUserComponent } from './add-user/add-user.component';

import { HomeComponent } from './home/home.component';
import { ChiffreComponent } from './chiffre/chiffre.component';
import { RetourComponent } from './retour/retour.component';
import { InvoiceFactureComponent } from './invoice-facture/invoice-facture.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { KhadamatComponent } from './khadamat/khadamat.component';
import { EntreeSortieComponent } from './entree-sortie/entree-sortie.component';
import { StockglobalComponent } from './stockglobal/stockglobal.component';
import { TransferComponent } from './transfer/transfer.component';
import { AddniveauComponent } from './addniveau/addniveau.component';
import { AddclientComponent } from './addclient/addclient.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { CommandeFournissComponent } from './commande-fourniss/commande-fourniss.component';
import { InvoiceCmdComponent } from './invoice-cmd/invoice-cmd.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { QRComponent } from './qr/qr.component';
import { QRproductComponent } from './qrproduct/qrproduct.component';
import { AddQRproductComponent } from './add-qrproduct/add-qrproduct.component';
import { DebiteurComponent } from './debiteur/debiteur.component';
import { DetailBenificiereComponent } from './detail-benificiere/detail-benificiere.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    StockComponent,
    EditStockComponent,
    AddStockComponent,
    AddCommandeComponent,
    CaisseComponent,
    FactureComponent,
    DupliqueProduitComponent,
    InvoiceComponent,
    AddFournisseurComponent,
    AddUserComponent,
    HomeComponent,
    ChiffreComponent,
    RetourComponent,
    InvoiceFactureComponent,
    StatistiqueComponent,
    KhadamatComponent,
    EntreeSortieComponent,
    StockglobalComponent,
    TransferComponent,
    AddniveauComponent,
    AddclientComponent,
    BeneficiariesComponent,
    CommandeFournissComponent,
    InvoiceCmdComponent,
    EditproductComponent,
    QRComponent,
    QRproductComponent,
    AddQRproductComponent,
    DebiteurComponent,
    DetailBenificiereComponent,

  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule


  ],
})
export class ComponentsModule { }
