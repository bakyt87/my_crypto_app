import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { CoinInfo } from '../CoinInfo';
import { GsapService } from '../gsap.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  
  coins: Array<CoinInfo>=[];
  constructor(private data: ConfigService, private router: Router,private _gsapService: GsapService) { }

  ngOnInit(): void {
    this.data.getList().subscribe(data=>{
    this.coins=data;
  })
  this.sidenavAnim();
  this.marketAnim();
  }
  public marketAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom2 ('tbody',0,3, 200);
  }
  public sidenavAnim() {
    const anim = this._gsapService;
   
    anim.fFadeFrom2 ('.sidenav',0,1, -200);
  }
  rowClicked(e, id){
    this.router.navigate(['/coin-in-detail', id]);
  
  }

}
