import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  headerPosition: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerPosition = true;
    } else {
      this.headerPosition = false;
    }
  }

  ngOnInit(): void {
  }
}
