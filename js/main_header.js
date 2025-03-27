// 헤더 네비게이션 - 공유 버튼 클릭시 목복 보여주기
document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".navigation .share");
  let shareMenu = document.getElementById("navigation_share");

  if (shareButton && shareMenu) {
    // 공유 목록을 body 맨 아래로 이동
    document.body.appendChild(shareMenu);

    // 초기에는 숨김 상태
    shareMenu.style.display = "none";

    // 공유 버튼 클릭 시 목록 표시/숨김
    shareButton.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("공유 버튼 클릭됨!"); // 디버깅 로그

      // 현재 상태 확인 후 토글
      if (
        shareMenu.style.display === "none" ||
        shareMenu.style.display === ""
      ) {
        shareMenu.style.display = "block";
      } else {
        shareMenu.style.display = "none";
      }
    });

    // 페이지의 다른 곳을 클릭하면 공유 목록 닫기
    document.addEventListener("click", function (event) {
      if (
        !shareButton.contains(event.target) &&
        !shareMenu.contains(event.target)
      ) {
        shareMenu.style.display = "none";
      }
    });
  } else {
    console.error("공유 버튼 또는 공유 목록을 찾을 수 없습니다.");
  }
});
