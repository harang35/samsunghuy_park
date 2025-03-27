// 초기에 중간 이미지를 확대된 상태로 표시
window.addEventListener('DOMContentLoaded', (event) => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length >= 2) {
        // 중간 항목(인덱스 1)에 hover 효과를 시뮬레이션
        galleryItems[1].style.flex = '3';
        galleryItems[1].style.height = '450px';
        galleryItems[1].style.transform = 'translateY(-20px)';
        galleryItems[1].style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.4)';
        galleryItems[1].style.zIndex = '10';
        
        // 컨텐츠 표시
        const content = galleryItems[1].querySelector('.gallery-content');
        content.style.transform = 'translateY(0)';
        content.style.opacity = '1';
    }
});