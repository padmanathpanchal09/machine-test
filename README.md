# MachineTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


<div class="row">
    <div [class]="!isOpen ? 'col-12' : 'col-8'">
        <div class="card">
            <div class="card-header bg-success">
                    <div class="row">
                        <div class="col-6">
                            Employye List
                        </div>
                        <div class="col-6 text-end">
                            
                            <button  class="btn btn-primary">Create New</button>
                        </div>
                    </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <table class="table table-bordered">    
                            <thead>
                                <tr>
                                  <th>SR no</th>
                                  <th>Name</th>
                                  <th>usernamw</th>
                                  <th>email</th>
                                  <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @for (users of userLists; track  $index) {
                                    <tr>
                                      <td>{{$index}}</td> 
                                      <!-- <td>{{$index +1}}</td>  -->
                                      <td>{{users.name}}</td> 
                                      <td>{{users.username}}</td> 
                                      <td>{{users.email}}</td>
                                        <td>
                                            <!-- <button  class="btn btn-primary viewContent">View</button> -->
                                            <button  class="btn btn-success" 
                                            [style]="{'margin-right': '10px'}" >Edit</button>
                                            <button  class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="col-4">
      @if (isOpen) {
          <div class="card">
              <div class="card-header bg-success">
                  <div class="row">
                      <div class="col-6">
                          New Employee
                      </div>
                      <div class="col-6 text-end">
                          
                          <button class="btn btn-primary">Close</button>
                      </div>
                  </div>        
                </div>
              <div class="card-body">
                  <form>
                      <div class="mb-3">
                          <label for="name" class="form-label">Name:</label><br>
                          <input type="name" id="name"  placeholder="Enter Name" name="name">
                          </div>
                      <div class="mb-3">
                          <label for="username" class="form-label">username:</label><br>
                          <input type="username" id="username" placeholder="Enter username" name="username">
                          </div>
                              <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label><br>
                                <input type="email" id="email" placeholder="Enter email" name="email">
                              </div>
                    @if (isEditMode) {
                        <button  type="button" class="btn btn-warning">Update</button>
                    }@else {
                        <button  type="button" class="btn btn-primary">Submit</button>
                    }
                     
                    </form>
              </div>
          </div>
        }

--------------------------------------------------------------------------------------------------------------------------------------------------------------
<div class="row">
    <div [class]="!isOpen ? 'col-12' : 'col-8'">
        <div class="card">
            <div class="card-header bg-success">
                    <div class="row">
                        <div class="col-6">
                            Employye List
                        </div>
                        <div class="col-6 text-end">
                            
                            <button  class="btn btn-primary" (click)="isPanelOpen()">Create New</button>
                        </div>
                    </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <table class="table table-bordered">    
                            <thead>
                                <tr>
                                  <th>SR no</th>
                                  <th>Name</th>
                                  <th>usernamw</th>
                                  <th>email</th>
                                  <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @for (users of userLists; track  $index) {
                                    <tr>
                                      <td>{{$index}}</td> 
                                      <!-- <td>{{$index +1}}</td>  -->
                                      <td>{{users.name}}</td> 
                                      <td>{{users.username}}</td> 
                                      <td>{{users.email}}</td>
                                        <td>
                                            <!-- <button  class="btn btn-primary viewContent">View</button> -->
                                            <button  class="btn btn-success" 
                                            [style]="{'margin-right': '10px'}" (click)="onEdit(users)">Edit</button>
                                            <button  class="btn btn-danger" (click)="onDelete(users.id)">Delete</button>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="col-4">
      @if (isOpen) {
          <div class="card">
              <div class="card-header bg-success">
                  <div class="row">
                      <div class="col-6">
                          New Employee
                      </div>
                      <div class="col-6 text-end">
                          
                          <button class="btn btn-primary" (click)="isPanelOpen()">Close</button>
                      </div>
                  </div>        
                </div>
              <div class="card-body">
                  <form [formGroup]="userForm">
                      <div class="mb-3">
                          <label for="name" class="form-label">Name:</label><br>
                          <input type="name" id="name" formControlName="name" placeholder="Enter Name" name="name">
                          </div>
                      <div class="mb-3">
                          <label for="username" class="form-label">username:</label><br>
                          <input type="username" id="username" formControlName="username"  placeholder="Enter username" name="username">
                          </div>
                              <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label><br>
                                <input type="email" id="email" formControlName="email" placeholder="Enter email" name="email">
                              </div>
                    @if (isEditMode) {
                        <button  type="button" class="btn btn-warning" (click)="onUpdate()">Update</button>
                    }@else {
                        <button  type="button" class="btn btn-primary" (click)="OnSubmit()">Submit</button>
                    }
                     
                    </form>
              </div>
          </div>
        }
