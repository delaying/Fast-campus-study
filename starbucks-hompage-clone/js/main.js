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

//window객체는 브라우저창의 명령을 가지고있음. 보고있는 화면자체!
// _.throttle(함수,시간)
// _.throttle메소드는 lodash cdn에서 가져온 함수이고 300은 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는걸 방지함!
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
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
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
