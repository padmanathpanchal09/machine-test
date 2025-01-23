import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class MasterService {



  private apiUrl:string = "http://localhost:3000/userList";
  private apiUrl2:string = "http://localhost:3000/userData";


  constructor(private http: HttpClient){}

  getAllUser(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl) ;
  } 


  onSubmitData(user:Post){
    return this.http.post<Post>(`${this.apiUrl}`, user);
  }

  onUpdateUser(id:string, users:Post){
    return this.http.put<Post>(`${this.apiUrl}/${id}`, users);
  }


  onDelete(id:any){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
// another response

  getUserData(){
    return this.http.get(this.apiUrl2);
  }


  onDataSubmit(userData:any){
    return this.http.post(`${this.apiUrl2}`,userData)
  }

  deleteData(id:any){

    return this.http.delete(`${this.apiUrl2}/${id}`)

  }





  



}
