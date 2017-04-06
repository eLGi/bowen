var slideslider = function slideslider(container, options) {
    var self = this;
    self.slides = container.children;
    self.parent = container.parentElement;
    self.currentSlide = self.slides[0];
    self.nextSlide = self.slides[1];
    self.dots = null;
    self.autoRunIntervalObject = null;
    self.autoRunIntervalTime = options.interval || 3000;
    //Methods
    self.init = function init() {
        self.initDots();
        self.initAutoRun();
    };
    self.initDots = function initDots() {
        var dotsContainer = document.createElement('div');
        dotsContainer.className = 'controls';
        for (let i = 0, x = self.slides.length; i < x; i++) {
            let dot = self.createDotElement(self.slides[i].id);
            dotsContainer.appendChild(dot);
        }
        self.parent.appendChild(dotsContainer);
        self.dots = dotsContainer.children;
        self.dots[0].classList.add('active');
    };
    self.initAutoRun = function initAutoRun() {
        self.autoRunIntervalObject = setInterval(function() {
            self.slideNext();
        }, 3000);
    };
    self.stopAutoRun = function stopAutoRun() {
        clearInterval(self.autoRunIntervalObject)
    }
    self.slideTo = function slideTo() {
        var clickedDot = this,
            slideNumber = clickedDot.getAttribute('data-slide-id'),
            targetSlide = self.slides[slideNumber],
            currentSlideId = self.currentSlide.getAttribute('data-slide-id'),
            targetSlideId = targetSlide.getAttribute('data-slide-id');
        if (self.currentSlide === targetSlide) {
            console.log('Can\'t slide to the same slide.');
        } else if (currentSlideId < targetSlideId) {
            for (let j = currentSlideId; j < targetSlideId; j++) {
                self.slides[j].classList.add('slided');
            }
        } else {
            for (let j = currentSlideId; j >= targetSlideId; j--) {
                self.slides[j].classList.remove('slided');
            }
        }
        self.deactivateDots();
        clickedDot.classList.add('active');
        self.currentSlide = self.slides[targetSlideId];
        let nextSlideId = targetSlideId + 1 >= self.slides.length ? 0 : Number(targetSlideId) + 1;
        self.nextSlide = self.slides[nextSlideId];
        console.log(nextSlideId, self.currentSlide, self.nextSlide);
    };
    self.slideNext = function slideNext() {
        var currensSlideId = Number(self.currentSlide.getAttribute('data-slide-id')),
            nextSlideId = Number(self.nextSlide.getAttribute('data-slide-id'));
        self.dots[currensSlideId].classList.remove('active');
        self.dots[nextSlideId].classList.add('active');
        if (nextSlideId === 0) {
            for (let i = 0, x = self.slides.length; i < x; i++) {
                self.slides[i].classList.remove('slided');
            }
            self.currentSlide = self.slides[0];
            self.nextSlide = self.slides[1];
        } else {
            self.currentSlide.classList.add('slided');
            self.currentSlide = self.nextSlide;
            let temp = nextSlideId + 1 >= self.slides.length ? 0 : nextSlideId + 1;
            self.nextSlide = self.slides[temp];
            console.log(temp);
        }
    };
    self.createDotElement = function createDotElement(slideId) {
        let dot = document.createElement('div');
        dot.className = 'dot';
        dot.setAttribute('data-slide-id', slideId);
        dot.addEventListener('click', self.slideTo);
        return dot;
    }
    self.deactivateDots = function deactivateDots() {
        for (let i = 0, x = self.dots.length; i < x; i++) {
            self.dots[i].classList.remove('active');
        }
    };
    return {
        init: self.init,
    };
};