import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }

  getstock(){
    return this.httpclient.get('http://localhost:8000/api/products/');
  }
  getstockglobal(){
    return this.httpclient.get('http://localhost:8000/api/productsglobal/');
  }
  insertProduct(data:any){
    return this.httpclient.post('http://localhost:8000/api/addProduct',data);
  }
  duplicate(data:any){
    return this.httpclient.post('http://localhost:8000/api/duplicate',data);
  }
  deleteProduct(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProduct/'+id);
  }
  getProduct(id:any){
    return this.httpclient.get('http://localhost:8000/api/product/'+id);
  }
  updateProduct(data:any){
    return this.httpclient.post('http://localhost:8000/api/updateProduct/',data);
  }
  editProduct(data:any){
    return this.httpclient.post('http://localhost:8000/api/editProduct/',data);
  }
  selectLastCodep(){
    return this.httpclient.get('http://localhost:8000/api/selectLastCodep/');
  }





  //commande
  AddProdInCommande(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdInCommande',data);
  }
  AddProdInNiveauCommande(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdInNiveauCommande',data);
  }
  UpdateProduct(data:any){
    return this.httpclient.post('http://localhost:8000/api/UpdateProduct',data);
  }
  UpdateNumclient(data:any){
    return this.httpclient.post('http://localhost:8000/api/UpdateNumclient',data);
  }
  selectLastCommande(){
    return this.httpclient.get('http://localhost:8000/api/selectLastc');
  }
  getCommande(id:any){
    return this.httpclient.post('http://localhost:8000/api/getCommande/',id);
  }

  getCommandeinvoice(id:any){
    return this.httpclient.get('http://localhost:8000/api/getCommandeinvoice/'+id);
  }
  videCommande(data:any){
    return this.httpclient.post('http://localhost:8000/api/videCommande/',data);
  }
  
  deleteProductOfCommand(data:any){
    return this.httpclient.post('http://localhost:8000/api/deleteProductOfCommand/',data);
  }
  




  //caisse
  AddProdIncaisse(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdIncaisses',data);
  }
  
  getcaisse(data:any){
    return this.httpclient.get('http://localhost:8000/api/getcaisses/'+data);
  }
  
  UpdateProductcaisse(data:any){
    return this.httpclient.post('http://localhost:8000/api/UpdateProductcaisse',data);
  }
  changenumclient(data:any){
    return this.httpclient.post('http://localhost:8000/api/changenumclient',data);
  }
  deleteProductOfcaisses(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProductOfcaisses/'+id);
  }






  //facture

  AddProdInfacture(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdInFacture',data);
  }

  selectLastfacture(){
    return this.httpclient.get('http://localhost:8000/api/selectLastf');
  }
  getfacture(id:any){
    return this.httpclient.get('http://localhost:8000/api/getFacture/'+id);
  }

  deleteProductOffacture(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProductOfFacture/'+id);
  }

  updateFourAndFacture(data:any){
    return this.httpclient.post('http://localhost:8000/api/updateFourAndFacture/',data);
  }
  
  transfer(data:any){
    return this.httpclient.post('http://localhost:8000/api/transfer/',data);
  }
 
  UpdateProductFacture(data:any){
    return this.httpclient.post('http://localhost:8000/api/UpdateProductFacture/',data);
  }





  //fournisseur

  getfournisseurs(){
    return this.httpclient.get('http://localhost:8000/api/fournisseurs/');
  }
  insertfournisseurs(data:any){
    return this.httpclient.post('http://localhost:8000/api/addfournisseur',data);
  }
  deletefournisseurs(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deletefournisseur/'+id);
  }




  
  //Khadamat

  getkhadamat(data:any){
    return this.httpclient.get('http://localhost:8000/api/getKhadamat/'+data);
  }
  insertkhadamat(data:any){
    return this.httpclient.post('http://localhost:8000/api/addKhadamat',data);
  }
  deletekhadamat(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteKhadamat/'+id);
  }





  //user

  insertUser(data:any){
    return this.httpclient.post('http://localhost:8000/api/adduser',data);
  }

  getusers(){
    return this.httpclient.get('http://localhost:8000/api/users/');
  }
 
  deleteusers(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteusers/'+id);
  }

  



  //authentification

  auth(data:any){
    return this.httpclient.post('http://localhost:8000/api/auth',data);
  }

  updatepass(data:any){
    return this.httpclient.post('http://localhost:8000/api/updatepass',data);
  }




 //chiffre
 
 getchiffreCommande(id:any){
  return this.httpclient.get('http://localhost:8000/api/getchiffreCommande/'+id);
}
  
  



  //retour

  AddProdInRetour(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdInRetour',data);
  }

  getretour(){
    return this.httpclient.get('http://localhost:8000/api/getretour');
  }

  deleteProductOfRetour(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProductOfRetour/'+id);
  }
  addNumFacture(data:any){
    return this.httpclient.post('http://localhost:8000/api/addNumFacture',data);
  }





  //statistique

  getStatistique(data:any){
    return this.httpclient.post('http://localhost:8000/api/getStatistique',data);
  }


  
  
  //Entree  
  getEntree(data:any){
    return this.httpclient.get('http://localhost:8000/api/getEntree/'+data);
  }
  insertEntree(data:any){
    return this.httpclient.post('http://localhost:8000/api/addEntree',data);
  }
  deleteEntree(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteEntree/'+id);
  }



  
  //Sortie  
  getSortie(data:any){
    return this.httpclient.get('http://localhost:8000/api/getSortie/'+data);
  }
  insertSortie(data:any){
    return this.httpclient.post('http://localhost:8000/api/addSortie',data);
  }
  deleteSortie(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteSortie/'+id);
  }




  
  //Transfer
  AddProdIntransfer(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdIntransfer',data);
  }
  
  gettransfer(data:any){
    return this.httpclient.get('http://localhost:8000/api/gettransfer/'+data);
  }
  
  updateProductTransfer(data:any){
    return this.httpclient.post('http://localhost:8000/api/updateProductTransfer',data);
  }
  deleteProductOfTransfer(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProductOfTransfer/'+id);
  }




  //Niveau
  AddProdInNiveau(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdInNiveau',data);
  }
  updateNomNiveau(data:any){
    return this.httpclient.post('http://localhost:8000/api/updateNomNiveau',data);
  }
  UpdateProductNiveau(data:any){
    return this.httpclient.post('http://localhost:8000/api/UpdateProductNiveau',data);
  }
  selectLastcNiveau(){
    return this.httpclient.get('http://localhost:8000/api/selectLastcNiveau');
  }
  getCommandeNiveau(id:any){
    return this.httpclient.get('http://localhost:8000/api/getCommandeNiveau/'+id);
  }
  getNiveaux(){
    return this.httpclient.get('http://localhost:8000/api/getNiveaux/');
  }
  getNomNiveau(id:any){
    return this.httpclient.get('http://localhost:8000/api/getNomNiveau/'+id);
  }
  
  deleteProductOfNiveau(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProductOfNiveau/'+id);
  }


  



  //client fidel

  insertClient(data:any){
    return this.httpclient.post('http://localhost:8000/api/insertClient',data);
  }

  getclients(){
    return this.httpclient.get('http://localhost:8000/api/getclients/');
  }
 
  deleteclients(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteclients/'+id);
  }

  



  //beneficiaries

  insertbeneficiaries(data:any){
    return this.httpclient.post('http://localhost:8000/api/insertbeneficiaries',data);
  }

  getbeneficiaries(){
    return this.httpclient.get('http://localhost:8000/api/getbeneficiaries/');
  }
  getbeneficiariesbyId(id:any){
    return this.httpclient.get('http://localhost:8000/api/getbeneficiariesbyId/'+id);
  }
 
  deletebeneficiaries(data:any){
    return this.httpclient.post('http://localhost:8000/api/deletebeneficiaries',data);
  }



  
  //commande Fournisseur

  AddProdInCmd(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdInCmd',data);
  }

  selectLastCmd(){
    return this.httpclient.get('http://localhost:8000/api/selectLastCmd');
  }
  getCmd(id:any){
    return this.httpclient.get('http://localhost:8000/api/getCmd/'+id);
  }

  deleteProductOfCmd(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProductOfCmd/'+id);
  }
 
  UpdateProductCmd(data:any){
    return this.httpclient.post('http://localhost:8000/api/UpdateProductCmd/',data);
  }
  




  //Product Qr

  AddProdInProductQR(data:any){
    return this.httpclient.post('http://localhost:8000/api/AddProdInProductQR',data);
  }

  getProductQR(data:any){
    return this.httpclient.post('http://localhost:8000/api/getProductQR/',data);
  }

  getProductTypes(){
    return this.httpclient.get('http://localhost:8000/api/getProductTypes/');
  }

  deleteProductQR(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deleteProductQR/'+id);
  }




  //QR client
  generate(){
    return this.httpclient.get('http://localhost:8000/api/generate/');
  }



  
  //debiteur
  
  getdebiteurs(){
    return this.httpclient.get('http://localhost:8000/api/getdebiteurs/');
  }
  insertdebiteurs(data:any){
    return this.httpclient.post('http://localhost:8000/api/insertdebiteurs',data);
  }
  changeavance(data:any){
    return this.httpclient.post('http://localhost:8000/api/changeavance',data);
  }
  deletedebiteurs(id:any){
    return this.httpclient.delete('http://localhost:8000/api/deletedebiteurs/'+id);
  }

  //Detail benificiares

  
  detailcaisses(data:any){
    return this.httpclient.get('http://localhost:8000/api/detailcaisses/'+data);
  }
  detailcommandes(data:any){
    return this.httpclient.get('http://localhost:8000/api/detailcommandes/'+data);
  }
 


}

