

// 

function overlaystart(){
   const overlay=document.querySelector("#loder-overlay");
this.setTimeout(function(){
   overlay.style.display="none"
},3000)
}

overlaystart();

function coursorhui(){
   
const mousecircle= document.querySelector(".mouse");

window.addEventListener("mousemove" , function(dets){

   const xvalue=dets.clientX;
 const yvalue=dets.pageY;
console.log(dets)
  this.setTimeout(function(){

   mousecircle.style.top=`${yvalue}px`
   mousecircle.style.left=`${xvalue}px`
  },100);
})
};

coursorhui();




function bgscroll(){
    const bg=document.querySelector('#background');

window.addEventListener("scroll",function(){
   const offset= window.pageYOffset;
//    console.log("offset"+ offset)

   console.log('offset *0.7'+offset*0.7)

 const hui = ( bg.style.backgroundPositionY =offset*0.4+"px;");
console.log(hui)

});
}

bgscroll();

 function headerscroll(){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#background",
            start: "top top",
            scrub:2
        }
     });
    
    gsap.utils.toArray(".overlay").forEach(element => {
        const depth=element.dataset.depth;
        console.log("depth"+depth)
    
       const move= -(depth*(element.offsetHeight*.7));
    
       console.log("move"+move)
       tl.to(element,{
        y:move,
        ease:"none"
       })
    });
 }

 headerscroll();

function imghover(){


   gsap.to(" #second-slide .first-left .swork",{
      scrollTrigger:{
         trigger:"#second-slide",
         start:"top 10%",
        delay:0,
        duration:2,
       
   
      },
      y:"0%",
      ease:"ExpoeaseInOut",
      stagger:5,
   })

  const mousecircle= document.querySelector(".mouse");
  const mousetext= document.querySelector("#mouse-circle h1");

   
   var  vido=document.querySelectorAll('.sir');
   var p=document.querySelector(".spera");
   vido.forEach(function(e){
      e.addEventListener("mouseenter",function(dets){
       dets.target.childNodes[3].style.display ='none';
       
       p.style.display="initial"
   mousecircle.style.background="red"
   mousecircle.style.width="200px"
   mousecircle.style.height="200px"
   mousetext.style.display="initial"
      })
      vido.forEach(function(e){
         e.addEventListener("mouseleave",function(dets){
          dets.target.childNodes[3].style.display ='initial';
   
          p.style.display="none"
          mousecircle.style.background="rgba(51, 51, 51, 0.49)"
          mousecircle.style.width="40px"
          mousecircle.style.height="40px"
          mousetext.style.display="none"
         })
   })
   })
}


gsap.to(".fourth-left .fwork",{
   scrollTrigger:{
      trigger:"#fourth",
      start:"top 60%",
     delay:0,
     duration:2,
     scrub:0.2,
   },
   y:"0%",
   ease:"power4",
   stagger:2,
})

imghover();

// var tl2= gsap.timeline()

function scrollplay(){
   
gsap.to("#scroll-slide .scrollbox",{
   scrollTrigger:{
      trigger:"#scroll-slide",
      start:"top 0%",
      pin:true,
      scrub:2,
   },
   scale:7,
},"s")

gsap.to("#scroll-slide #centerscroll .leftscroll ",{
   scrollTrigger:{
      trigger:"#scroll-slide",
      start:"top 0%",
      // pin:true,
      scrub:1,
   
   },

   x:"60%",
},"s")

gsap.to("#scroll-slide #centerscroll .rightscroll ",{
   scrollTrigger:{
      trigger:"#scroll-slide",
      start:"top 0%",
      // pin:true,
      scrub:1,
      
   },
   
   x:"-60%",
},"s")
}

scrollplay();

function motionslide(){
   gsap.to("#motion-slide .mleft",{
      scrollTrigger:{
         trigger:"#motion-slide",
         start:"top 40%",
         // pin:true,
         scrub:1,
         
      },
      
      x:"-60%",
   },"m")
   
   gsap.to("#motion-slide .mright",{
      scrollTrigger:{
         trigger:"#motion-slide",
         start:"top 40%",
         
         scrub:1,
         
      },
      
      x:"60%",
   },"m")
};

motionslide();

function spreadslide(){
   
// coursorhui.style.display="none"


gsap.to(".spread-center .creat ",{
   scrollTrigger:{
      trigger:".spread-center",
      start:"top 40%",
     delay:2,
     duration:10,
     

   },
   y:"10%",
   ease:"ExpoeaseInOut",
   stagger:0.5,
})
};

spreadslide();