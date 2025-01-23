import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MasterService } from './services/master.service';
import { Post } from './post';
import { FormsModule } from '@angular/forms';
import { UsingFormGroupComponent } from './components/using-form-group/using-form-group.component';
import { CommonModule } from '@angular/common';
import { NgMaterialComponent } from "./ng-material/ng-material.component";
import { PracticeComponent } from "./Crud/practice/practice.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'machine-test';
  




}
