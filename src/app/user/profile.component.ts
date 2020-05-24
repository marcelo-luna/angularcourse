import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validator } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color# E05C65; padding-left: 10px;}
    .error input { 

    }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private validator: Validator) {

  }

  ngOnInit(): void {

    if (this.profileForm.valid){
      let firstName = new FormControl(this.authService.currentUser.firstName, this.validator.);
      let lastName = new FormControl(this.authService.currentUser.lastName);
      this.profileForm = new FormGroup({
        firstName: firstName,
        lastName: lastName
      })
    }
  }

  cancelClick() {
    this.router.navigate(['events']);
  }

  saveclick(formsValue) {

    this.authService.updateCurrentUser(formsValue.value.firstName, formsValue.value.lastName);
  }

}