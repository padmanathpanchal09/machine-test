import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-material',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './ng-material.component.html',
  styleUrl: './ng-material.component.css'
})
export class NgMaterialComponent {

   data:any[] = [];

  _fb = inject(FormBuilder);
  
  userForm  = this._fb.group({
    id: [''],
    name:['',[Validators.required, Validators.pattern(/^(?!\s+$)[a-zA-Z\s]+$/) ]],
    age:['',Validators.required],
    city:['',Validators.required]
  })

  ngOnInit(): void {

    
    
    
  }

  onSubmit(){

    console.log(this.userForm);
    const userData = this.userForm.value;
    this.userForm.reset();

// debugger;
    if(userData.id ==''){

      userData.id = Date.now().toString();      

    }else{
      userData.id = Date.now().toString(); 
    }
    

   this.data.push(userData);

      
      console.log(userData);
   
    // console.log();
    
  }

}
