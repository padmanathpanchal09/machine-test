import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuingInterceptorService } from '../../loginService/login-usuing-interceptor.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

//   "userId": 0,
//   "emailId": "kkc@gmail.com",
//   "fullName": "string",
//   "password": "123"
// }

_fb = inject(FormBuilder);
router = inject(Router);
userService = inject(LoginUsuingInterceptorService);

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}


createUserForm = this._fb.group({
  userId:['0'],
  fullName:[''],
  emailId:[''],
  password:[''],
})



onCreate(){
  const newUser = this.createUserForm.value;
  this.userService.onCreateUser(newUser).subscribe({
    next:(res:any)=>{
      alert("user has been created");
      localStorage.removeItem('ngToken');
      this.router.navigateByUrl('/login');
      this.createUserForm.reset();
      console.log(res);
      
      // this.router.navigateByUrl('/loginUsingInterceptor');
    }
  })
}


}
