document.addEventListener("DOMContentLoaded", function () {
  const mascotContainer = document.querySelector(".park3 .mascot-container");
  if (!mascotContainer) {
    console.log("마스코트 컨테이너를 찾을 수 없습니다.");
    return;
  }

  // 초기에는 마스코트를 숨깁니다
  mascotContainer.style.display = "none";

  function toggleMascotVisibility() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // 화면 중앙 기준으로 계산
    const park3Section = document.querySelector(".park3");

    if (!park3Section) {
      console.log("park3 섹션을 찾을 수 없습니다.");
      return;
    }

    const sectionTop = park3Section.offsetTop;
    const sectionBottom = sectionTop + park3Section.offsetHeight;

    console.log("스크롤 위치:", scrollPosition);
    console.log("섹션 시작:", sectionTop);
    console.log("섹션 끝:", sectionBottom);

    // 현재 화면의 중앙이 park3 섹션 내에 있을 때만 마스코트를 표시
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      mascotContainer.style.display = "flex";
      console.log("마스코트 표시");
    } else {
      mascotContainer.style.display = "none";
      console.log("마스코트 숨김");
    }
  }

  // 초기 상태 설정
  toggleMascotVisibility();

  // 스크롤 이벤트 리스너 추가
  window.addEventListener("scroll", toggleMascotVisibility);
});
