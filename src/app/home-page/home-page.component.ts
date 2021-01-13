import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinInfo } from '../CoinInfo';
import { ConfigService } from '../config.service';
import { GsapService } from '../gsap.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  coin : any;
  coin2: any;
  constructor(private data: ConfigService, private data2: ConfigService, private route: ActivatedRoute, private _gsapService: GsapService) { }

  ngOnInit(): void {
   
      //TODO: Get coin by Id params['id'] and store the result in this.post
      this.data.getBitcoinData().subscribe( data=>{
        this.coin= data;
      })
      this.data2.getEthereumData().subscribe( data2=>{
        this.coin2= data2;
      })
    
  
    

    this.fOpeningAnim();
    this.sidenavAnim();
    
  }
  public fOpeningAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom ('.display-1',"restart pause resume restart",0,10,-100);
  }
  public sidenavAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom2 ('.sidenav',0,1, -200);
  }
  
 

}

