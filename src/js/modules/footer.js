const navLinksFooter = document.querySelectorAll(".footer__one-nav a");

if (navLinksFooter) {
  const currentPage = window.location.href.split("/").pop();

  navLinksFooter.forEach((link) => {
    const linkPage = link.getAttribute("href"); 
    if (linkPage === currentPage) {
      link.classList.add("active-link");
    }
  });
}