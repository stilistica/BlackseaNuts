const navLinks = document.querySelectorAll(".header-desk__three a");

if (navLinks) {
  const currentPage = window.location.href.split("/").pop();

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href"); 
    if (linkPage === currentPage) {
      link.classList.add("active-link");
    }
  });
}