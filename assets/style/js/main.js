const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");
const modeBtn = document.querySelector(".mode_switch");
const logo = document.getElementById("logo");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

//mode modal

modeBtn.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark_theme");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  if (isDarkMode) {
    modeBtn.innerHTML = `<i class="fa-solid fa-toggle-on"></i>`;
    logo.src = `assets/images/light_logo.png`;
  } else {
    modeBtn.innerHTML = `<i class="fa-solid fa-toggle-off"></i>`;
    logo.src = `assets/images/dark_logo.png`;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark_theme");
  }
});

//orientation modal

const orientationModal = document.getElementById("orientation_modal");
const closeOrientationBtn = document.getElementById("close_orientation_modal");
const portraitOpt = document.getElementById("portrait_opt");
const landscapeOpt = document.getElementById("landscape_opt");

function orientationChoice() {
  if (window.innerWidth < 1024) {
    return;
  }
  orientationModal.style.display = "flex";
}

function closeOrientationModal() {
  orientationModal.style.display = "none";
}

closeOrientationBtn.addEventListener("click", () => {
  closeOrientationModal();
});

portraitOpt.addEventListener("click", () => {
  localStorage.setItem("orientationMode", "portrait");
  document.body.className = "";
  document.body.classList.add("portrait");
  closeOrientationModal();
});

landscapeOpt.addEventListener("click", () => {
  localStorage.setItem("orientationMode", "landscape");
  document.body.className = "";
  document.body.classList.add("landscape");
  landscapeMode();
  localStorage.setItem("landscape", "true");
  closeOrientationModal();
});

//cookie modal

const cookieModal = document.getElementById("cookies_modal");
const closeCookieModal = document.getElementById("close_cookies_modal");
const acceptCookie = document.getElementById("acceptCookie");
const rejectCookie = document.getElementById("rejectCookie");

function cookieModalFunction() {
  cookieModal.style.display = "flex";
}

closeCookieModal.addEventListener("click", () => {
  cookieModal.style.display = "none";
});

acceptCookie.addEventListener("click", () => {
  cookieModal.style.display = "none";
  localStorage.setItem("cookie", "true");
});

rejectCookie.addEventListener("click", () => {
  cookieModal.style.display = "none";
  localStorage.setItem("cookie", "false");
});

//function for landscape mode
function landscapeMode() {
  const sections = document.querySelectorAll("section");
  const wrappers = document.querySelectorAll(".wrapper");
  const about = document.getElementById("about");
  const services = document.getElementById("services");
  const download = document.getElementById("download");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const testimonials = document.getElementById("testimonials");

  sections.forEach((section) => {
    section.classList.add("containWidth");
  });

  wrappers.forEach((wrapper) => {
    wrapper.classList.add("containWidth");
  });

  about.classList.add("pushPadding");
  services.classList.add("pushPadding");
  download.classList.add("pushPadding");
  projects.classList.add("pushPadding");
  contact.classList.add("pushPadding");
  testimonials.classList.add("pushPadding");
}

//calling all functions

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 1024) {
      const savedOrientation = localStorage.getItem("orientationMode");
      const ifLandscape = localStorage.getItem("landscape");

      if (ifLandscape === "true") {
        landscapeMode();
      }
      if (savedOrientation === "portrait") {
        document.body.classList.add("portrait");
      } else if (savedOrientation === "landscape") {
        document.body.classList.add("landscape");
      } else {
        orientationChoice(); // <- modal only shows on PC
      }
    }

  const savedCookie = localStorage.getItem("cookie");
  if (savedCookie === "true") {
    cookieModal.style.display = "none";
  } else if (savedCookie === "false") {
    cookieModalFunction();
  } else {
    cookieModalFunction();
  }
});

localStorage.clear()