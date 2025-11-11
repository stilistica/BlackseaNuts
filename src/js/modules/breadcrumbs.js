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
    "card.html": "Карточка товара",
    "register.html": "Регистрация",
    "login.html": "Вход",
    "forgotPassword.html": "Восстановление пароля",
    "basket.html": "Корзина",
    "order.html": "Личный кабинет",
    "checkout.html": "Оформление заказа",
    "checkoutUr.html": "Оформление заказа",
    "thanks.html": "Спасибо",
    "error.html": "404",
    // "corporate.html": "Оптовым и корпоративным клиентам",
    // "corporate.html": "Оптовым и корпоративным клиентам",
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

  if (page === "checkout.html" || page === "checkoutUr.html") {
    html = `
<div class="breadcrumbs__info">
<a href="index.html">Главная</a> 
<span>→</span>
<a href="basket.html">Корзина</a> 
<span>→</span>
<p>${currentPageName}</span>
</div>
	`;
  }
  breadcrumbsContainer.innerHTML = html;
}
