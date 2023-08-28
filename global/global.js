const index = () => {
    mainCalc(true);
    map();
}

const inf = () => {
    mainCalc();   
    map();
    setSteps();
}

const adv = () => {
    setSteps();
}


const mainCalc = (bool) => {
    calc();
    salesCalc();
    const headings = document.querySelectorAll(".calc_section .text_wrapper h1");
    document.querySelector(".ops_button").addEventListener("click", (evt) => {
        evt.target.querySelector("svg").style.width = 20;
        document.querySelector(".sales_button svg").style.width = 0;
        headings[0].classList.add("active");
        headings[1].classList.remove("active");
    });
    document.querySelector(".sales_button").addEventListener("click", (evt) => {
        evt.target.querySelector("svg").style.width = 20;
        document.querySelector(".ops_button svg").style.width = 0;
        headings[0].classList.remove("active");
        headings[1].classList.add("active");
    });

    if (bool) {
        document.querySelector(".ops_button").click();
    }

    const calcSwiper = new Swiper(".calcSwiper", {
        navigation: {
            nextEl: ".sales_button",
            prevEl: ".ops_button",
        },
        spaceBetween: 70,
        allowTouchMove: false
    });

    if (!bool) {
        document.querySelector(".sales_button").click();
    }
    
}

const calc = () => {
    let first = 0;
    let second = 0;
    let hours = 0;
    let employees_req_value = 0; 
    let money = 0;
    document.querySelector(".input_track").addEventListener("input", (evt) => {
        const value = evt.target.value;
        if (parseInt(value) > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (parseInt(value) < evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".ops_range_1").value = evt.target.value; 
        inputCalc(document.querySelector(".ops_range_1"));  
    });
    
    
    document.querySelector(".ops_range_1").addEventListener("input", (evt) => {
        document.querySelector(".input_track").value = evt.target.value;
        inputCalc(evt.target);
    });

    document.querySelector(".input_influ").addEventListener("input", (evt) => {
        const value = parseInt(evt.target.value);
        if (value > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (value < evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".ops_range_2").value = evt.target.value; 
        inputCalc(document.querySelector(".ops_range_2"));
        valuesSetter();
    });
    
    document.querySelector(".ops_range_2").addEventListener("input", (evt) => {
        document.querySelector(".input_influ").value = evt.target.value;
        inputCalc(evt.target);
        valuesSetter();
    });
    
    document.querySelector(".input_plat").addEventListener("input", (evt) => {
        const value = parseInt(evt.target.value);
         if (value > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (value <= evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".ops_range_3").value = evt.target.value; 
        platforms();
    });
    
    document.querySelector(".ops_range_3").addEventListener("input", (evt) => {
        document.querySelector(".input_plat").value = evt.target.value;
        platforms();
    });
    
    function platforms() {
        const element = document.querySelector(".ops_range_3");
        const value = element.value;
        const per = (value / element.max) * 100 - 5;
        element.style.background = `linear-gradient(to right, #2b7a78 0%, #2b7a78 ${per}%, #def2f1 ${per}%, #def2f1 100%)`;
        valuesSetter();
    }

    function valuesSetter() {
        let rough = 450 / (5 * document.querySelector(".ops_range_3").value);
        first = (15000 + document.querySelector(".ops_range_2").value * document.querySelector(".ops_range_3").value * 100) / 80;
        const firstMin = (15000 + document.querySelector(".ops_range_2").min * document.querySelector(".ops_range_3").min * 100) / 80;
        const firstMax = (15000 + document.querySelector(".ops_range_2").max * document.querySelector(".ops_range_3").max * 100) / 80;
        
        employees_req_value = Math.ceil(
          document.querySelector(".ops_range_2").value / rough
        );
        second = (employees_req_value * 25000) / 80;
        hours = employees_req_value * 8 * 22;
        money = (second / first) * 100;

        document.querySelector(".employees_req").innerText = employees_req_value;
        document.getElementById("calc_first_price").innerText = first.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("calc_second_price").innerText = second.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.querySelector(".more_money").innerText = +money.toFixed(2);
        document.querySelector(".hours").innerText = hours.toLocaleString("en-US");

        const per = ((first - firstMin) / (firstMax - firstMin)) * 100;
        document.querySelector(".calc_section .box.first .bottom").style.background = `linear-gradient(to top, #2b7a78 0%, #2b7a78 ${per}%, transparent ${per}%, transparent 100%)`;
    }
    valuesSetter();
}

const salesCalc = () => {
    document.querySelector(".calc_input_1").addEventListener("input", evt => {
        const value = parseInt(evt.target.value);
        if (value > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (value < evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".calc_range_1").value = evt.target.value; 
        inputCalc(document.querySelector(".calc_range_1"));
        valuesSetter();
    });
    document.querySelector(".calc_range_1").addEventListener("input", evt => {
        inputCalc(evt.target);
        document.querySelector(".calc_input_1").value = evt.target.value;
        valuesSetter();
    });

    document.querySelector(".calc_input_2").addEventListener("input", evt => {
        const value = parseInt(evt.target.value);
        if (value > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (value < evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".calc_range_2").value = evt.target.value; 
        inputCalc(document.querySelector(".calc_range_2"));
        valuesSetter();
    });
    document.querySelector(".calc_range_2").addEventListener("input", evt => {
        inputCalc(evt.target);
        document.querySelector(".calc_input_2").value = evt.target.value;
        valuesSetter();
    });


    document.querySelector(".calc_input_3").addEventListener("input", evt => {
        const value = parseInt(evt.target.value);
        if (value > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (value < evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".calc_range_3").value = evt.target.value; 
        inputCalc(document.querySelector(".calc_range_3"));
        valuesSetter();
    });
    document.querySelector(".calc_range_3").addEventListener("input", evt => {
        document.querySelector(".calc_input_3").value = evt.target.value; 
        inputCalc(evt.target);
        valuesSetter();
    });
    let timer;
    document.querySelector(".calc_input_4").addEventListener("input", evt => {
        clearTimeout(timer);
        const value = parseInt(evt.target.value);
        if (value > evt.target.max) {
            timer = setTimeout(() => {
                evt.target.value = evt.target.max;
            }, 700);
        }
        else if (value < evt.target.min) {
            timer = setTimeout(() => {
                evt.target.value = evt.target.min;
            }, 1000);
        }
        document.querySelector(".calc_range_4").value = evt.target.value; 
        inputCalc(document.querySelector(".calc_range_4"));
        valuesSetter();
    });
    document.querySelector(".calc_range_4").addEventListener("input", evt => {
        inputCalc(evt.target);
        document.querySelector(".calc_input_4").value = evt.target.value;
        valuesSetter();
    });

    function valuesSetter() {
        const value1 = document.querySelector(".calc_range_1").value;
        const value2 = document.querySelector(".calc_range_2").value;
        const value3 = document.querySelector(".calc_range_3").value;
        const value4 = document.querySelector(".calc_range_4").value;
        const with_1 = ((7.5 * value1)/1) * 5;
        const curr_1 = ((7.5 * value1)/value2) * 5;
        document.querySelector(".with_1").innerText = +with_1.toFixed(2);
        document.querySelector(".curr_1").innerText = +curr_1.toFixed(2);
        document.querySelector(".with_2").innerText = Math.round(with_1 * 4);
        document.querySelector(".curr_2").innerText = Math.round(curr_1 * 4);
        document.querySelector(".with_3").innerText = +((with_1 * 4 * value3) / 100).toFixed(2);
        document.querySelector(".curr_3").innerText = +((curr_1 * 4 * value3) / 100).toFixed(2);
        document.querySelector(".with_4").innerText = (((with_1 * 4 * value3) / 100) * value4).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.querySelector(".curr_4").innerText = (((curr_1 * 4 * value3) / 100) * value4).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.querySelector(".with_5").innerText = +(30 / ((with_1 * 4 * value3) / 100)).toFixed(2);
        document.querySelector(".curr_5").innerText = +(30 / ((curr_1 * 4 * value3) / 100)).toFixed(2);
        document.querySelector(".with_6").innerText = (((85000)/ (+((with_1 * 4 * value3) / 100).toFixed(2)) )/80).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.querySelector(".curr_6").innerText = ((75000/ (+((curr_1 * 4 * value3) / 100).toFixed(2)))/80).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    valuesSetter();
}

function inputCalc(element) {
    const value = element.value;
    const per = (value / element.max) * 100;
    element.style.background = `linear-gradient(to right, #2b7a78 0%, #2b7a78 ${per}%, #def2f1 ${per}%, #def2f1 100%)`;
}

const mapInfo = [
    {
        lang: "English",
        first: 30000,
        second: 3,
        third: 90000,
        pathID: "GB"
    },
    {
        lang: "French",
        first: 12000,
        second: 2.5,
        third: 30000,
        pathID: "FR"
    }, 
    {
        lang: "German",
        first: 15000,
        second: 1.5,
        third: 22500,
        pathID: "DE"
    },
    {
        lang: "Spanish",
        first: 13000,
        second: 3,
        third: 39000,
        pathID: "ES"
    },
    {
        lang: "Indian Languages",
        first: 25000,
        second: 2.5,
        third: 625000,
        pathID: "IN"
    }
];

const map = () => {
    document.querySelector(".map_input").addEventListener("focus", (evt) => {
      evt.target.parentElement.classList.add("focus");
      evt.target.nextElementSibling.classList.add("rotate");
      document.querySelector(".list_div").classList.add("show");
      document.querySelector(".map_content").classList.add("hide");
      setTimeout(() => {
          document.querySelector(".map_content").classList.remove("active");
      }, 200);
    });

    document.querySelector(".map_input").addEventListener("blur", (evt) => {
      evt.target.parentElement.classList.remove("focus");
      evt.target.nextElementSibling.classList.remove("rotate");
      document.querySelector(".list_div").classList.remove("show");
      if (evt.target.value.length < 1) {
        document.querySelector(".map_content").classList.remove("active");
      } else {
        document.querySelector(".list_div button.focus")?.click();
        const event = new Event('input', { bubbles: true });
        document.querySelector(".map_input").dispatchEvent(event);
        document.querySelector(".map_content").classList.add("active");
      }
    });
    
    mapInfo.forEach((info, idx) => {
        const button = document.createElement("button");
        button.textContent = info?.lang;
        if (idx === 0) {
            button.classList.add("focus");
        }
        document.querySelector(".list_div").appendChild(button);
        button.addEventListener("click", (evt) => {
            document.querySelector(".map_input").value = evt.target.innerText;
            const event = new Event('input', { bubbles: true });
            document.querySelector(".map_input").dispatchEvent(event);
            setMapInfo(idx);
            document.querySelector(".map_content").classList.add("active");
            const svg = document.getElementById('map_svg');
            const targetPath = document.getElementById(info?.pathID);
            resetColors();
            const targetBBox = targetPath.getBBox();
        
            const isLargeScreen = window.innerWidth >= 1024; // Adjust the breakpoint as needed
            const viewBoxX = isLargeScreen ? targetBBox.x - 40 : targetBBox.x;
            const viewBoxY = targetBBox.y;
            const viewBoxWidth = targetBBox.width;
            const viewBoxHeight = targetBBox.height;
        
            targetPath.setAttribute('fill', '#def2f1');
            gsap.to(svg, {
                duration: 0.5,
                attr: {
                  viewBox: `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`
                },
                ease: 'power2.out'
            });
        });
    });

    function resetColors() {
        mapInfo.forEach(info => {
            document.getElementById(info?.pathID).setAttribute('fill', 'currentColor');
        });
    }
    
    function setMap() {
        
        // Get the SVG element
        const svg = document.getElementById('map_svg');
        
        // Array to store the path IDs
        const pathIDs = mapInfo.map(info => info.pathID);
        
        // Calculate the collective bounding box that encompasses all specified paths
        const combinedBBox = pathIDs.reduce((bbox, pathID) => {
          const pathElement = document.getElementById(pathID);
          if (pathElement) {
            const pathBBox = pathElement.getBBox();
            bbox.x = Math.min(bbox.x, pathBBox.x);
            bbox.y = Math.min(bbox.y, pathBBox.y);
            bbox.width = Math.max(bbox.width, pathBBox.x + pathBBox.width);
            bbox.height = Math.max(bbox.height, pathBBox.y + pathBBox.height);
          }
          return bbox;
        }, { x: Infinity, y: Infinity, width: -Infinity, height: -Infinity });
        
        // Calculate new viewBox values
        const viewBoxX = combinedBBox.x;
        const viewBoxY = combinedBBox.y;
        const viewBoxWidth = combinedBBox.width - combinedBBox.x;
        const viewBoxHeight = combinedBBox.height - combinedBBox.y;
        
        // Set the new viewBox on the SVG
        gsap.to(svg, {
            duration: 0.5,
            attr: {
              viewBox: `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`
            },
            ease: 'power2.out'
        });
        setAllColors();
    }
    setMap();
    function setAllColors() {
        mapInfo.forEach(info => {
          const pathElement = document.getElementById(info?.pathID);
          if (pathElement) {
            pathElement.setAttribute('fill', '#def2f1');
          }
        });
    }
    
    function setMapInfo(idx) {
        document.querySelector(".map_content .main").innerText = mapInfo[idx]?.lang;
        document.querySelector(".map_content .first").innerText = mapInfo[idx]?.first;
        document.querySelector(".map_content .second").innerText = mapInfo[idx]?.second;
        document.querySelector(".map_content .third").innerText = mapInfo[idx]?.third;
    }

    let focusIndex = 0;

    document.querySelector(".map_input").addEventListener("input", (evt) => {
        const value = evt.target.value;
        focusIndex = 0;
        if (value.length > 0) {
            document.querySelector(".x_mark").classList.add("show");
            document.querySelector(".map_icon").classList.add("hide");
        } else {
            document.querySelector(".x_mark").classList.remove("show");
            document.querySelector(".map_icon").classList.remove("hide");
            setAllColors();
        }
        mapInfo.forEach((info, idx) => {
            if (info?.lang.toLocaleLowerCase().match(value.toLocaleLowerCase())) {
                document.querySelectorAll(".list_div button")[idx].classList.remove("hide");
            } else {
                document.querySelectorAll(".list_div button")[idx].classList.add("hide");
            }
            document.querySelectorAll(".list_div button")[idx].classList.remove("focus");
            document.querySelector(".list_div button:not(.hide)")?.classList.add("focus");
        });
    });
    

    document.querySelector(".map_input").addEventListener("keydown", (evt) => {
        if (evt.key === "Enter") {
            document.querySelector(".list_div button.focus")?.click();
            evt.target.blur();
        }    
         else if(evt.key === "ArrowUp") {
            if (focusIndex <= 0) {
                return;
            } else {
                document.querySelectorAll(".list_div button:not(.hide)")[focusIndex].classList.remove("focus");
                focusIndex--;
                document.querySelectorAll(".list_div button:not(.hide)")[focusIndex].classList.add("focus");
            }
        } else if(evt.key === "ArrowDown") {
            const test = (() => {
                if (!(focusIndex + 2 > document.querySelectorAll(".list_div button:not(.hide)")?.length)) {
                    document.querySelectorAll(".list_div button:not(.hide)")[focusIndex].classList.remove("focus");
                    focusIndex++;
                    document.querySelectorAll(".list_div button:not(.hide)")[focusIndex].classList.add("focus");
                }
            })();
        }
    });

    document.querySelector(".x_mark").addEventListener("click", () => {
        document.querySelector(".map_input").value = "";
        const event = new Event('input', { bubbles: true });
        document.querySelector(".map_input").dispatchEvent(event);
        document.querySelector(".map_content").classList.remove("active");
        setTimeout(() => {
            document.querySelector(".map_input").focus();
        }, 350);
    });
}

const setSteps = () => {
    const step = document.querySelector(".section_work .step");
    const gooey = document.querySelector(".section_work .step_gooey");
    const steps = document.querySelectorAll(".section_work .step");
    let width = step.clientWidth;
    let height = step.clientHeight;
    gooey.style.width = width + 'px';
    gooey.style.height = height + 'px';

    steps.forEach((step) => {
        step.addEventListener("click", (evt) => {
            let rect = evt.currentTarget.getBoundingClientRect();
            let parentRect = evt.currentTarget.parentElement.getBoundingClientRect();

            gooey.classList.add("active");
            let relativeTop = rect.top - parentRect.top;
            let relativeLeft = rect.left - parentRect.left;
            gooey.style.width = rect.width + "px";
            gooey.style.height = rect.height + "px";
            gooey.style.top = relativeTop + "px";
            gooey.style.left = relativeLeft + "px";
            setTimeout(() => {
                gooey.classList.remove("active");
            }, 200);
        });
    });

    window.addEventListener("resize", setSteps);
}



document.querySelector(".nav_icon_wrapper").addEventListener("click", (evt) => {
    document.querySelector(".mobile_nav").classList.toggle("active");
    document.querySelector(".nav_icon_wrapper").classList.toggle("active");
});

document.querySelector(".footer_input").addEventListener("focus", (evt) => {
    evt.target.parentElement.classList.add("focus");
});

document.querySelector(".footer_input").addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("focus");
});

document.querySelector(".footer_input").addEventListener("input", (evt) => {
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

const calendlySwiper = new Swiper(".calendlySwiper", {
    direction: "vertical",
    navigation: {
        nextEl: ".calendly-next",
        prevEl: ".calendly-prev",
    },
    allowTouchMove: false,
    // pagination: {
    //   el: ".calendly-pagination",
    //   clickable: true,
    // },
});


const calendlyModal = () => {
    document.querySelector(".calendy_modal").classList.add("show");
    document.getElementById("name").focus();
    document.body.style.overflow = 'hidden';
    calendlySwiper.slideTo(0);
};

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        const activeSlideIndex = calendlySwiper.activeIndex;
        if (document.querySelector(".calendy_modal").classList.contains("show") && activeSlideIndex === 0) {
            calendlySwiper.slideTo(1);
        }
    }        
});

document.querySelector(".calendy_modal .close_icon_wrapper").addEventListener("click", () => {
    document.querySelector(".calendy_modal").classList.remove("show");
    document.body.style.overflow = 'auto';
});


document.querySelector(".calendly_form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    calendlySwiper.slideNext();
});

// Check if the screen width is 1200px or above
if (window.innerWidth >= 1200) {
    const scrollListener = document.querySelector('.calendly_scroll');
    let prevScrollPos = 0;
  
    scrollListener.addEventListener('wheel', function(event) {
      const currentScrollPos = event.deltaY;
      if (currentScrollPos < prevScrollPos) {
        calendlySwiper.slideNext();
      }
      prevScrollPos = currentScrollPos;
    });
  
    const scrollListener2 = document.querySelector('.calendly_scroll_up');
    let prevScrollPos2 = 0;
  
    scrollListener2.addEventListener('wheel', function(event) {
      const currentScrollPos = event.deltaY;
  
      if (currentScrollPos < prevScrollPos) {
        calendlySwiper.slidePrev();
      }
      prevScrollPos2 = currentScrollPos;
    });
}
  
document.querySelector(".calendy_modal").addEventListener("click", () => {
    document.querySelector(".calendy_modal .close_icon_wrapper").click();
});

document.querySelector(".calendy_modal .modal_content").addEventListener("click", (evt) => {
    evt.stopPropagation();
});
  