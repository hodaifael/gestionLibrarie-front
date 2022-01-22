import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockComponent } from './stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { InvoiceCmdComponent } from './invoice-cmd/invoice-cmd.component';
import { CommandeFournissComponent } from './commande-fourniss/commande-fourniss.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { QRComponent } from './qr/qr.component';
import { QRproductComponent } from './qrproduct/qrproduct.component';
import { AddQRproductComponent } from './add-qrproduct/add-qrproduct.component';
import { DebiteurComponent } from './debiteur/debiteur.component';
import { DetailBenificiereComponent } from './detail-benificiere/detail-benificiere.component';
import { ComponentsComponent } from './components.component';


const routes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: 'editstock/:id', component: EditStockComponent },
  { path: 'editproduct/:id', component: EditproductComponent },
  { path: 'addstock', component: AddStockComponent },
  { path: 'addcommande', component: AddCommandeComponent },
  { path: 'caisse', component: CaisseComponent },
  { path: 'facture', component: FactureComponent },
  { path: 'duplique/:id', component: DupliqueProduitComponent },
  { path: 'invoice/:id', component: InvoiceComponent },
  { path: 'invoice-facture/:id', component: InvoiceFactureComponent },
  { path: 'invoice-Cmd/:id', component: InvoiceCmdComponent },
  { path: 'fournisseur', component: AddFournisseurComponent },
  { path: 'users', component: AddUserComponent },
  { path: 'chiffre', component: ChiffreComponent },
  { path: 'retour', component: RetourComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'khadamat', component: KhadamatComponent },
  { path: 'entree_sortie', component: EntreeSortieComponent },
  { path: 'stock_global', component: StockglobalComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'niveau', component: AddniveauComponent },
  { path: 'addclient', component: AddclientComponent },
  { path: 'commandeFour', component: CommandeFournissComponent },
  { path: 'QR', component: QRComponent },
  { path: 'QRproduct/:id', component: QRproductComponent },
  { path: 'AddQRproduct', component: AddQRproductComponent },
  { path: 'AddDebiteur', component: DebiteurComponent },
  { path: 'detailbenef/:id', component: DetailBenificiereComponent },
  { path: '', component: ComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
