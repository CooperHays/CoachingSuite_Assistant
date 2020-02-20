import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    const element = document.querySelector('.navbar.bg-light');
    if (window.pageYOffset > 0) {
      element.classList.add('navbar-opaque');
    } else {
      element.classList.remove('navbar-opaque');
    }
 }

}
