import { Component, OnInit } from '@angular/core';
declare var VANTA;
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VANTA.WAVES({
      el: "#not-found-container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x950e47,
      shininess: 150.00,
      waveHeight: 40.00,
      waveSpeed: 1.05,
      zoom: 0.91
    })
  }

}
