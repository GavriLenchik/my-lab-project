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
      // this.flashMess.show("Ви не ввели пароль!",{
      //   cssClass:'alert-danger',
      //   timeout:4000
      // })
    }
    else{

    this.authService.authUser(user).subscribe({next:(data:any)=>{
      if(!data.success){
        // this.flashMess.show(data.msg,{
        //   cssClass:'alert-danger',
        //   timeout:4000
        // });
      } else{
        // this.flashMess.show("Авторизація пройшла успішно.",{
        //   cssClass:'alert-success',
        //   timeout:4000
        // });
        
        this.authService.storeUser(data.token, data.user);
        this.router.navigate(['/']);
      }
      return false;
    }
  })
}}}
