function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    console.log(sectionId)
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth', // Thêm hiệu ứng scroll mượt
            block: 'start'      // Đặt vị trí của phần tử ở đầu trang
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scroll-to-top');
    var isScrolling = false;

    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            requestAnimationFrame(function () {
                handleScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        scrollToTop();
    });

    function handleScroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    }

    function scrollToTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentScroll - currentScroll / 8);
        }
    }
});

var btnContact = document.getElementById('btn-contact');
btnContact.addEventListener('click', function(){
    alert("Liên hệ tôi qua số điện thoại nhé");
})

var btnHireMe = document.getElementById('btn-hire-me');
btnHireMe.addEventListener('click', function(){
    alert("Chức năng đang phát triển bạn nhé!");
})

var btnDownCV = document.getElementById('btn-down-cv');
btnDownCV.addEventListener('click', function(){
    alert("Chức năng đang phát triển bạn nhé!");
})

var btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function(){
    alert("Cảm ơn đã quan tâm!");
})


