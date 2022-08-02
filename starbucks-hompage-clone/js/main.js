const searchEl = document.querySelector(".search");
// const searchInputEl = document.querySelector('.search input');
//위 코드와 같은의미지만, searchEl에서 .search를 이미찾아두었기 때문에 활용할수있음.
const searchInputEl = searchEl.querySelector("input");

// search라는 div요소 클릭시 강제로 focus상태로 만들어주는것. 이게없으면 돋보기만 누르면 input이 포커스되지않았음
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  //   attribute=html속성지정
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

//document객체는 html의 명령을 가지고있음
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

//window객체는 브라우저창의 명령을 가지고있음. 보고있는 화면자체!
// _.throttle(함수,시간)
// _.throttle메소드는 lodash cdn에서 가져온 함수이고 300은 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는걸 방지함!
window.addEventListener(
  "scroll",
  _.throttle(function () {
    // scrollY는 스크롤의 현재위치임. console로 확인해서 사용!
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap cdn에서 제공하는 기능
      // gsap.to(요소,지속시간,옵션-객체데이터사용);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        // opacity만 설정시 눈에만 안보이고 요소는 남아있으므로
        //display의 none을 사용하여 실제로 요소도 없애는 코드!
        display: "none",
      }),
        //상단이동버튼 보이기
        gsap.to(toTopEl, 0.2, {
          x: 0, //x축으로 얼마만큼 이동하는지
        });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      }),
        //상단이동버튼 숨기기
        gsap.to(toTopEl, 0.2, {
          x: 100, //x축으로 얼마만큼 이동하는지
        });
    }
  }, 300)
);

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    //window는 화면자체
    scrollTo: 0, //0초 동안 옮겨준다는 것.
  });
});

// 메인페이지 각각의 이미지 애니메이션 주기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // 애니메이션 처리 라이브러리 gsap.to(요소,지속시간(초단위),옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7 index순서마다 이 시간의 간격으로 진행됨. index 0번은 1*0.7
    opacity: 1,
  });
});

//swiper 제어, new Swiper(선택자,옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, //5초
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
// awards swiper
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30, //사이여백을 30px로 지정
  slidesPerView: 5, //한 화면에 보이는 슬라이드 개수
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// toggle promotion
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// youtube floating setting

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소,시간,옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //y축 움직임을 지정
    repeat: -1, //무한반복설정
    yoyo: true, //한번재생된 애니메이션을 다시 역재생
    ease: Power1.easeInOut, //easeInOut함수적용
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// scrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  // scene : 특정요소를 감시하는 메소드
  //setClasstoggle : 클래스속성 제어 (삽입,삭제)
  // addTo : scrollmagic의 컨트롤러이므로 작성해야함
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, //감시하는 요소가 뷰포트의 8/10지점에 걸리면 trigger실행
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// copyright this-year 설정
const thisyear = document.querySelector(".this-year");
thisyear.textContent = new Date().getFullYear();
