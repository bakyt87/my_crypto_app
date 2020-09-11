import { Injectable } from '@angular/core';
import { gsap, scrollTrigger, TimeLine } from 'gsap/all';

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  public fFadeFrom(e, tog, opacity, duration, y, ease){
      gsap.from(e, {scrollTrigger: {
      trigger:e,
      toggleActions: tog
      }, opacity:opacity, duration:duration, y: y, ease: ease})
      
    
  }
 
constructor() { }
}
