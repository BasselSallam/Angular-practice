import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean;
  constructor(private userAuth: UserAuthService) { 
  this.isLogged = this.userAuth.userStatus;
}
  ngOnInit(): void {
    //this.isLogged = this.userAuth.userStatus;
    this.userAuth.isUserLoggedSub().subscribe(status=>{
      this.isLogged = status;
    })
  }

}
