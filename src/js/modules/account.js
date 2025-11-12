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

const photoContainerContacts = document.querySelector(
  ".account-contact__info-container-forms-img"
);
if (photoContainerContacts) {
  const img = photoContainerContacts.querySelector("img");
  const uploadText = photoContainerContacts.querySelector("p");
  const fileInput = photoContainerContacts.querySelector("input[type='file']");

  uploadText.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (el) => {
    const file = el.target.files[0];
    if (file) {
      const render = new FileReader();
      render.onload = function (e) {
        img.src = e.target.result;
      };
      render.readAsDataURL(file);
    }
  });
}
