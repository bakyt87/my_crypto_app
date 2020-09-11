import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';
import { CoinInfo } from '../CoinInfo';
import { ActivatedRoute } from '@angular/router';
declare var VANTA;
@Component({
  selector: 'app-coin-in-detail',
  templateUrl: './coin-in-detail.component.html',
  styleUrls: ['./coin-in-detail.component.css']
})
export class CoinInDetailComponent implements OnInit {
  coin : CoinInfo;
  querySub: any;
  constructor(private data: ConfigService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get coin by Id params['id'] and store the result in this.post
      this.data.getCoin(params['id']).subscribe( data=>{
        this.coin= data;
       
      })
    })
    VANTA.WAVES({
      el: "#container-detail",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3d5913,
      shininess: 150.00,
      waveHeight: 40.00,
      waveSpeed: 1.05,
      zoom: 0.91
    })
   
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

