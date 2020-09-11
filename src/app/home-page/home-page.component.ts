import { Component, OnInit } from '@angular/core';
declare var VANTA;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VANTA.WAVES({
      el: '#vanta',
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  shininess: 150.00,
  waveHeight: 20.00,
  waveSpeed: 0.95,
  zoom: 0.65
    })
  }

}
