var lastScrollTop; // This Varibale will store the top position
navbar = document.getElementById('navbar'); // Get The NavBar
window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  if(this.window.innerWidth <= 768)
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous    
    navbar.style.top='-80px';
    //set the value to the negetive of height of navbar 
  }  
  else{
    navbar.style.top='0';
  }  
  lastScrollTop = scrollTop; //New Position Stored
});


//FOr setting toggle menu
var audio = document.getElementById("audioPlayer"),
  loader = document.getElementById("preloader");
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate"),
    document
      .getElementById("visualmodetogglebuttoncontainer")
      .classList.toggle("visualmodeshow"),
    document
      .getElementById("soundtogglebuttoncontainer")
      .classList.toggle("soundmodeshow");
}
function playpause() {
  !1 == document.getElementById("switchforsound").checked
    ? audio.pause()
    : audio.play();
}


function visualmode() {
  document.body.classList.toggle("light-mode"),
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
      e.classList.toggle("invertapplied");
    });
}
window.addEventListener("load", function () {
  (loader.style.display = "none"),
    document.querySelector(".hey").classList.add("popup");
});


let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.toggle("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.toggle("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.toggle("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.remove("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.remove("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.remove("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(
    ".mobiletogglemenu .mobile-navbar-tabs-ul li"
  );
window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
  }),
    mobilenavLi.forEach((t) => {
      t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab");
    }),
    navLi.forEach((t) => {
      t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab");
    });
}),
  console.log(
    "%c Designed and Developed by VI {Vaibhav Padmani}",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
  );

//back to top button
let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function scrolltoTopfunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      "IMG" === e.target.nodeName && e.preventDefault();
    },
    !1
  );

  // For Pupil follow Animation
let Pupils = document.getElementsByClassName("footer-pupil"),
  pupilsArr = Array.from(Pupils),
  pupilStartPoint = -10,
  pupilRangeX = 20,
  pupilRangeY = 15,
  mouseXStartPoint = 0,
  mouseXEndPoint = window.innerWidth,
  currentXPosition = 0,
  fracXValue = 0,
  mouseYEndPoint = window.innerHeight,
  currentYPosition = 0,
  fracYValue = 0,
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
const mouseMove = (e) => {
    (fracXValue =
      (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange),
      (fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint);
    let t = pupilStartPoint + fracXValue * pupilRangeX,
      o = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach((e) => {
      e.style.transform = `translate(${t}px, ${o}px)`;
    });
  },
  windowResize = (e) => {
    (mouseXEndPoint = window.innerWidth),
      (mouseYEndPoint = window.innerHeight),
      (mouseXRange = mouseXEndPoint - mouseXStartPoint);
  };
window.addEventListener("mousemove", mouseMove),
  window.addEventListener("resize", windowResize);


// For animated cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

