import { cardTabsData } from "../arrs/cardTabs.js";

const tabsCard = document.querySelectorAll(".card-tabs__list-item");
const containerCard = document.querySelector(".card-tabs__info");

if (tabsCard && containerCard) {
  const firstData = cardTabsData[0];
  tabsCard[0].classList.add("active");
  containerCard.innerHTML = `
    <div class="card-tabs__info-img">
      <img src="${firstData.img}" alt="photo" />
    </div>
    <div class="card-tabs__info-text">
      <p>${firstData.p1}</p>
      <p>${firstData.p2}</p>
      <h3>${firstData.ul1}</h3>
      <ul class="card-tabs__info-text-list">
        <li>${firstData.li1}</li>
        <li>${firstData.li2}</li>
        <li>${firstData.li3}</li>
      </ul>
      <h3>${firstData.ul2}</h3>
      <ul class="card-tabs__info-text-list">
        <li>${firstData.li4}</li>
        <li>${firstData.li5}</li>
        <li>${firstData.li6}</li>
				<li>${firstData.li7}</li>
      </ul>
    </div>
	`;
  tabsCard.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabsCard.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const data = cardTabsData[index];
      containerCard.innerHTML = `
			<div class="card-tabs__info-img">
      <img src="${data.img}" alt="photo" />
    </div>
    <div class="card-tabs__info-text">
      <p>${data.p1}</p>
      <p>${data.p2}</p>
      <h3>${data.ul1}</h3>
      <ul class="card-tabs__info-text-list">
        <li>${data.li1}</li>
        <li>${data.li2}</li>
        <li>${data.li3}</li>
      </ul>
      <h3>${data.ul2}</h3>
      <ul class="card-tabs__info-text-list">
        <li>${data.li4}</li>
        <li>${data.li5}</li>
        <li>${data.li6}</li>
				<li>${data.li7}</li>
      </ul>
    </div>
			`;
    });
  });
}
