class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            
            effect: 'fade',
            
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide:false,
            reverseDirection:false,
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}