const breadcrumbsContainer = document.querySelector(".breadcrumbs");

if (breadcrumbsContainer) {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  const pageNames = {
    "index.html": "Главная",
    "about.html": "О производстве",
    "corporate.html": "Оптовым и корпоративным клиентам",
    "payment.html": "Оплата и доставка",
    "articles.html": "Новости и статьи",
    "articleId.html": "Новости и статьи",
    "gallery.html": "Галерея",
    "catalog.html": "Магазин",
    // "corporate.html": "Оптовым и корпоративным клиентам",
  };

  const currentPageName = pageNames[page] || "Страница";
  let html = `
<div class="breadcrumbs__info">
<a href="index.html">Главная</a> 
<span>→</span>
<p>${currentPageName}</span>
</div>
	`;

  breadcrumbsContainer.innerHTML = html;
}
