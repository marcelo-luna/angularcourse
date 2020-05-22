import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [``],
})
export class LoginComponent implements OnInit {

  private userName: string;
  private password: string;
  private mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm){
    this.authService.loginUser(this.userName, this.password);
    this.router.navigate(['events'])
  }

  cancelClick(){
    this.router.navigate(['events']);
  }

}
