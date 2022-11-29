const promoImg = document.querySelector('.promo__img');

const widthImg = getComputedStyle(promoImg).width;

if (parseInt(widthImg) < 180) {
    document.querySelector('.promo__header').innerHTML = `Hi, I am John,<br>
    Creative<br>Technologist`;
}