const MODAL_TITLE = document.querySelector(".modal_title");
const MODAL_INFO = document.querySelector(".modal_info");
const MODAL_IMG_1 = document.querySelector("#modal_img_1");
const MODAL_IMG_2 = document.querySelector("#modal_img_2");
const MODAL_IMG_3 = document.querySelector("#modal_img_3");
const MODAL_1 = document.querySelector("#works_1");
const MODAL_2 = document.querySelector("#works_2");
const MODAL_3 = document.querySelector("#works_3");
const MODAL_4 = document.querySelector("#works_4");
const MODAL_5 = document.querySelector("#works_5");
const MODAL_6 = document.querySelector("#works_6");
const OTHER_MODAL_1 = document.querySelector("#other_1");
const OTHER_MODAL_2 = document.querySelector("#other_2");
const OTHER_MODAL_3 = document.querySelector("#other_3");
const OTHER_MODAL_4 = document.querySelector("#other_4");
const OTHER_MODAL_5 = document.querySelector("#other_5");

function ChangeModal() {
    MODAL_1.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = WORKS_1.title;
        MODAL_INFO.innerHTML = WORKS_1.info;
        MODAL_IMG_1.src = WORKS_1.cover;
        MODAL_IMG_2.src = WORKS_1.cover_2;
        MODAL_IMG_3.src = WORKS_1.cover_3;
    });
    MODAL_2.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = WORKS_2.title;
        MODAL_INFO.innerHTML = WORKS_2.info;
        MODAL_IMG_1.src = WORKS_2.cover;
        MODAL_IMG_2.src = WORKS_2.cover_2;
        MODAL_IMG_3.src = WORKS_2.cover_3;
    });
    MODAL_3.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = WORKS_3.title;
        MODAL_INFO.innerHTML = WORKS_3.info;
        MODAL_IMG_1.src = WORKS_3.cover;
        MODAL_IMG_2.src = WORKS_3.cover_2;
        MODAL_IMG_3.src = WORKS_3.cover_3;
    });
    MODAL_4.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = WORKS_4.title;
        MODAL_INFO.innerHTML = WORKS_4.info;
        MODAL_IMG_1.src = WORKS_4.cover;
        MODAL_IMG_2.src = WORKS_4.cover_2;
        MODAL_IMG_3.src = WORKS_4.cover_3;
    });
    MODAL_5.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = WORKS_5.title;
        MODAL_INFO.innerHTML = WORKS_5.info;
        MODAL_IMG_1.src = WORKS_5.cover;
        MODAL_IMG_2.src = WORKS_5.cover_2;
        MODAL_IMG_3.src = WORKS_5.cover_3;
    });
    MODAL_6.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = WORKS_6.title;
        MODAL_INFO.innerHTML = WORKS_6.info;
        MODAL_IMG_1.src = WORKS_6.cover;
        MODAL_IMG_2.src = WORKS_6.cover_2;
        MODAL_IMG_3.src = WORKS_6.cover_3;
    });
    OTHER_MODAL_1.addEventListener("click", function () {
        OTHER_MODAL_TITLE.innerHTML = OTHER_1.title;
        MODAL_INFO.innerHTML = OTHER_1.info;
        MODAL_IMG_1.src = OTHER_1.cover;
        MODAL_IMG_2.src = OTHER_1.cover_2;
        MODAL_IMG_3.src = OTHER_1.cover_3;
    });
    OTHER_MODAL_2.addEventListener("click", function () {
        OTHER_MODAL_TITLE.innerHTML = OTHER_2.title;
        MODAL_INFO.innerHTML = OTHER_2.info;
        MODAL_IMG_1.src = OTHER_2.cover;
        MODAL_IMG_2.src = OTHER_2.cover_2;
        MODAL_IMG_3.src = OTHER_2.cover_3;
    });
    OTHER_MODAL_3.addEventListener("click", function () {
        OTHER_MODAL_TITLE.innerHTML = OTHER_3.title;
        MODAL_INFO.innerHTML = OTHER_3.info;
        MODAL_IMG_1.src = OTHER_3.cover;
        MODAL_IMG_2.src = OTHER_3.cover_2;
        MODAL_IMG_3.src = OTHER_3.cover_3;
    });
    OTHER_MODAL_4.addEventListener("click", function () {
        OTHER_MODAL_TITLE.innerHTML = OTHER_4.title;
        MODAL_INFO.innerHTML = OTHER_4.info;
        MODAL_IMG_1.src = OTHER_4.cover;
        MODAL_IMG_2.src = OTHER_4.cover_2;
        MODAL_IMG_3.src = OTHER_4.cover_3;
    });
    OTHER_MODAL_5.addEventListener("click", function () {
        OTHER_MODAL_TITLE.innerHTML = OTHER_5.title;
        MODAL_INFO.innerHTML = OTHER_5.info;
        MODAL_IMG_1.src = OTHER_5.cover;
        MODAL_IMG_2.src = OTHER_5.cover_2;
        MODAL_IMG_3.src = OTHER_5.cover_3;
    });
}

/*모달 내용*/

const WORKS_1= {
    title: "fromis_9's lightstick Design",
    info: "I get inspiration by fromis_9's first single album 'Fun Factory'. It means nine-side figure make one flame like Flame Torch",
    cover:"./media/works_1.png",
    cover_2: "./media/works_1-1.png",
    cover_3: "./media/works_1-2.png"
}

const WORKS_2 = {
    title: "Smartphone case for blind",
    info: "To facilitate the use of smartphones by people with visual impairments. Design to touch errors are minimized and keyboards are designed to be used upside down.",
    cover:"./media/works_2.png",
    cover_2: "./media/works_2-1.png",
    cover_3: "./media/works_2-2.png"
}

const WORKS_3 = {
    title: "Design mirr One",
    info: "mirr One, a smart mirror. Using mirr.OS, it help you manage your schedule for today's precious people every second. It also dramatically reduced unit prices, making it more accessible to consumers.",
    cover:"./media/works_3.png",
    cover_2: "./media/works_3-1.png",
    cover_3: "./media/works_3-2.png"
}

const WORKS_4 = {
    title:"Drawing mold design",
    info:"The drawing mold was designed to produce cup-shaped products. The design period was designed for about two weeks considering the thickness of the material, etc.",
    cover:"./media/works_4.png",
    cover_2: "./media/works_4-1.png",
    cover_3: "./media/works_4-2.png"
}

const WORKS_5 = {
    title:"Blanking mold design",
    info:"The mold was designed for blanking and piercing. And this project was actually produced using acrylic as MCT.",
    cover:"./media/works_5.png",
    cover_2: "./media/works_5-1.png",
    cover_3: "./media/works_5-2.png"
}

const WORKS_6 = {
    title:"Finedust mask design",
    info:"This project is designed to allow users to use high-performance masks without external power supply by applying abdominal breathing.",
    cover:"./media/works_6.png",
    cover_2: "./media/works_6-1.png",
    cover_3: "./media/works_6-2.png"
}

ChangeModal();