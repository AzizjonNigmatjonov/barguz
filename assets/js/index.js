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


catalogChangeBtns.forEach(element => {
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

// changa main image function
mainImgChangeBtn.forEach(element => {
    element.addEventListener('click', e => {
        if (e.target.id == 'mainImageBtn1') {
            mainFirstImg.classList.add('first');
            mainImgWrapper1.classList.add('active')
        } else {
            mainFirstImg.classList.remove('first');
            mainImgWrapper1.classList.remove('active');
        } 
        if (e.target.id == 'mainImageBtn2') {
            mainSecondImg.classList.add('second')
            mainImgWrapper2.classList.add('active');
        } else {
            mainSecondImg.classList.remove('second');
            mainImgWrapper2.classList.remove('active');
        }
        if (e.target.id == 'mainImageBtn3') {
            mainThirdImg.classList.add('third');
            mainImgWrapper3.classList.add('active');
        } else {
            mainThirdImg.classList.remove('third')
            mainImgWrapper3.classList.remove('active');
        }
        if (e.target.id == 'mainImageBtn4') {
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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});