// JavaScript

const barBtn = document.getElementById('barBtn');
const barList = document.getElementById('bar-list');
barBtn.addEventListener('click', e => {
    barList.style.display = 'inline-block';
})

window.addEventListener('click', e => {
    if (e.target == barList) {
        barList.style.display = 'none';
    }
});

// get main changer btn
const mainImgChangeBtn = document.querySelectorAll('.main-image__btn');
// get main first img 
const mainFirstImg = document.getElementById('soma');
const mainSecondImg = document.getElementById('eksa');
const mainThirdImg = document.getElementById('buldo');
const mainFourImg = document.getElementById('digger');

// get main image wrapper 
const mainImgWrapper1 = document.getElementById('mainImgWrapper1');
const mainImgWrapper2 = document.getElementById('mainImgWrapper2');
const mainImgWrapper3 = document.getElementById('mainImgWrapper3');
const mainImgWrapper4 = document.getElementById('mainImgWrapper4');

// get catalogue img change btn text
const catalogChangeBtns = document.querySelectorAll('.catalogue-image-text');
// cataloge wrapper image change btn
const catalogChangeBtnWrapper = document.querySelectorAll('.catalogue-image__btn-circle');

// get catalogue lists
const catalogList = document.querySelectorAll('.catalogue-list');
const catalogBuldozerList = document.getElementById('cbuldozer');
const catalogCombineList = document.getElementById('combine');
const catalogEkskavator = document.getElementById('ekskavator');
const catalogKatki = document.getElementById('katki');
const catalogPeregruz = document.getElementById('peregruz');
const catalogTools = document.getElementById('tools');

// get cataloge img changer btn wraper
const catalogImgWrapper1 = document.querySelector('.catalogue-btn-0');
const catalogImgWrapper2 = document.querySelector('.catalogue-btn-1');
const catalogImgWrapper3 = document.querySelector('.catalogue-btn-2');
const catalogImgWrapper4 = document.querySelector('.catalogue-btn-3');
const catalogImgWrapper5 = document.querySelector('.catalogue-btn-5');
const catalogImgWrapper6 = document.querySelector('.catalogue-btn-6 ');
// get navbar menu btn
const navBtn = document.getElementById('barBtn');
// get navbar list
const navList = document.querySelector('.nav-list-second');
// get nav close btn
const navCloseBtn = document.getElementById('barCloseBtn');
// open navbar
navList.style.display = 'none';
const navBarCloseImg = document.querySelector('.nav-bar__img');

navBtn.addEventListener('click', e => {
    bodyWrapper.style.display = 'block';
    navCloseBtn.style.display = 'inline-block';
    navBtn.style.display = 'none';
    navList.style.display = 'flex';
})

navCloseBtn.addEventListener('click', e => {
    navList.style.display = 'none';
    navCloseBtn.style.display = 'none';
    navBtn.style.display = 'block';
})

const mainLine = document.querySelector('.main-line')

window.addEventListener('click', e => {
    if (e.target == mainLine || e.target == bodyWrapper) {
        bodyWrapper.style.display = 'none';
        navList.style.display = 'none';
        navCloseBtn.style.display = 'none';
        navBtn.style.display = 'block';
    }
});

