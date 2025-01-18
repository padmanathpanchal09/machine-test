import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Post } from '../../post';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-using-form-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers:[MasterService],
  templateUrl: './using-form-group.component.html',
  styleUrl: './using-form-group.component.css'
})
export class UsingFormGroupComponent {
  
  usersArray:Post[]=[];
  userLists:Post[] =[];
  
  isEditMode:boolean = false;
  isOpen:boolean = false;


  userForm:FormGroup = new FormGroup({

    id:new FormControl(''),
    name:new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
  })

constructor(private masterService:MasterService){

}


ngOnInit(){

  this.masterService.getAllUser().subscribe((res:Post[])=>{
   this.userLists = res
    
  })
}


getData(){
  this.masterService.getAllUser().subscribe({
    next:(res)=>{
      this.userLists = res;

    }
  })
}

    OnSubmit(){
      if (this.userForm.valid) {
        let userData = this.userForm.value;
        if (!userData.id) {
            
          userData.id = Math.random().toString();
        }
       this.masterService.onSubmitData(userData).subscribe({
        next:(res:Post)=>{
          console.log(res);
          this.getData();
          this.userForm.reset()
          
        }
       })
       }
    }
    
  onEdit(user:Post){
    this.userForm.patchValue(user);
    this.isOpen =true;
    this.isEditMode = true;
  

  }

  onDelete(id:any){
   

    this.masterService.onDelete(id).subscribe({
      next:()=>{
        alert("user deleted");
        this.getData();
        this.isOpen = false;
      }
    })
    
  }

  onUpdate(){
    let userData = this.userForm.value;
    this.masterService.onUpdateUser(userData.id, userData).subscribe({
      next:(val)=>{
        console.log(val);
        this.isEditMode = false;
        this.isOpen = false;
        this.userForm.reset();
        this.getData();
      }
    })
  }


  isPanelOpen(){
   if (!this.isOpen) {
    this.isOpen = true;
    this.isEditMode = false
    this.userForm.reset();
   }else{
    this.isOpen = false;
   }
  }


 

}