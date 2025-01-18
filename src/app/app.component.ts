import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './services/master.service';
import { Post } from './post';
import { FormsModule } from '@angular/forms';
import { UsingFormGroupComponent } from './components/using-form-group/using-form-group.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsingFormGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'machine-test';





}
