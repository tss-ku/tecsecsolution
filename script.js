//Hover for Emial and Call Us button
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".js-hover-swap");

  buttons.forEach((btn) => {
    const defaultText = btn.dataset.default;
    const hoverText = btn.dataset.hover;
    const defaultColor = btn.dataset.defaultColor;
    const hoverColor = btn.dataset.hoverColor;

    btn.addEventListener("mouseenter", () => {
      btn.textContent = hoverText;
      btn.style.color = hoverColor;
    });

    btn.addEventListener("mouseleave", () => {
      btn.textContent = defaultText;
      btn.style.color = defaultColor;
    });
  });
});
// Progress bar 

let progress = 0;
let progressBar = document.getElementById("progress-bar");
let logo = document.querySelector("#loader img");

let interval = setInterval(() => {
  progress += 5;
  if (progress > 100) progress = 100;

  // Update progress bar width and text
  progressBar.style.width = progress + "%";
  progressBar.textContent = progress + "%";

  // Update logo mask (revealing bottom to top)
  // The percentage we want to reveal from bottom is equal to progress
  // So mask gradient stops are adjusted accordingly:
  let maskPercent = progress;
  let maskCSS = `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${maskPercent}%, rgba(0,0,0,0) ${maskPercent}%, rgba(0,0,0,0) 100%)`;
  logo.style.webkitMaskImage = maskCSS;
  logo.style.maskImage = maskCSS;

  if (progress === 100) {
    clearInterval(interval);
    setTimeout(() => {
      document.getElementById("loader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 500);
    }, 300);
  }
}, 30);
// burger Menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const servicesToggle = document.getElementById('mobile-services-toggle');
  const servicesMenu = document.getElementById('mobile-services-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  servicesToggle.addEventListener('click', () => {
    servicesMenu.classList.toggle('hidden');
  });
// Desktop click toggle for submenu
  const desktopBtn = document.getElementById('desktop-services-btn');
  const desktopMenu = document.getElementById('desktop-services-submenu');

  desktopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (desktopMenu.style.display === 'block') {
      desktopMenu.style.display = 'none';
    } else {
      desktopMenu.style.display = 'block';
      desktopMenu.focus();
    }
  });

  // Optional: close desktop submenu if clicked outside
  document.addEventListener('click', (e) => {
    if (!document.getElementById('desktop-services').contains(e.target)) {
      desktopMenu.style.display = 'none';
    }
  });



