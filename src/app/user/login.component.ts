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
  loginInvalid: boolean = false;
  private mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        if(!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      })
  }

  cancelClick() {
    this.router.navigate(['events']);
  }

}
