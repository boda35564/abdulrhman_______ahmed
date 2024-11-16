document.addEventListener('DOMContentLoaded', function () {
    const achievementBtns = document.querySelectorAll('.achievement-btn');
    
    achievementBtns.forEach(button => {
        button.addEventListener('click', function () {
            const details = this.nextElementSibling;  // العنصر التالي هو التفاصيل
            if (details.style.display === 'block') {
                details.style.display = 'none';  // إخفاء التفاصيل عند الضغط مرة أخرى
            } else {
                details.style.display = 'block';  // إظهار التفاصيل
            }
        });
    });
});
