AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

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
      nextEl: ".intro_arrow-2-next",
      prevEl: ".intro_arrow-2-prev",
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

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

$(".btn-contact").click(function() {
    let contact = $("#contact").offset().top;
    $("html, body").animate({scrollTop: contact},300);
})

function scenaryResize() {
    if($(window).width() <= 1000) {
        let scenary = $(".scenary_pic").width();
        let windowWidth = $(window).width();
        let scrollLeft = (scenary - windowWidth) / 2;
        $(".scenary_pic-wrap").animate({ scrollLeft: scrollLeft });
        // console.log(scrollLeft);
    }
}
$(window).on("resize",function(){
    scenaryResize();
})
scenaryResize();


function historyResize() {
    if($(window).width() <= 1300) {
        let historyWidth = $(".history_line_inner").width();
        let windowWidth = $(window).width();
        let scrollLeft = historyWidth - windowWidth;
        $(".history_line").animate({ scrollLeft: historyWidth });
    }
}
$(window).on("resize",function(){
    historyResize();
})
historyResize();


function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        // To : "ryanlin9001@gmail.com, zhulixdesign@gmail.com, zhuli705098@gmail.com",
        To : "zhuleservice@gmail.com, zhulixdesign@gmail.com, yxtang329@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "印象好好預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>電話:" + document.getElementById("phone").value
                + "<br>Line ID:" + document.getElementById("phone").value
                + "<br>現居市區:" + document.getElementById("city").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}