import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

   profileForm: FormGroup;

   constructor(private authService: AuthService, private router: Router) {
     
   }
  
  ngOnInit(): void {
    console.log(this.authService.currentUser.firstName);
  //  let firstName = new FormControl(this.authService.currentUser.firstName);
  //  let lastName = new FormControl(this.authService.currentUser.lastName);
  let firstName = new FormControl(this.authService.currentUser.firstName);
  let lastName = new FormControl(this.authService.currentUser.lastName);
   this.profileForm = new FormGroup({
    firstName: firstName,
     lastName: lastName
   })
  }

  cancelClick(){
    this.router.navigate(['events']);
  }

  saveclick(formsValue){
    this.authService.updateCurrentUser(formsValue.firstName, formsValue.lastName);
  }

}