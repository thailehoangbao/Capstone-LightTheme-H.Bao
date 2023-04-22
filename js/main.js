document.getElementById('moon').onclick = function () {
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'inline-block';

    /**
     * Banner - Dark White
     */
    document.querySelector('.banner').classList.add('dark-theme');
    document.querySelector('.banner').classList.add('white-color');
    document.querySelector('.banner').classList.remove('white-theme');
    var arrayBannerText = document.querySelectorAll('.banner .banner__left .title h1');
    for (i = 0; i < arrayBannerText.length; i++) {
        arrayBannerText[i].classList.add('white-color');
        arrayBannerText[i].classList.remove('dark-color');
    };

    document.querySelector('.banner .banner__left h2').classList.add('farm-color-moon');
    /**
    * Natural - Dark White
    */
    document.querySelector('.natural').classList.add('dark-theme');
    document.querySelector('.natural').classList.add('white-color');
    document.querySelector('.natural').classList.remove('white-theme');
    document.querySelector('.natural .natural__title h1').classList.add('white-color');
    document.querySelector('.natural .natural__title h1').classList.remove('dark-color');

    /**
     * ORGANIC - Dark White
     */
    var arrayCardBody = document.querySelectorAll('.card-body');
    var arrayCardTitle = document.querySelectorAll('.card-title');
    for (
        i = 0;
        i < arrayCardBody.length;
        i++
    ) {
        arrayCardBody[i].classList.add('dark-theme');
        arrayCardTitle[i].classList.add('white-color');
        arrayCardBody[i].classList.remove('white-theme');
        arrayCardTitle[i].classList.remove('dark-color');
    }
    /**
    * QUALITY  - Dark White
    */
    var arrayQuality = document.querySelector('.quality').classList.add('dark-theme');
    var arrayQuality = document.querySelector('.quality').classList.remove('white-theme');
    var arrayQuality_h1 = document.querySelectorAll('.quality .quality__content h1');
    var arrayQuality_span = document.querySelectorAll('.quality .quality__content span');
    for (
        i = 0;
        i < arrayQuality_h1.length;
        i++
    ) {
        arrayQuality_h1[i].classList.add('white-color');
        arrayQuality_span[i].classList.add('white-color');
        arrayQuality_h1[i].classList.remove('dark-color');
        arrayQuality_span[i].classList.remove('dark-color');
    }

    /**
     * Item  - Dark White
     */

    document.querySelector('.items').classList.add('dark-theme');
    document.querySelector('.items').classList.remove('white-theme');
    var arrayItemH3 = document.querySelectorAll('.items .items__content .col-9 h3');
    for (
        i = 0;
        i < arrayItemH3.length;
        i++
    ) {
        arrayItemH3[i].classList.add('white-color');
        arrayItemH3[i].classList.remove('dark-color');
    }

    /**
     *  GALLERY Dark - White
     */

    document.querySelector('.gallery').classList.add('dark-theme');
    document.querySelector('.gallery').classList.remove('white-theme');
    document.querySelector('.gallery .row .col-6 div h1').classList.add('white-color');
    document.querySelector('.gallery .row .col-6 div h1').classList.remove('dark-color');
    
    /**
     * Footer Dark - White
     */
    document.querySelector('.footer').classList.add('dark-theme');
    document.querySelector('.footer').classList.remove('white-theme');
    document.querySelector('.footer__content__1 h4').classList.add('white-color');
    document.querySelector('.footer__content__1 h4').classList.remove('dark-color');
    document.querySelector('.footer__content__3 h3').classList.add('white-color');
    document.querySelector('.footer__content__3 h3').classList.remove('dark-color');
    document.querySelector('.footer__content__3 form input').classList.add('white-theme');
    document.querySelector('.footer__content__3 form input').classList.add('dark-color');
    var icon = document.querySelectorAll('.footer__icon a i');
    for (i=0;i<icon.length;i++) {
        icon[i].classList.add('none-boxshadow');
        icon[i].classList.remove('display-boxshadow');
    };
};
/**
 * --------------------------------------------------------------
 */
