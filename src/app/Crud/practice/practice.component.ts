import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  isOpen:boolean = false;

  data:any[] = [];



_fb = inject(FormBuilder);
  masterService = inject(MasterService);



  
  userForm = this._fb.group({
    name:['',Validators.required],
    age:['',Validators.required],
    city:['',Validators.required]
  })

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
  }

  openPanel(){
    if (this.isOpen) {
      this.isOpen = false;
    }else{
      this.isOpen = true;
    }
  }

  getData(){

    this.masterService.getUserData().subscribe({
      next:(res:any)=>{
        this.data = res;
        // console.log(this.data);
        
      }
    })

  }
  
  submitData(){
    const user = this.userForm.value
    this.masterService.onDataSubmit(user).subscribe({
      next:(val)=>{
        this.getData();
        console.log(val);
        this.isOpen = false;
        this.userForm.reset();
        
      }
    })
  };

  onDelete(id:any){
    
    this.masterService.deleteData(id).subscribe({
      next:()=>{
        alert("user deleted!!!");
        this.getData();
      }
    });
  }

  onEdit(user:any){

    this.userForm.patchValue(user);
    this.isOpen = true;
  }

}



