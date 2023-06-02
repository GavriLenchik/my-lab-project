import { Component } from '@angular/core';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  constructor(//private flashMess: FlashMessagesService,
    private router: Router,
    private authService: AuthService){

  }

  name: String | undefined;
  login: String | undefined;
  email: String | undefined;
  password: String | undefined;

  userRegisterClick(){
    this.router.navigate(['/reg']);
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    };

    // if(!this.checkName(user.name)){
    //   this.flashMess.show("Введіть, будь ласка, ім'я!",{
    //     cssClass:'alert-danger',
    //     timeout:4000
    //   });
    //   return false;
    // } else if(!this.checkLogin(user.login)){
    //   this.flashMess.show("Введіть, будь ласка, логін!",{
    //     cssClass:'alert-danger',
    //     timeout:4000
    //   });
    //   return false;
    // }
    // else if(!this.checkEmail(user.email)){
    //   this.flashMess.show("Введіть, будь ласка, e-mail!",{
    //     cssClass:'alert-danger',
    //     timeout:4000
    //   });
    //   return false;
    // }
    // else if(!this.checkPass(user.password)){
    //   this.flashMess.show("Введіть, будь ласка, пароль!",{
    //     cssClass:'alert-danger',
    //     timeout:4000
    //   });
    //   return false;
    // }
    
    this.authService.registerUser(user).subscribe({next:(data:any)=>{
        if(!data.success){
          // this.flashMess.show(data.msg,{
          //   cssClass:'alert-danger',
          //   timeout:4000
          // });
          this.router.navigate(['/reg']);
        }
        else{
          // this.flashMess.show(data.msg,{
          //   cssClass:'alert-success',
          //   timeout:2000
          // });
          this.router.navigate(['/auth'])
        }
      }
        })
      return false;
    
  }

  checkName(name:any){
    if(name == undefined)
    {return false}
    else{
      return true;
    }
  }

  checkLogin(login: any){
    if(login == undefined)
    {return false}
    else{
      return true;
    }
  }

  checkEmail(email: any){
    if(email == undefined)
    {return false}
    else{
      return true;
    }
  }

  checkPass(password: any){
    if(password == undefined)
    {return false}
    else{
      return true;
    }
  }
}
