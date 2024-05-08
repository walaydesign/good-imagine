var introSwiperSmall_1 = new Swiper(".intro_swiper-small-1", {
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 20,
})

var introSwiper_1 = new Swiper(".intro_swiper-1", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".intro_arrow-1-next",
      prevEl: ".intro_arrow-1-prev",
    },
    speed: 800,
    thumbs: {
        swiper: introSwiperSmall_1,
    },
})

var introSwiperSmall_2 = new Swiper(".intro_swiper-small-2", {
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 20,
})

var introSwiper_2 = new Swiper(".intro_swiper-2", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".intro_arrow-1-next",
      prevEl: ".intro_arrow-1-prev",
    },
    speed: 800,
    thumbs: {
        swiper: introSwiperSmall_2,
    },
})

var commonspaceSwiper = new Swiper(".commonspace_swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".commonspace_arrow-next",
      prevEl: ".commonspace_arrow-prev",
    },
    speed: 800,
})

$(".layout_pic_num").click(function() {
    $(".layout-popup").fadeIn(300);
    let popup = $(this).data("popup");
    $(popup).show();
})

$(".layout-popup_bg").click(function() {
    $(".layout-popup").fadeOut(300);
    $(".layout-popup_pic").hide();
})