console.log("EEETV Tamil Website Loaded");

/* Navbar shadow on scroll */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});

/* Auto close mobile menu */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).toggle();
    }
  });
});
