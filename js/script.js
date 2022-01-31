const clientsSlader = new Swiper(".clients__slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    900: {
      slidesPerView: 2,
      centeredSlides: true,
      // slidesOffsetBefore: 200, второй слайд делится по бокам пополам
      // slidesOffsetAfter: 200,
    },
    1700: {
      slidesPerView: 3,
      centeredSlides: true,
      slidesOffsetBefore: 300,
      slidesOffsetAfter: 300,
    },
  },
});

const newsSlader = new Swiper(".news__slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  centeredSlides: true,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    1000: {
      slidesPerView: 2,
      slidesOffsetBefore: 100,
      slidesOffsetAfter: 100,
    },
    1700: {
      slidesPerView: 2,
      centeredSlides: true,
      slidesOffsetBefore: 100,
      slidesOffsetAfter: 100,
    },
  },
});

function burger() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });
}
burger();

function accordion() {
  const accBtn = document.querySelectorAll(".acc-btn");

  for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", function () {
      this.classList.toggle("active");

      let accContent = this.nextElementSibling;
      if (accContent.style.maxHeight) {
        // надо вместе прочитать
        accContent.style.maxHeight = null;
      } else {
        accContent.style.maxHeight = `${accContent.scrollHeight}px`;
      }
    });
  }
}

accordion();

function progressBar() {
  let windowScroll = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (windowScroll / height) * 100;
  console.log(scrolled);
  let progressBar = document.querySelector(".progress-bar");
  progressBar.style.height = `${scrolled}vh`;
}

window.addEventListener("scroll", function () {
  progressBar();
});
