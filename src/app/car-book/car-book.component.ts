import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-car-book',
  templateUrl: './car-book.component.html',
  styleUrls: ['./car-book.component.css']
})
export class CarBookComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  userDetails = null

  userToUpdate = {
    id: "",
    userName: "",
    email: "",
    carType: "",
    carColour:""
  };
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(
      (resp) =>{
        console.log(resp);
        this.userDetails = resp;
      },
      (err) =>{
        console.log(err);
      }
    )
  }
  deleteUser(user){
    this.userService.deleteUsers(user.id).subscribe(
      (resp) =>{
        console.log(resp);
      },
      (err) =>{
        console.log(err);
      }
    )
  }
  editUser(user){
    this.userToUpdate = user;
  }
  updateUser(){
    this.userService.updateUser(this.userToUpdate).subscribe(
      (resp) =>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
