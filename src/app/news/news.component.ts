import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { CoinInfo } from '../CoinInfo';
declare var VANTA;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  
  coins: Array<CoinInfo>=[];
  constructor(private data: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.data.getList().subscribe(data=>{
    this.coins=data;
  })
  VANTA.WAVES({
    el: "#container-list",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x13594c,
    shininess: 150.00,
    waveHeight: 40.00,
    waveSpeed: 1.05,
    zoom: 0.65
  })
  }
  rowClicked(e, id){
    this.router.navigate(['/coin-in-detail', id]);
  
  }

}
