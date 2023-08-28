gsap.registerPlugin(ScrollTrigger);


const mm = gsap.matchMedia();

mm.add("(min-width: 1800px)", () => {
    const boxes = gsap.timeline({ delay: 0 });
    boxes.to(".fade_box", {
        opacity: 0,
        y: -100,
        stagger: .1
    });
    
    boxes.fromTo(".fade_in_box", {
        opacity: 0,
        visibility: "hidden",
        y: -10
    }, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: .2
    });
    
    boxes.pause();
    gsap.to(".pinned_element", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".pinned_element",
            pin: true,
            pinSpacer: false,
            start: "top 65px",
            endTrigger: ".end_pin .container",
            end: "bottom center",
        }
    });
    gsap.to(".pinned_element",{
        skewX: -8,
        rotate: 2,
        x: -5,
        duration: .5,
        scrollTrigger: {
            trigger: ".benefits_section",
            start: "10% 40%",
            end: "bottom top",
            toggleActions: "play complete start reverse",
            onEnter: () => { boxes.play(); gsap.to(".fade_footer", { opacity: 0, y: 100 })},
            onEnterBack: () => boxes.play(),
            onLeave: () => boxes.reverse(),
            onLeaveBack: () => setTimeout(() => { boxes.reverse();  gsap.to(".fade_footer", { opacity: 1, y: 0 }) }, 100),
        }
    });
    
    gsap.fromTo(".pinned_element", {
        skewX: -8,
        rotate: 2,
        x: -5,
    }, {
        skewX: 0,
        rotate: 0,
        x: "-=450",
        scrollTrigger: {
            trigger: ".skew_fix",
            start: "center 40%",
            end: "bottom center",
            onEnter: () => {
                gsap.to(".pinned_element", {
                    skewX: 0,
                    rotate: 0,
                    x: "-=450",
                })
            },
            onLeaveBack: () => {
                gsap.to(".pinned_element", { 
                    skewX: -8,
                    rotate: 2,
                    x: -5, 
                    duration: .4
                })
            },
        }
    });
});

mm.add("only screen and (min-width: 1200px) and (max-width: 1800px)", () => {
    const boxes = gsap.timeline({ delay: 0 });
    boxes.to(".fade_box", {
        opacity: 0,
        y: -100,
        stagger: .1
    });
    
    boxes.fromTo(".fade_in_box", {
        opacity: 0,
        visibility: "hidden",
        y: -10
    }, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: .2
    });
    
    boxes.pause();
    gsap.to(".pinned_element", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".pinned_element",
            pin: true,
            pinSpacer: false,
            start: "top 65px",
            endTrigger: ".end_pin",
            end: "center center",
        }
    });
    gsap.to(".pinned_element",{
        skewX: -8,
        rotate: 2,
        x: -5,
        duration: .5,
        scrollTrigger: {
            trigger: ".benefits_section",
            start: "10% 40%",
            end: "bottom top",
            toggleActions: "play complete start reverse",
            onEnter: () => { boxes.play(); gsap.to(".fade_footer", { opacity: 0, y: 100 })},
            onEnterBack: () => boxes.play(),
            onLeave: () => boxes.reverse(),
            onLeaveBack: () => setTimeout(() => { boxes.reverse();  gsap.to(".fade_footer", { opacity: 1, y: 0 }) }, 100),
        }
    });
    
    gsap.fromTo(".pinned_element", {
        skewX: -8,
        rotate: 2,
        x: -5,
    }, {
        skewX: 0,
        rotate: 0,
        x: "-=450",
        scrollTrigger: {
            trigger: ".skew_fix",
            start: "center 40%",
            end: "bottom center",
            onEnter: () => {
                gsap.to(".pinned_element", {
                    skewX: 0,
                    rotate: 0,
                    x: "-=450",
                })
            },
            onLeaveBack: () => {
                gsap.to(".pinned_element", { 
                    skewX: -8,
                    rotate: 2,
                    x: -5, 
                    duration: .4
                })
            },
        }
    });
});
   
