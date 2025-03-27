// 마스코트 : 2페이지내에서 보이게
document.addEventListener("DOMContentLoaded", function () {
  const mascotContainer = document.querySelector(".park2 .mascot-container");
  if (!mascotContainer) return; // 요소가 없으면 실행 안 함

  function toggleMascotVisibility() {
    const scrollPosition = window.scrollY;
    const park2Section = document.querySelector(".park2");

    if (park2Section) {
      const sectionTop = park2Section.offsetTop;
      const sectionBottom = sectionTop + park2Section.offsetHeight;

      // 마스코트가 3페이지 범위에 있을 때만 보이도록
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        mascotContainer.style.display = "flex"; // 보이게 함
      } else {
        mascotContainer.style.display = "none"; // 숨김
      }
    }
  }

  window.addEventListener("scroll", toggleMascotVisibility); // 스크롤 이벤트 리스너 추가
  toggleMascotVisibility(); // 페이지 로딩 시 바로 실행
});
