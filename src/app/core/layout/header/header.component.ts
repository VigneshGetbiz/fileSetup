import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selected: any = "english";
  // form: FormGroup;
  @ViewChild('message') message!: ElementRef;

  toggleMenu = false;

  constructor(
    public navigation: NavigationService,
    public dialog: MatDialog,
    private router: Router) {
  }

  loginPage: any;
  ngOnInit(): void {
    this.loginPage = localStorage.getItem("page");
  }

  onToggle() {
    this.toggleMenu = !this.toggleMenu;
  }

  onShare() {
    if (navigator.share) {
      navigator.share({
        title: 'Share Via',
        text: 'This is the text which I will be sharing!',
        url: "http://getbiz.app"
      }).then(() => {
        console.log("Called!");
        (<HTMLElement>this.message.nativeElement).innerHTML = "Called!";
      }).catch(error => {
        console.log('Error sharing:', error);
        (<HTMLElement>this.message.nativeElement).innerHTML = "Error: " + error;
      });
    } else {
      console.error('navigator.share API not supported by the browser!');
      (<HTMLElement>this.message.nativeElement).innerHTML = "navigator.share API not supported by the browser!";
    }
  }



  async getPWADisplayMode() {

  }

  logOut() {
    localStorage.setItem("page", "1");
    this.router.navigate(['/launch-app/login-register'])
      .then(() => {
        window.location.reload();
      });
  }


  onBackPress() {

  }

}