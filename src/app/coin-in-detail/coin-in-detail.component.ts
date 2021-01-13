import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';
import { CoinInfo } from '../CoinInfo';
import { ActivatedRoute } from '@angular/router';
import { GsapService } from '../gsap.service'
@Component({
  selector: 'app-coin-in-detail',
  templateUrl: './coin-in-detail.component.html',
  styleUrls: ['./coin-in-detail.component.css']
})
export class CoinInDetailComponent implements OnInit {
  coin : CoinInfo;
  querySub: any;
  constructor(private data: ConfigService,  private route: ActivatedRoute,private _gsapService: GsapService) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get coin by Id params['id'] and store the result in this.post
      this.data.getCoin(params['id']).subscribe( data=>{
        this.coin= data;
       
      })
    })
    this.sidenavAnim();
    this.fOpeningAnim();
  }
  public fOpeningAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom ('.col',"restart pause resume restart",0,2,100);
  }
  public sidenavAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom2 ('.sidenav',0,1, -200);
  }
  selectCoinHandler(event: any){
    
    this.coin=event.target.value;
  }
  selectCurHandler(event: any){
    
    this.coin.cad=event.target.value;
  
  }
  onSubmit(){
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get coin by Id params['id'] and store the result in this.post
      this.data.getCoin(params['id']).subscribe( data=>{
        this.coin= data;
        
  })
    })
  }
    

}

