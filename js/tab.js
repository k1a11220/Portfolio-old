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
    title: "프로미스나인 응원봉 디자인",
    info: "프로미스나인의 첫 번째 싱글앨범 Fun Factory의 컬러와 9각형을 통해 불꽃이 모이는 성화봉을 컨셉으로 하여 디자인하였습니다.",
    cover:"./media/works_1.png",
    cover_2: "./media/works_1-1.png",
    cover_3: "./media/works_1-2.png"
}

const WORKS_2 = {
    title: "시각장애인 스마트폰 케이스",
    info: "시각장애인들의 원활한 스마트폰 사용을 위해 터치 오류를 최소화 하고 뒤집어 장착하면 키보드 사용이 가능하게끔 디자인하였습니다.",
    cover:"./media/works_2.png",
    cover_2: "./media/works_2-1.png",
    cover_3: "./media/works_2-2.png"
}

const WORKS_3 = {
    title: "mirr One 디자인",
    info: "스마트미러인 mirr One 입니다. mirr.OS를 이용하여 일분일초가 아까운 현대인들을 위해 일정관리를 도와줍니다. 또한 단가 역시 파격적으로 줄여 소비자들의 접근성을 높였습니다.",
    cover:"./media/works_3.png",
    cover_2: "./media/works_3-1.png",
    cover_3: "./media/works_3-2.png"
}

const WORKS_4 = {
    title:"드로잉금형 설계",
    info:"컵 모양의 제품을 생산하기 위해 드로잉금형을 설계하였습니다. 설계기간은 재료의 두께 크기등을 고려하여 약 2주동안 설계하였습니다.",
    cover:"./media/works_4.png",
    cover_2: "./media/works_4-1.png",
    cover_3: "./media/works_4-2.png"
}

const WORKS_5 = {
    title:"블랭킹금형 설계",
    info:"블랭킹 및 피어싱 가공을 하기위해 금형을 설계하였습니다. 첫 번째 금형설계 프로젝트로서 아크릴을 이용하여 MCT로 실제로 제작하였습니다.",
    cover:"./media/works_5.png",
    cover_2: "./media/works_5-1.png",
    cover_3: "./media/works_5-2.png"
}

const WORKS_6 = {
    title:"미세먼지 마스크 디자인",
    info:"복식호흡을 응용하여 외부 전원 없이 고성능의 마스크를 이용 할 수 있도록 설계한 프로젝트입니다.",
    cover:"./media/works_6.png",
    cover_2: "./media/works_6-1.png",
    cover_3: "./media/works_6-2.png"
}

ChangeModal();