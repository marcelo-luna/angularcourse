import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color: #E05C65; padding-left: 10px;}
    .error input { 
      background-color:#E3C3C5;
    }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

      this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      })
  }

  cancelClick() {
    this.router.navigate(['events']);
  }

  saveclick(formsValue) {
    console.log(this.profileForm);

    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formsValue.value.firstName, formsValue.value.lastName);
      this.router.navigate(['events']);
    }
  }

  validateFirstName(){
   return this.firstName.invalid && this.firstName.touched
  }

  validateLastName(){
    return this.lastName.invalid && this.lastName.touched
   }

}