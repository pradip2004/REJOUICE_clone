function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function cursorAnimationPage1() {
    let page1_cursor = document.querySelector(".page1_cursor");
    let page1 = document.querySelector(".page1");

    page1.addEventListener("mousemove", (e) => {
        // page1_cursor.style.left = e.pageX + "px";
        // page1_cursor.style.top = e.pageY + "px";
        gsap.to(".page1_cursor", {
            top: e.y,
            left: e.x,
            duration: 0.5,
            opacity: 1,
            scale: 1
        })
    })
    page1.addEventListener("mouseenter", () => {
        gsap.to(".page1_cursor", {
            opacity: 1,
            scale: 1
        })
    })
    page1.addEventListener("mouseleave", () => {
        gsap.to(".page1_cursor", {
            opacity: 0,
            scale: 0
        })
    })
}
function loading() {
    let t4 = gsap.timeline();

    t4.from(".loader h3", {
        x: 40,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 0.2
    })
    t4.to(".loader h3", {
        opacity: 0,
        x: -10,
        duration: 1,
        stagger: 0.1
    })
    t4.to(".loader", {
        opacity: 0,
        display: "none"
    })
    t4.from(".page1_title .page1_heading span", {
        y: 100,
        opacity: 0,
        duration: 1,
        // delay: 1,
        stagger: 0.2
    })
}

function page2Animation() {
    let t1 = gsap.timeline({
        scrollTrigger: {
            markers: false,
            trigger: ".page2",
            scroller: ".main",
            start: "top 67%",
            end: "top 60% ",
            scrub: 2
        }
    })

    t1.from(".page2_header_left h1", {
        y: 70,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
    }, "same")
    t1.from(".page2_header_right h1", {
        y: 50,
        opacity: 0,
        duration: 2,
    }, "same")
    t1.to(".border_bottom", {
        width: "100%",
        duration: 4,
        ease: "expo.out"
    },)

    let t2 = gsap.timeline({
        scrollTrigger: {
            markers: false,
            trigger: ".page2",
            scroller: ".main",
            start: "top 50%",
            end: "top 35% ",
            scrub: 2
        }
    })

    t2.from(".page2_container h1", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
    })
}

function page3Animation() {
    let t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3",
            scroller: ".main",
            markers: false,
            start: "top 40%",
            end: "top 40%",
            scrub: 3
        }
    })

    t3.from(".page3_heading h1", {
        y: 60
    })
}

function page6Animation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1000,
            smooth: true,
            disableOnInteraction: false,
        },

    });
}

let menu = document.querySelector(".menu");
let extented_nav = document.querySelector(".extented_nav");
let close = document.querySelector(".close");
menu.addEventListener("click", ()=>{
    let etl = gsap.timeline()
    etl.to(extented_nav,{
        top: 0,
        duration: 1,
        ease: "expo.out"
    })
    etl.from(".extented_nav_part1 .extented_nav_part2", {
        y: -20,
        duration: 1,
        stagger: 0.1
    })
})
close.addEventListener('click', ()=>{
    gsap.to(extented_nav, {
        top: -500,
        duration: 1,
        ease: "expo.out"
    })
})


init();
loading();
cursorAnimationPage1();
page2Animation();
page3Animation();
page6Animation();