// 페이지 도트 네비게이션
document.addEventListener("DOMContentLoaded", function () {
  const sections = [];
  for (let i = 1; i <= 9; i++) {
    const section = document.getElementById(`bodymain${i}`);
    if (section) {
      sections.push(section);
    }
  }

  const dots = document.querySelectorAll(".dot-navigation .dot");
  const homeButton = document.getElementById("homeButton"); // 홈 버튼 선택

  function activateDot(index) {
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  function getActiveIndex() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    let activeIndex = 0;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeIndex = index;
      }
    });

    return activeIndex;
  }

  function handleScroll() {
    const activeIndex = getActiveIndex();
    activateDot(activeIndex);
  }

  // **최초 로딩 시 실행 (자동 스크롤 제거)**
  window.addEventListener("load", () => {
    setTimeout(() => {
      handleScroll();
    }, 300);
  });

  // **스크롤 이벤트 리스너 추가**
  window.addEventListener("scroll", handleScroll);

  // **도트 클릭 시 해당 섹션으로 이동**
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          activateDot(index);
        }, 600);
      }
    });
  });

  // **홈 버튼 클릭 시 1페이지로 이동 + 도트 활성화**
  if (homeButton) {
    homeButton.addEventListener("click", function (event) {
      event.preventDefault();
      const targetElement = document.getElementById("bodymain1");

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        // ✅ 즉시 도트 활성화
        setTimeout(() => {
          activateDot(0); // 1페이지 도트 활성화
        }, 700); // 스크롤이 끝난 후 실행
      }
    });
  }

  // **URL 해시 값이 있을 때 자동 이동 방지**
  if (window.location.hash) {
    history.replaceState(null, null, " "); // URL 해시 제거
  }
});
