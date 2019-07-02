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
        MODAL_TITLE.innerHTML = OTHER_1.title;
        MODAL_INFO.innerHTML = OTHER_1.info;
        MODAL_IMG_1.src = OTHER_1.cover;
        MODAL_IMG_2.src = OTHER_1.cover_2;
        MODAL_IMG_3.src = OTHER_1.cover_3;
    });
    OTHER_MODAL_2.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = OTHER_2.title;
        MODAL_INFO.innerHTML = OTHER_2.info;
        MODAL_IMG_1.src = OTHER_2.cover;
        MODAL_IMG_2.src = OTHER_2.cover_2;
        MODAL_IMG_3.src = OTHER_2.cover_3;
    });
    OTHER_MODAL_3.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = OTHER_3.title;
        MODAL_INFO.innerHTML = OTHER_3.info;
        MODAL_IMG_1.src = OTHER_3.cover;
        MODAL_IMG_2.src = OTHER_3.cover_2;
        MODAL_IMG_3.src = OTHER_3.cover_3;
    });
    OTHER_MODAL_4.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = OTHER_4.title;
        MODAL_INFO.innerHTML = OTHER_4.info;
        MODAL_IMG_1.src = OTHER_4.cover;
        MODAL_IMG_2.src = OTHER_4.cover_2;
        MODAL_IMG_3.src = OTHER_4.cover_3;
    });
    OTHER_MODAL_5.addEventListener("click", function () {
        MODAL_TITLE.innerHTML = OTHER_5.title;
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
    cover_2: "./media/works_5-1.jpg",
    cover_3: "./media/works_5-2.jpg"
}

const WORKS_6 = {
    title:"미세먼지 마스크 디자인",
    info:"복식호흡을 응용하여 외부 전원 없이 고성능의 마스크를 이용 할 수 있도록 설계한 프로젝트입니다.",
    cover:"./media/works_6.png",
    cover_2: "./media/works_6-1.png",
    cover_3: "./media/works_6-2.png"
}

const OTHER_1 = {
    title: "남북 공동선언 1주년 판문점 취재",
    info: "남북 공동선언 1주년 기념행사 취재입니다. '우리가 가야 할 그 길' 이라는 제목으로 특집기사를 작성했습니다.",
    cover: "./media/other_1.png",
    cover_2: "",
    cover_3: ""
}

const OTHER_2 = {
    title: "mirr One UI 디자인",
    info: "독일의 개발팀 Glancr와 공동 개발한 iot S/W입니다. 한국에서 원활한 사용이 가능하게끔 한글 지원 및 사용자 친화적 UI, AI 비서, 스타일러스 캘린더 기능 등을 개발하고 있습니다.",
    cover: "./media/other_2.png",
    cover_2: "",
    cover_3: ""
}

const OTHER_3 = {
    title: "mirr.OS 한글번역 프로젝트",
    info: "Glancr의 mirr.OS를 한국 사용자들이 편하게 사용할 수 있게끔 번역 작업 및 api 수정등을 진행중입니다.",
    cover: "./media/other_3.png",
    cover_2: "",
    cover_3: ""
}

const OTHER_4 = {
    title: "May KING 수업",
    info: "비교적 비전공자들이 다가가기 어려웠던 설계와 디자인을 무료로 학생들에게 제공하는 STUDIO의 사회공헌 프로젝트 입니다. 현재 경기 꿈의학교 프로그램에 등록되어 있으며 운영과 설계 수업을 담당하여 진행중에 있습니다.",
    cover: "./media/other_4.png",
    cover_2: "",
    cover_3: ""
}

const OTHER_5 = {
    title: "STUDIO",
    info: "STUDIO는 특정한 사회 문제를 해결하는 것을 목적으로 사회적 기업을 설립하기 위해 만든 팀 입니다. 최근 4차 산업혁명이 마치 이미 예정된 일처럼 여겨지고 있는데, 4차 산업혁명이라는 새로운 흐름에 적응하지 못할 사람들을 위해 우리의 작은 힘을 보태기로 했습니다. 그렇게 우리는 상품을 판매한 수익을 바탕으로 세상의 균형을 바로잡기 위한 팀, STUDIO를 설립하게 되었습니다.",
    cover: "./media/works_5.png",
    cover_2: "",
    cover_3: ""
}

ChangeModal();