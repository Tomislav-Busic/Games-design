const tl = gsap.timeline({defaults: { ease: "power1.out" } }); //koliko dugo želimo da se svaka animacija dogodi

tl.to(".text", { y: "0%", duration: 1, stagger: 0.35});
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", { y: "-100%", duration: 1}, "-=1"); 
tl.fromTo("nav", { opacity: 0}, { opacity: 1, duration: 1});
tl.fromTo(".big-text", { opacity: 0}, { opacity: 1, duration: 1});



var typed = new Typed(".typing", {
    strings: ["Rock paper and scissors", "Math game", "Tic Tac Toe"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});

$('.menu-btn').click(function(){
    $('.navbar .nav-links').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});