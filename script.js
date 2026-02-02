document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // Carousel Logic
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    let currentIndex = 0;

    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevLightboxBtn = document.querySelector('.prev-lightbox');
    const nextLightboxBtn = document.querySelector('.next-lightbox');

    // Function to update lightbox content based on currentIndex
    const updateLightboxContent = (index) => {
        const img = slides[index].querySelector('img');
        lightboxImg.src = img.src;
        lightboxCaption.innerText = img.dataset.description || '';
    };

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index; // Sync index when opening
            updateLightboxContent(currentIndex);
            lightbox.classList.add('active');
            lightbox.style.display = 'flex';
        });
    });

    // Lightbox Navigation Listeners
    prevLightboxBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing lightbox
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateLightboxContent(currentIndex);
    });

    nextLightboxBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing lightbox
        currentIndex = (currentIndex + 1) % slides.length;
        updateLightboxContent(currentIndex);
    });

    const closeLightboxFunc = () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    };

    closeLightbox.addEventListener('click', closeLightboxFunc);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunc();
        }
    });

    // Detailed Form Submission Handler
    const form = document.getElementById("my-form");
    const status = document.getElementById("form-status");
    const btn = document.getElementById("submit-btn");

    async function handleSubmit(event) {
        event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

        const data = new FormData(event.target);
        btn.disabled = true; // 중복 클릭 방지
        btn.innerText = "전송 중...";

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "문의가 성공적으로 접수되었습니다! 곧 연락드리겠습니다.";
                status.style.color = "green";
                form.reset(); // 폼 초기화
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "앗! 전송 중에 문제가 발생했습니다.";
                    }
                    status.style.color = "red";
                })
            }
        }).catch(error => {
            status.innerHTML = "서버 연결에 실패했습니다. 다시 시도해주세요.";
            status.style.color = "red";
        }).finally(() => {
            btn.disabled = false;
            btn.innerText = "상담 신청하기";
        });
    }

    form.addEventListener("submit", handleSubmit);
});
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // Carousel Logic
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    let currentIndex = 0;

    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevLightboxBtn = document.querySelector('.prev-lightbox');
    const nextLightboxBtn = document.querySelector('.next-lightbox');

    // Function to update lightbox content based on currentIndex
    const updateLightboxContent = (index) => {
        const img = slides[index].querySelector('img');
        lightboxImg.src = img.src;
        lightboxCaption.innerText = img.dataset.description || '';
    };

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index; // Sync index when opening
            updateLightboxContent(currentIndex);
            lightbox.classList.add('active');
            lightbox.style.display = 'flex';
        });
    });

    // Lightbox Navigation Listeners
    prevLightboxBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing lightbox
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateLightboxContent(currentIndex);
    });

    nextLightboxBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing lightbox
        currentIndex = (currentIndex + 1) % slides.length;
        updateLightboxContent(currentIndex);
    });

    const closeLightboxFunc = () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    };

    closeLightbox.addEventListener('click', closeLightboxFunc);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunc();
        }
    });

    // Detailed Form Submission Handler
    const form = document.getElementById("my-form");
    const status = document.getElementById("form-status");
    const btn = document.getElementById("submit-btn");

    async function handleSubmit(event) {
        event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

        const data = new FormData(event.target);
        btn.disabled = true; // 중복 클릭 방지
        btn.innerText = "전송 중...";

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "문의가 성공적으로 접수되었습니다! 곧 연락드리겠습니다.";
                status.style.color = "green";
                form.reset(); // 폼 초기화
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "앗! 전송 중에 문제가 발생했습니다.";
                    }
                    status.style.color = "red";
                })
            }
        }).catch(error => {
            status.innerHTML = "서버 연결에 실패했습니다. 다시 시도해주세요.";
            status.style.color = "red";
        }).finally(() => {
            btn.disabled = false;
            btn.innerText = "상담 신청하기";
        });
    }

    form.addEventListener("submit", handleSubmit);
});
