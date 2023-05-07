import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signUpForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    rePassword: new FormControl(),
    name: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  });

  constructor(private location: Location, private authService: AuthService, private userService: UserService){ }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred =>{
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        username: this.signUpForm.get('email')?.value.split('@')[0],
        name: {
          firstName: this.signUpForm.get('name.firstName')?.value,
          lastName: this.signUpForm.get('name.lastName')?.value
        }
      };
      this.userService.create(user).then(_=> {
        console.log('User added succesfully.');
      }).catch(error =>{
        console.error(error);
      });
    }).catch(error =>{
      console.error(error);
    });
  }

  goBack(){
    this.location.back();
  }
}
