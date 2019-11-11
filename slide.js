const FIRST_SLIDE = document.querySelector(".modal_img:first-child");
const SHOWING = "showing"

function SHOW_SLIDE() {
    const CURRENT_SLIDE = document.querySelector(".showing");
    if(CURRENT_SLIDE) {
        CURRENT_SLIDE.classList.remove(SHOWING);
        const NEXT_SLIDE = CURRENT_SLIDE.nextElementSibling;
        if(NEXT_SLIDE) {
            NEXT_SLIDE.classList.add(SHOWING);
        } else {
            FIRST_SLIDE.classList.add(SHOWING);
        }
    } else {
        FIRST_SLIDE.classList.add(SHOWING);
    }
}   

setInterval(SHOW_SLIDE, 3000);