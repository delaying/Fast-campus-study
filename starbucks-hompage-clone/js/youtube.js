// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 함수이름은 youtube라이브러리 내에 설정되어있으므로 바꾸면안됨
function onYouTubeIframeAPIReady() {
  // player는 <div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", //최초 재생할 유튜브 영상 ID
    playerVars: {
      //영상재생을 위한 여러가지 변수
      autoplay: true, //자동재생 유뮤
      loop: true, //반복재생 유무
      playlist: "An6LvWQuj_8", //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        //영상이 준비되면 실행하는것.
        event.target.mute(); //target은 실행되는 영상 mute는 음소거
      },
    },
  });
}
