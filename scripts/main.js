document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});
class Main {
  constructor() {
    this.topfoot = document.querySelector(".top-foot");

    this._observers = [];
    this._init();
  }
  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider(".swiper-container");
    Pace.on("done", this._paceDone.bind(this));
  }

  _paceDone() {
    this._scrollInit();
  }
  _topfootlock(el, inview) {
    if (inview) {
      this.topfoot.classList.remove("lock");
    } else {
      this.topfoot.classList.add("lock");
    }
  }
  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }
  _textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }

  _scrollInit() {
    this.observers = new ScrollObserver(".hero", this._topfootlock.bind(this), {
      once: false,
      rootMargin: "0px -45% 0px 0px",
    });
    this.observers = new ScrollObserver(
      ".swiper-container",
      this._toggleSlideAnimation.bind(this),
      { once: false }
    );

    this.observers = new ScrollObserver(
      ".text-animation",
      this._textAnimation,
      { rootMargin: "-200px 0px" }
    );
    this.observers = new ScrollObserver(
      ".title-animation",
      this._textAnimation
    );
    this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation);
  }
}
