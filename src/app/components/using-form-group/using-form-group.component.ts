import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Post } from '../../post';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

// import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-using-form-group',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,
    MatSlideToggleModule,MatTableModule, MatPaginatorModule, MatSortModule,MatInputModule,
    MatFormFieldModule
    
  ],
  providers:[MasterService],
  templateUrl: './using-form-group.component.html',
  styleUrl: './using-form-group.component.css'
})
export class UsingFormGroupComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'email','action'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  
  usersArray:Post[]=[];
  userLists:Post[] =[];
  
  isEditMode:boolean = false;
  isOpen:boolean = false;

 

_fb = inject(FormBuilder);
  
  constructor(private masterService:MasterService){}
  userForm:FormGroup = this._fb.group({
    id:[''],
    name:['', [Validators.required,  Validators.pattern(/^[a-zA-Z\s]*$/) ]],
    username:['',[Validators.required]],
    email:['',[Validators.required]],
  })


      ngOnInit(){
        
        this.getData();
      }

      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }

      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

getData(){
  this.masterService.getAllUser().subscribe({
    next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    }
  })
}

// onSubmit(){
//   console.log(this.userForm);
  
// }




    onSubmit(){
      // debugger;
      if (this.userForm.valid) {
        let userData = this.userForm.value;
        console.log(this.userForm);
        console.log(userData);
        
        if (userData.id == null) {
            
          userData.id = Date.now().toString();
        }
            this.masterService.onSubmitData(userData).subscribe({
              next:(res:Post)=>{
                console.log(res);
                this.getData();
                this.userForm.reset()
                
              }
            })
       }
       else{
        alert("form invalid")
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