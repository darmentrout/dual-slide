const setCarousel = id => {

    const rotateLeft = () => {
        var slides = document.querySelectorAll(`#${id} .eq-slide`);
        slides[0].classList.add('eq-shrink');
        window.setTimeout( () => {
            document.querySelector('#'+id + ' .eq-carousel').append(slides[0]);
            slides[0].classList.remove('eq-shrink');
        }, 1000);
    }

    const rotateRight = () => {
        var slides = document.querySelectorAll(`#${id} .eq-slide`);
        var holder = slides[slides.length - 1];
        holder.classList.add('eq-shrink');
        document.querySelector('#'+id + ' .eq-carousel').prepend(holder);
        window.setTimeout( () => {
            holder.classList.remove('eq-shrink');
        }, 10);
    }

    const eqBtnL = document.querySelector('#' + id + ' .eq-btn-l');
    eqBtnL.addEventListener('click', rotateLeft);

    const eqBtnR = document.querySelector('#' + id + ' .eq-btn-r');
    eqBtnR.addEventListener('click', rotateRight);

}

setCarousel('eqCarouselContainer_1');