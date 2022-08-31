AOS.init()
// Swiper js  script for slider responsiveness 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    freeMode: true,
    loop: true,
    autoplay: true,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2.1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3.1,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3.2,
            spaceBetween: 10
        },
        // 1400:{
        //     slidesPerView: 2,
        //     spaceBetween: 10
        // }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Isotope Script for filter

$(document).ready(function () {
    $(".our-product .btn").click(function (e) {

        let selector = $(e.target).attr("data-filter")

        $(".our-product .row").isotope({
            filter: selector,
            layoutMode: 'fitRows'
        })

    })
})


// Smpt js for email


let btn = document.querySelector('#submit');

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    let form = document.querySelector('.form');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;


    const body = await "<h1>client inquiry</h1>" + "Name: " + name + "<br />Email: " + email + "<br />Phone Number: " + phoneNumber + "<br />Message: " + message;

    await Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jayvaghani10@gmail.com",
        Password: "DAC33BE185C09CFD3436ABE1CE300BB1ED62",
        To: 'theuniformclub17@gmail.com',
        From: "jayvaghani10@gmail.com",
        Subject: "This is the subject",
        Body: body
    }).then(
        message => {
            alert(message)
            console.log(body);
        }

    );
}
);