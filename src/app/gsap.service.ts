import { Injectable } from '@angular/core';
import { gsap, scrollTrigger, TimeLine } from 'gsap/all';

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  public fFadeFrom(e, tog, opacity, duration, y){
      gsap.from(e, {scrollTrigger: {
      trigger:e,
      toggleActions: tog
      }, opacity:opacity, duration:duration, y: y})

      
    
  }
  public fFadeFrom2(e, opacity, duration, x){
    gsap.from(e, {scrollTrigger: {
    trigger:e
    }, opacity:opacity, duration:duration, x: x })

    
  
}

   
  
constructor() { }
}
