import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("navbar");
  }

  checktype() {
    return localStorage.getItem('type') == "superuser" && this.checklogin();
  }
  checklogin() {
    if (localStorage.getItem("login") === null) {
      return false;
    }
    return true;
  }
  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('type');
    this.router.navigate(['auth']);
  }

}
