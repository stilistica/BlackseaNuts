const navLinksAccount = document.querySelectorAll(
  ".account-nav__info-div-list a"
);

if (navLinksAccount) {
  const currentPage = window.location.href.split("/").pop();

  navLinksAccount.forEach((link) => {
    const text = link.querySelector("p");
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      text.classList.add("active-link");
    }
  });
}
