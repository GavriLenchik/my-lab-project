import { Component } from '@angular/core';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(//private flashMess: FlashMessagesService,
    private router: Router,
    private authService: AuthService){

  }
  logoutUser(){
    this.authService.logout();
    //this.flashMess.show("Ви вийшли з облікового запису.",{
    //   cssClass:'alert-warning',
    //   timeout:4000
    // });
    this.router.navigate(['/auth']);
    return false;
  }
}
