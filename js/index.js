let about=document.querySelector(".section-about"),nave=document.querySelector("nav"),footerLogo=document.querySelector("#footer-ul"),menu=document.querySelector(".menu"),chef=document.querySelector(".chef");window.onscroll=function(){window.pageYOffset>=120&&(about.style.display="block"),window.pageYOffset>=380&&(menu.style.display="block"),window.pageYOffset>=880&&(chef.style.display="block"),window.pageYOffset>=1?nave.style.background="rgba(0,0,0,0.7)":nave.style.background="none"},console.log(window.outerWidth);