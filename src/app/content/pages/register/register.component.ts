import { Component } from '@angular/core';
import {LoginFormComponent} from "../../components/login-components/login-form/login-form.component";
import {RegisterFormComponent} from "../../components/register-components/register-form/register-form.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
