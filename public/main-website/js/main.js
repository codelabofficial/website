(function () {
    "use strict";
  
    // ======= Sticky
    window.onscroll = function () {
      const ud_header = document.querySelector(".ud-header");
      const sticky = ud_header.offsetTop;
      const logo = document.querySelector(".navbar-brand img");
  
      if (window.pageYOffset > sticky) {
        ud_header.classList.add("sticky");
      } else {
        ud_header.classList.remove("sticky");
      }
  
      // === logo change
      if (ud_header.classList.contains("sticky")) {
        logo.src = "/public/main-website/images/logo/logo-nobk.png";
      } else {
        logo.src = "/public/main-website/images/logo/logo-withbk.png";
      }
  
      // show or hide the back-to-top button
      const backToTop = document.querySelector(".back-to-top");
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    };
  
    //===== close navbar (collapse when clicked)
    let navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      })
    );
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    });
  
    // ===== submenu
    const submenuButton = document.querySelectorAll(".nav-item-has-children");
    submenuButton.forEach((elem) => {
      elem.querySelector("a").addEventListener("click", () => {
        elem.querySelector(".ud-submenu").classList.toggle("show");
      });
    });
  
    // ===== wow js
    new WOW().init();
  
    // ====== scroll-to-top js
    function scrollTo(element, to = 0, duration = 500) {
      const start = element.scrollTop;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;
  
      const animateScroll = () => {
        currentTime += increment;
  
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
  
        element.scrollTop = val;
  
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
  
      animateScroll();
    }
  
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    document.querySelector(".back-to-top").onclick = () => {
      scrollTo(document.documentElement);
    };
  })();
  
//Get the button:
mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}