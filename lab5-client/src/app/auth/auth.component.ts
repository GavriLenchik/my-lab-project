import { Component } from '@angular/core';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  login: String | undefined;
  password: String | undefined;

  constructor(//private flashMess: FlashMessagesService,
    private router: Router,
    private authService: AuthService){

  }

  userLoginClick(){

    const user = {
      login: this.login,
      password: this.password
    };

    if(user.password == undefined){
      alert("Ви не ввели пароль!")
    }
    else{

    this.authService.authUser(user).subscribe({next:(data:any)=>{
      if(!data.success){
        alert(data.msg)
      } else{
        alert("Авторизація пройшла успішно.");
        
        this.authService.storeUser(data.token, data.user);
        this.router.navigate(['/']);
      }
      return false;
    }
  })
}}}
