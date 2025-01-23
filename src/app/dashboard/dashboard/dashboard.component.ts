import { Component, inject } from '@angular/core';
import { LoginUsuingInterceptorService } from '../../loginService/login-usuing-interceptor.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userService = inject(LoginUsuingInterceptorService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData()
 
  }


  getData(){
    this.userService.getUserData().subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }
}
