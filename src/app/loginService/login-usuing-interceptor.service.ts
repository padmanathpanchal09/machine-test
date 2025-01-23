import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuingInterceptorService {

  private apiUrl = 'https://projectapi.gerasim.in/api/UserApp';
  // private apiUrl = 'https://freeapi.miniprojectideas.com/api/User/Login';
                    //'https://projectapi.gerasim.in/api/UserApp/CreateNewUser'
                    // https://projectapi.gerasim.in/api/UserApp/GetAllUsers

  constructor(private http: HttpClient) { }


  onLogin(user:any){
    // debugger;
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  
  onCreateUser(user:any){

    return this.http.post(`${this.apiUrl}/CreateNewUser`,user);

  }

  getUserData(){
    return this.http.get(`${this.apiUrl}/GetAllUsers`);
  }
}
