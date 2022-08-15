import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './../../Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  isLogged:boolean = false;
  constructor(private userAuth:UserAuthService) { }

  ngOnInit(): void {
    this.isLogged = this.userAuth.userStatus;
  }

  login(){

    this.userAuth.login('username','password')

  }

  logout(){

    this.userAuth.logout()

  }

}
