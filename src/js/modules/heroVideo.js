const playButtons = document.querySelectorAll(".hero-play");

playButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const hero = btn.closest(".hero");
    const videoContainer = hero.querySelector(".hero-video");
    const heroText = hero.querySelector(".hero-text");

    if (!videoContainer.innerHTML) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/hT4O8VI__XE?autoplay=1";
      iframe.title = "YouTube video player";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;

      videoContainer.appendChild(iframe);
    }

    videoContainer.style.display = "block";
    hero.classList.add("playing");
    heroText.style.display = "none";
  });
});
