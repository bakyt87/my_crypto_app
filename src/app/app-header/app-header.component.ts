import { Component, OnInit } from '@angular/core';
// import { VANTA } from '../modules/features/vanta.net.min.js';
declare var VANTA;

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
// effect : any
  constructor() { }

  ngOnInit(): void {
    VANTA.WAVES({
      el: '#vantajs',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,
      shininess: 150.00,
      waveHeight: 40.00,
      waveSpeed: 0.70,
      zoom: 1.75
  })
}

}