// 192481 0C396C 824FE7
gsap.to(".end_pin", {
    background: "#3aafa9",
    duration: .4,
    scrollTrigger: {
        trigger: ".end_pin",
        start: "top center",
        end: "center top",
        onEnter: () => {
            gsap.to(".end_pin", { background: "#3aafa9" });
            // gsap.to(".end_pin", { background: "#3aafa9" });
            gsap.to(".end_pin .content_wrapper", { opacity: 1 });
            gsap.to(".end_pin .pinned_element.skew", { opacity: 1 });
            gsap.to(".skew_fix", { background: "#3aafa9" });
        },
        onEnterBack: () => {
            gsap.to(".end_pin", { background: "#3aafa9" })
            gsap.to(".skew_fix", { background: "#3aafa9" });
            gsap.to(".end_pin .content_wrapper", { opacity: 1 });
            gsap.to(".end_pin .pinned_element.skew", { opacity: 1 });
        },
        onLeaveBack: () => {
            gsap.to(".skew_fix", { background: "#FBFAF2" });
            gsap.to(".end_pin", { background: "#FBFAF2" })
            gsap.to(".end_pin .content_wrapper", { opacity: 0 });
            gsap.to(".end_pin .pinned_element.skew", { opacity: 0 });
        }
    }
});

gsap.to(".benefits_section .content", {
    opacity: 1,
    y: 0,
    duration: .7,
    scrollTrigger: {
        trigger: ".benefits_section",
        start: "10% 40%",
        end: "bottom center",
        onEnter: () => {
            gsap.to(".benefits_section .content", {
                opacity: 1,
                y: 0,
                duration: .7,
            })
        },
        onEnterBack: () => {
            gsap.to(".benefits_section .content", {
                opacity: 1,
                y: 0,
                duration: .7,
            })
        },
        onLeave: () => {
            gsap.to(".benefits_section .content", {
                y: -150,
                opacity: 0,
                duration: 1
            })
        },
        onLeaveBack: () => {
            gsap.to(".benefits_section .content", {
                y: 200,
                duration: 1,
                opacity: 0,
            })
        }
    }
});

const pinnedInput = document.querySelectorAll(".pinned_input");

pinnedInput[0].addEventListener("input", (evt) => {
    const value = evt.target.value;
    const per = ((value - evt.target.min) / (evt.target.max - evt.target.min)) * 100;
    if(per > 15) {
        document.querySelector(".pinned_img").style.left = per + "%";
    }
    document.querySelector(".pinned_value").innerText = evt.target.value;
});

pinnedInput[1].addEventListener("input", (evt) => {
    const value = evt.target.value;
    const per = ((value - evt.target.min) / (evt.target.max - evt.target.min)) * 100;
    if(per > 15) {
        document.querySelectorAll(".pinned_img")[1].style.left = per + "%";
    }
    document.querySelectorAll(".pinned_value")[1].innerText = evt.target.value;
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 7000,
    breakpoints: {
        320: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        480: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        640: {
        slidesPerView: 4,
        spaceBetween: 40
        }
    }
});

document.querySelector(".main_input").addEventListener("input", (evt) => {
    if (evt.target.validity.valid) {
        evt.target.parentElement.classList.remove("error");
        evt.target.nextElementSibling.disabled = false;
    } else {
        evt.target.parentElement.classList.add("error");
        evt.target.nextElementSibling.disabled = true;
    }
    if (evt.target.value < 1) {
        evt.target.nextElementSibling.disabled = true;
    }
});

document.querySelector(".main_range").addEventListener("input", evt => {
    const element = evt.target;
    document.querySelector(".main_range_value").innerText = parseInt(element.value).toLocaleString("en-US");
    const value = element.value;
    const per = (value / element.max) * 100;
    element.style.background = `linear-gradient(to right, #824FE7 0%, #824FE7 ${per}%, #EBEBE5 ${per}%, #EBEBE5 100%)`;
});

document.querySelector(".main_input").addEventListener("focus", (evt) => {
    evt.target.parentElement.classList.add("focus");
});

document.querySelector(".main_input").addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("focus");
});

const skewBtns = document.querySelectorAll(".skew_add_btn");
skewBtns.forEach(btn => {
    btn.addEventListener("click", evt => {
        let nextAbsoluteBlock = evt.target.nextElementSibling;
        if (nextAbsoluteBlock && nextAbsoluteBlock.classList.contains("absolute_block")) {
            nextAbsoluteBlock.classList.toggle("hide");
        }
    });
});

if(navigator.platform.match('Mac') !== null) {
    document.querySelector('.vector_section').style.background = '#6554F6'; //  for Mac users
    document.querySelector('.curve svg').style.fill = '#6554F6'; 
} else {
    document.querySelector('.vector_section').style.background = '#594CFF'; // for Windows users
    document.querySelector('.curve svg').style.fill = '#594CFF'; 
}