catalogChangeBtns.forEach(element => {
    element.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.dataset.target == 'cbuldozer') {
            if (catalogBuldozerList.id  == e.target.dataset.target) {
                catalogBuldozerList.classList.add('active')
                catalogImgWrapper3.classList.add('active');
            } else {
                catalogBuldozerList.classList.remove('active');
                catalogImgWrapper3.classList.remove('active');
            }
        } else {
            catalogBuldozerList.classList.remove('active');
            catalogImgWrapper3.classList.remove('active');
        }
        if (e.target.dataset.target == 'ekskavator'){
            if (catalogEkskavator.id  == e.target.dataset.target) {
                catalogEkskavator.classList.add('active');
                catalogImgWrapper4.classList.add('active');
            } else {
                catalogEkskavator.classList.remove('active');
                catalogImgWrapper4.classList.remove('active');
            }
        } else {
            catalogEkskavator.classList.remove('active');
            catalogImgWrapper4.classList.remove('active');
        }
        if (e.target.dataset.target == 'combine'){
            if (catalogCombineList.id  == e.target.dataset.target) {
                catalogCombineList.classList.add('active');
                catalogImgWrapper5.classList.add('active');
            } else {
                catalogCombineList.classList.remove('active');
                catalogImgWrapper5.classList.remove('active');
            }
        } else {
            catalogCombineList.classList.remove('active');
            catalogImgWrapper5.classList.remove('active');
        }
        if (e.target.dataset.target == 'katki'){
            if (catalogKatki.id  == e.target.dataset.target) {
                catalogKatki.classList.add('active');
                catalogImgWrapper6.classList.add('active');
            } else {
                catalogKatki.classList.remove('active');
                catalogImgWrapper6.classList.remove('active');
            }
        } else {
            catalogKatki.classList.remove('active');
            catalogImgWrapper6.classList.remove('active');
        }
        if (e.target.dataset.target == 'peregruz'){
            if (catalogPeregruz.id  == e.target.dataset.target) {
                catalogPeregruz.classList.add('active')
                catalogImgWrapper2.classList.add('active');
            } else {
                catalogPeregruz.classList.remove('active')
                catalogImgWrapper2.classList.remove('active');
            }
        } else {
            catalogPeregruz.classList.remove('active');
            catalogImgWrapper2.classList.remove('active');
        }
        if (e.target.dataset.target == 'tools'){
            if (catalogTools.id  == e.target.dataset.target) {
                catalogTools.classList.add('active');
                catalogImgWrapper1.classList.add('active');
            } else {
                catalogTools.classList.remove('active')
                catalogImgWrapper1.classList.remove('active');
            }
        } else {
            catalogTools.classList.remove('active');
            catalogImgWrapper1.classList.remove('active');
        }
    })
})

console.log(catalogChangeBtnWrapper);

catalogChangeBtnWrapper.forEach(element => {
    element.addEventListener('click', e => {
        console.log(e.target.id);
        if (e.target.id == 'buldozerSircle') {
            
            catalogBuldozerList.classList.add('active')
            catalogImgWrapper3.classList.add('active');
            
            
            
        } else {
            catalogBuldozerList.classList.remove('active');
            catalogImgWrapper3.classList.remove('active');
        }
        if (e.target.id == 'ekskavatorSircle'){
            
            catalogEkskavator.classList.add('active');
            catalogImgWrapper4.classList.add('active');
            
            
            
        } else {
            catalogEkskavator.classList.remove('active');
            catalogImgWrapper4.classList.remove('active');
        }
        if (e.target.id== 'combineSircle'){
            
            catalogCombineList.classList.add('active');
            catalogImgWrapper5.classList.add('active');
            
            
            
        } else {
            catalogCombineList.classList.remove('active');
            catalogImgWrapper5.classList.remove('active');
        }
        if (e.target.id == 'katkiSircle'){
            
            catalogKatki.classList.add('active');
            catalogImgWrapper6.classList.add('active');
            
            
            
        } else {
            catalogKatki.classList.remove('active');
            catalogImgWrapper6.classList.remove('active');
        }
        if (e.target.id == 'peregruzSircle'){
            
            catalogPeregruz.classList.add('active')
            catalogImgWrapper2.classList.add('active');
            
            
        } else {
            catalogPeregruz.classList.remove('active');
            catalogImgWrapper2.classList.remove('active');
        }
        if (e.target.id == 'toolsCircle'){
            
            catalogTools.classList.add('active');
            catalogImgWrapper1.classList.add('active');
            
            
            
        } else {
            catalogTools.classList.remove('active');
            catalogImgWrapper1.classList.remove('active');
        }
    })
})


