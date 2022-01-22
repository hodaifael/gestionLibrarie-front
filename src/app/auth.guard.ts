import { Injectable } from '@angular/core';
import { CanActivate ,Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router:Router ){}

    login:any;
    pass:any;
    superuser:any;
    canActivate(): any {
        this.login=localStorage.getItem('login');
        this.pass=localStorage.getItem('password');
        if(this.login && this.pass){
            return true;
        }else{
            this.router.navigate(['auth']);
        }
    }

    canActivate1(): any {
        this.superuser=localStorage.getItem('superuser');
        
        if(this.superuser){
            return true;
        }else{
            this.router.navigate(['auth']);
        }
    }



}