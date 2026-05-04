

const videos = document.querySelectorAll(".bg-video");
let windex = 0;

function showVideo(i) {
  videos.forEach((video, idx) => {
    video.classList.remove("active");
    video.pause();

    if (idx === i) {
      video.classList.add("active");
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  });
}

// setInterval(() => {
//   index = (index + 1) % videos.length;
//   showVideo(index);
// }, 6000);

if (videos.length > 0) {
  setInterval(() => {
    windex = (windex + 1) % videos.length;
    showVideo(windex);
  }, 6000);

  setTimeout(() => {
    showVideo(windex);
  }, 500);
}

// start first video
showVideo(windex);

// scrolled the navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// mobile view
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// form visible 
function openForm() {
    document.getElementById("enquiryForm").classList.add("active");
}

function closeForm() {
    document.getElementById("enquiryForm").classList.remove("active");
}

// counter the number
// emailjs.init({
//     publicKey: 'pXIyHvEb8y3LNoEPn',
// });


let counters = document.querySelectorAll(".count");
const counterSection = document.querySelector("#counter");

function startCounting() {
    counters.forEach(counter => {
        let target = +counter.dataset.target;
        let count = 0;

        counter.innerText = "0"; // reset before start

        let interval = setInterval(() => {
            count++;
            counter.innerText = count + "+";

            if (count === target) {
                clearInterval(interval);
            }
        }, 90);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
        }
    });
}, {
    threshold: 0.5 // section visible 50%
});

observer.observe(counterSection);


// portfolio images
function filterSelection(category){
    let items = document.querySelectorAll(".item");

    for (let i=0; i<items.length; i++){
        items[i].style.display= "none";

        if(category == "all" || items[i].classList.contains(category)){
            items[i]. style.display = "block";
        }
    }
    let buttons = document.getElementsByClassName("filter-btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

//   element.classList.add("active");
}

filterSelection("all")


// Slide the image

let images = [
    'static/images/SF-KIDS STUDY 1.jpg.jpeg',
    'static/images/TF-DINING 1.jpg.jpeg',
    'static/images/bedroom2.jpg',
    'static/images/kichen2.jpg',
    'static/images/FF - DINING 1.jpg.jpeg'
];

let currentIndex = 0

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}, 3000); // changes every 3 seconds


var track = document.getElementById('track');
var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('prev');

var index = 0;

btnNext.onclick = function() {
    var cards = document.querySelectorAll('.review-card');
    // Check if we are on mobile (less than 768px)
    var isMobile = window.innerWidth <= 768;
    
    // On mobile, scroll through all cards. On desktop, stop at last pair.
    var max = isMobile ? cards.length - 1 : cards.length - 2;
    var moveAmount = isMobile ? 100 : 54; 

    if (index < max) {
        index++;
    } else {
        index = 0;
    }
    
    track.style.transform = 'translateX(-' + (index * moveAmount) + '%)';
};

btnPrev.onclick = function() {
    var cards = document.querySelectorAll('.review-card');
    var isMobile = window.innerWidth <= 768;
    
    var max = isMobile ? cards.length - 1 : cards.length - 2;
    var moveAmount = isMobile ? 100 : 55;

    if (index > 0) {
        index--;
    } else {
        index = max;
    }
    
    track.style.transform = 'translateX(-' + (index * moveAmount) + '%)';
};

// footer year changed
document.getElementById("year").textContent = new Date().getFullYear();


// open the team card

function openModal(id) {
    document.getElementById(id).classList.add("active");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}

// emailjs



   