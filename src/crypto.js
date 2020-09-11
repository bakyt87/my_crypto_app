gsap.registerPlugin(ScrollTrigger);

// gsap.from('.display-1', {scrollTrigger: 
//     {
//     trigger: '.display-1',
//     toggleActions: "restart pause resume restart"  
//     }, opacity:0, duration:5, x: -30})


gsap.from('#the', {scrollTrigger: {
    trigger:'#the',
 toggleActions:   "restart pause resume restart"
}, opacity:0, duration:10, y: -100, ease: 'elastic(2, 0.5)'})
// gsap.from('.display-4', {scrollTrigger:
//     {
//     trigger:'.display-4',
//    toggleActions:   "restart pause resume restart"
// }, opacity:0, duration:10, y: -100, ease: 'elastic(2, 0.5)'})
// gsap.from('img', {opacity:0, duration:10, y: 100, ease: 'elastic(2, 0.7)', delay:1.9 })
// gsap.from('.nav-link', {opacity:0, duration:10, x: 100})
// gsap.from('td', {scrollTrigger:{
    
//     trigger:'td',
//     toggleActions: "restart pause resume restart"
    
// }, opacity:0 , duration:5, y: -50 ,  ease: 'elastic(2, 0.5)'})
// gsap.from('.about1', {scrollTrigger:{
    
//     trigger:'.about1',
//     toggleActions: "restart pause resume restart"
    
// }, opacity:0, duration:5, y: -50 ,  ease: 'elastic(2, 0.5)'})

// gsap.from('.about2', {scrollTrigger:{
    
//     trigger:'.about2',
//     toggleActions: "restart pause resume restart"
    
// }, opacity:0, duration:5, y: -50})