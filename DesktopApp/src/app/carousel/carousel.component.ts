import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images: string[] = [
    `https://i.ytimg.com/vi/aAdioIs17LM/maxresdefault.jpg`,
    `https://lvjcc.org/clientuploads/Recreation/Recreation_Gym%20Rental%20Header.jpg`,
    `https://www.denverpost.com/wp-content/uploads/2017/01/zach-lavine.jpg`
  ];

  constructor() { }

  ngOnInit() {
  }

}
