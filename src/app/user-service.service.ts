import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  API = 'http://localhost:8080';
  public registerUser(userData){
    return this.http.post(this.API + '/registerUser', userData);
  }

  public getUsers(){
    return this.http.get(this.API + '/getUsers')
  }
  public deleteUsers(id){
    return this.http.delete(this.API + '/deleteUser?id=' +id)
  }
  public updateUser(student){
    return this.http.put(this.API + '/updateUser', student);
  }
}
