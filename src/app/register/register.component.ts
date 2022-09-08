import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  register(registerForm:NgForm){
    this.userService.registerUser(registerForm.value).subscribe(
    (resp) =>{
      console.log(resp);
      registerForm.reset();
    },
    (err) =>{
      console.log(err);
    }
    );
  }
}
