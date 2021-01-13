import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { NgForm } from "@angular/forms";
import { CoinInfo } from '../CoinInfo';
import { Router } from '@angular/router';

import { GsapService } from '../gsap.service'

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
  
  constructor(private data: ConfigService, private router: Router, private _gsapService: GsapService) { }

  ngOnInit(): void {
    
      this.coin=this.coin;
      this.currency=this.currency
      this.fOpeningAnim();
      this.sidenavAnim();
  }
  public sidenavAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom2 ('.sidenav',0,1, -200);
  }
  public fOpeningAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom ('.col-3',"restart pause resume restart",0,2,100);
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
