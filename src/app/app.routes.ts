import { Routes } from '@angular/router';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { UsingFormGroupComponent } from './components/using-form-group/using-form-group.component';
import { NgMaterialComponent } from './ng-material/ng-material.component';
import { PracticeComponent } from './Crud/practice/practice.component';
import { LoginUsingInterceptorComponent } from './loginUsingInterceptor/login-using-interceptor/login-using-interceptor.component';
import { SignUpComponent } from './signUp/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { TestCodeComponent } from './testCode/test-code/test-code.component';
import { TestCodeLoginComponent } from './testCodeLogin/test-code-login/test-code-login.component';

export const routes: Routes = [

    {path:'',redirectTo:'login',pathMatch:'full'},
                {
                    path:'login',
                    component:LoginUsingInterceptorComponent,
                 },
                 {
                    path:'',
                    component:NavbarComponent,
                    children:[
                        {
                                        path:'formGroup',
                                        component:UsingFormGroupComponent  
                                    },
                                    {
                                        path:'ngMaterial',
                                        component:NgMaterialComponent
                                    },
                                    {
                                        path:'pactice',
                                        component:PracticeComponent
                                    },
                                    {
                                        path:'signup',
                                        component:SignUpComponent
                                    }, 
                                    {
                                        path:'dashboard',
                                        component:DashboardComponent
                                    },
                                    {
                                        path:'testCode',
                                        component:TestCodeComponent
                                    },
                                    {
                                        path:'testLogin',
                                        component:TestCodeLoginComponent
                                    }
                    ]
                }

    // {path:'navbar',component:NavbarComponent,
    //     children:[
    //         {
    //             path:'formGroup',
    //             component:UsingFormGroupComponent  
    //         },
    //         {
    //             path:'ngMaterial',
    //             component:NgMaterialComponent
    //         },
    //         {
    //             path:'pactice',
    //             component:PracticeComponent
    //         },
    //         {
    //             path:'signup',
    //             component:SignUpComponent
    //         },            
    //         {
    //             path:'loginUsingInterceptor',
    //             component:LoginUsingInterceptorComponent
    //         },
            
            
    //     ]
    // },
  
];
