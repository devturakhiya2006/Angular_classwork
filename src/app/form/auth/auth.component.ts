import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) { }
  login() {
    const loginData = {
      username: this.username,
      password: this.password,
    };
    this.http.post('https://dummyjson.com/auth/login', loginData).subscribe({
      next: (response: any) => {
        console.log("login Successfully");
        console.log("Username", this.username);
        console.log("Password", this.password);
        console.log("Api Response", response);
      },
      error: (error: any) => {
        console.log("login Failed");
        console.log(error);
        this.message = "Wrong Username or password";
      }
    });
}
}