// changa main image function
mainImgChangeBtn.forEach(element => {
    element.addEventListener('click', e => {
        if (e.target.id == 'mainImageBtn1' || e.target.id == 'mainImgCircle1' || e.target.id == 'mainImgWrapper1') {
            mainFirstImg.classList.add('first');
            mainImgWrapper1.classList.add('active')
        } else {
            mainFirstImg.classList.remove('first');
            mainImgWrapper1.classList.remove('active');
        } 
        if (e.target.id == 'mainImageBtn2' || e.target.id == 'mainImgCircle2' || e.target.id == 'mainImgWrapper2') {
            mainSecondImg.classList.add('second')
            mainImgWrapper2.classList.add('active');
        } else {
            mainSecondImg.classList.remove('second');
            mainImgWrapper2.classList.remove('active');
        }
        if (e.target.id == 'mainImageBtn3' || e.target.id == "mainImgCircle3" || e.target.id == 'mainImgWrapper3') {
            mainThirdImg.classList.add('third');
            mainImgWrapper3.classList.add('active');
        } else {
            mainThirdImg.classList.remove('third')
            mainImgWrapper3.classList.remove('active');
        }
        if (e.target.id == 'mainImageBtn4' || e.target.id == 'mainImgCircle4' || e.target.id == 'mainImgWrapper4') {
            mainFourImg.classList.add('four');
            mainImgWrapper4.classList.add('active');
        } else {
            mainFourImg.classList.remove('four')
            mainImgWrapper4.classList.remove('active');
        }
    })
}); 


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
    },
    speed: 600,
    lazy: true,
    parallax: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        1180: {
            slidesPerView: 3,
        },       
        960: {
            slidesPerView: 3,
        },
        930: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
        
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});

var swiper = new Swiper(".mySwiper2", {});


const catalogueSelectElement = document.querySelector('.catalogue-select');

const catalogueSelectOptionElement = document.querySelectorAll('.catalogue-select option');


catalogueSelectOptionElement.forEach(element => {
    element.addEventListener('click', e => {
        if (e.target.dataset.target == 'cbuldozer') {
            if (catalogBuldozerList.id  == e.target.dataset.target) {
                catalogBuldozerList.classList.add('active')
                catalogImgWrapper3.classList.add('active');
            } else {
                catalogBuldozerList.classList.remove('active');
                catalogImgWrapper3.classList.remove('active');
            }
        } else {
            catalogBuldozerList.classList.remove('active');
            catalogImgWrapper3.classList.remove('active');
        }
        if (e.target.dataset.target == 'ekskavator'){
            if (catalogEkskavator.id  == e.target.dataset.target) {
                catalogEkskavator.classList.add('active');
                catalogImgWrapper4.classList.add('active');
            } else {
                catalogEkskavator.classList.remove('active');
                catalogImgWrapper4.classList.remove('active');
            }
        } else {
            catalogEkskavator.classList.remove('active');
            catalogImgWrapper4.classList.remove('active');
        }
        if (e.target.dataset.target == 'combine'){
            if (catalogCombineList.id  == e.target.dataset.target) {
                catalogCombineList.classList.add('active');
                catalogImgWrapper5.classList.add('active');
            } else {
                catalogCombineList.classList.remove('active');
                catalogImgWrapper5.classList.remove('active');
            }
        } else {
            catalogCombineList.classList.remove('active');
            catalogImgWrapper5.classList.remove('active');
        }
        if (e.target.dataset.target == 'katki'){
            if (catalogKatki.id  == e.target.dataset.target) {
                catalogKatki.classList.add('active');
                catalogImgWrapper6.classList.add('active');
            } else {
                catalogKatki.classList.remove('active');
                catalogImgWrapper6.classList.remove('active');
            }
        } else {
            catalogKatki.classList.remove('active');
            catalogImgWrapper6.classList.remove('active');
        }
        if (e.target.dataset.target == 'peregruz'){
            if (catalogPeregruz.id  == e.target.dataset.target) {
                catalogPeregruz.classList.add('active')
                catalogImgWrapper2.classList.add('active');
            } else {
                catalogPeregruz.classList.remove('active')
                catalogImgWrapper2.classList.remove('active');
            }
        } else {
            catalogPeregruz.classList.remove('active');
            catalogImgWrapper2.classList.remove('active');
        }
        if (e.target.dataset.target == 'tools'){
            if (catalogTools.id  == e.target.dataset.target) {
                catalogTools.classList.add('active');
                catalogImgWrapper1.classList.add('active');
            } else {
                catalogTools.classList.remove('active')
                catalogImgWrapper1.classList.remove('active');
            }
        } else {
            catalogTools.classList.remove('active');
            catalogImgWrapper1.classList.remove('active');
        }
    })
})

AOS.init();