document.getElementById('sun').onclick = function () {

    document.getElementById('sun').style.display = 'none';
    document.getElementById('moon').style.display = 'inline-block';
    /**
     * Banner - Dark White
     */
    document.querySelector('.banner').classList.add('white-theme');
    var arrayBannerText = document.querySelectorAll('.banner .banner__left .title h1');
    for (i = 0; i < arrayBannerText.length; i++) {
        arrayBannerText[i].classList.add('dark-color');
        arrayBannerText[i].classList.remove('white-color');
    };

    document.querySelector('.banner .banner__left h2').classList.add('farm-color-moon');
    /**
    * Natural - Dark White
    */
    document.querySelector('.natural').classList.add('white-theme');
    document.querySelector('.natural').classList.add('dark-color');
    document.querySelector('.natural').classList.remove('dark-theme');
    document.querySelector('.natural .natural__title h1').classList.add('dark-color');

    /**
 * ORGANIC - Dark White
 */
    var arrayCardBody = document.querySelectorAll('.card-body');
    var arrayCardTitle = document.querySelectorAll('.card-title');
    for (
        i = 0;
        i < arrayCardBody.length;
        i++
    ) {
        arrayCardBody[i].classList.add('white-theme');
        arrayCardTitle[i].classList.add('dark-color');
        arrayCardBody[i].classList.remove('dark-theme');
        arrayCardTitle[i].classList.remove('dark-color');
    }

    /**
    * QUALITY  - Dark White
    */

    var arrayQuality = document.querySelector('.quality').classList.add('white-theme');
    var arrayQuality = document.querySelector('.quality').classList.remove('dark-theme');
    var arrayQuality_h1 = document.querySelectorAll('.quality .quality__content h1');
    var arrayQuality_span = document.querySelectorAll('.quality .quality__content span');
    for (
        i = 0;
        i < arrayQuality_h1.length;
        i++
    ) {
        arrayQuality_h1[i].classList.add('dark-color');
        arrayQuality_span[i].classList.add('dark-color');
        arrayQuality_h1[i].classList.remove('white-color');
        arrayQuality_span[i].classList.remove('white-color');
    };

    /**
     * Item  - Dark White
     */

    document.querySelector('.items').classList.add('white-theme');
    document.querySelector('.items').classList.remove('dark-theme');
    var arrayItemH3 = document.querySelectorAll('.items .items__content h3');
    for (
        i = 0;
        i < arrayItemH3.length;
        i++
    ) {
        arrayItemH3[i].classList.add('dark-color');
        arrayItemH3[i].classList.remove('white-color');
    }

    /**
 *  GALLERY Dark - White
 */

    document.querySelector('.gallery').classList.add('white-theme');
    document.querySelector('.gallery').classList.remove('dark-theme');
    document.querySelector('.gallery .row .col-6 div h1').classList.add('dark-color');
    document.querySelector('.gallery .row .col-6 div h1').classList.remove('white-color');
    /**
     * Footer Dark - White
     */
    document.querySelector('.footer').classList.add('white-theme');
    document.querySelector('.footer').classList.remove('dark-theme');
    document.querySelector('.footer__content__1 h4').classList.add('dark-color');
    document.querySelector('.footer__content__1 h4').classList.remove('white-color');
    document.querySelector('.footer__content__3 h3').classList.add('dark-color');
    document.querySelector('.footer__content__3 h3').classList.remove('white-color');
    document.querySelector('.footer__content__3 form input').classList.add('grey-theme');
    document.querySelector('.footer__content__3 form input').classList.remove('white-theme');
    var icon = document.querySelectorAll('.footer__icon a i');
    for (i=0;i<icon.length;i++) {
        icon[i].classList.add('display-boxshadow');
        icon[i].classList.remove('none-boxshadow');
    };
};