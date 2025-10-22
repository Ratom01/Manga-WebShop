import { Component } from '@angular/core';
import { User } from '../../assets/models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  user : User | null = null;

}
