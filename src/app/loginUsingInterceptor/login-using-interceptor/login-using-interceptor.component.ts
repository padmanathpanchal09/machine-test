import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginInterceptorInterceptor } from '../../login-interceptor.interceptor';
import { LoginUsuingInterceptorService } from '../../loginService/login-usuing-interceptor.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-login-using-interceptor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-using-interceptor.component.html',
  styleUrl: './login-using-interceptor.component.css'
})
export class LoginUsingInterceptorComponent {

  
     data:any[] = [];
  
    _fb = inject(FormBuilder);
    _loginInterceptorService = inject(LoginUsuingInterceptorService);
    router = inject(Router)
    userForm  = this._fb.group({

      emailId:['',[Validators.required]],
      password:['',Validators.required],
    })
  
    ngOnInit(): void {
   
      
    }
  
    onSubmit(){
      // debugger;
      const userLogin = this.userForm.value;

  
      // debugger;
      this._loginInterceptorService.onLogin(userLogin).subscribe({
        next:(res:any)=>{
          localStorage.setItem('ngToken', res.data.token);
          console.log(res);
          this.router.navigateByUrl('/dashboard')

          
        },
        error:(err)=>{
          // debugger;
          console.error(err)
          alert("wrong credentials but why");
          
        }
      })
    }

}



