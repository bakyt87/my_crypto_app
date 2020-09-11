import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { NgForm } from "@angular/forms";
import { CoinInfo } from '../CoinInfo';
import { Router } from '@angular/router';

declare var VANTA;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  coins: any;
  coin: any;
  currency: any;
  obj:Object;
  
  constructor(private data: ConfigService, private router: Router) { }

  ngOnInit(): void {
    
      this.coin=this.coin;
      this.currency=this.currency
      VANTA.WAVES({
        el: "#container-market",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x7a7a7a,
        shininess: 71.00,
        waveHeight: 18.50,
        waveSpeed: 0.95,
       
      })
  }
  
  selectCoinHandler(event: any){
    
    this.coin=event.target.value;
  }
  selectCurHandler(event: any){
    
    this.currency=event.target.value;
  }
  onSubmit(){
    this.data.getAPIData(this.coin, this.currency).subscribe(data=>{
    // this.coins=JSON.stringify(data);
    this.coin=data;
    this.currency=data;
    var s ="";
    var x;
    var price=0;
    for(var property in data) {
      s+=property;
      this.coin=s;
      x=data[property];
      for(var p in x){
        s+=p;
        this.currency=p;
        price=x[p];
        s+=price;      
      }
      
      this.coins=price;
  }
})
  }
  


}
