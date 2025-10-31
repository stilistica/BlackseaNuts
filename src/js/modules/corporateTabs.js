import { corporateTabsData } from "../arrs/corporateTabs";

const tabsCorporate = document.querySelectorAll(".corporate-tabs__list-item");
const containerCorporate = document.querySelector(".corporate-tabs__info");

if (tabsCorporate && containerCorporate) {
  const firstData = corporateTabsData[0];
  tabsCorporate[0].classList.add("active");
  containerCorporate.innerHTML = `
    <div class="corporate-tabs__info-text">
      <div class="corporate-tabs__info-text-ps">
        <p>${firstData.p1}</p>
        <p>${firstData.p2}</p>
        <p class="corporate-tabs__info-text-ps-3">${firstData.p3}</p>
        <p class="corporate-tabs__info-text-ps-4">${firstData.p4}</p>
      </div>
      <button class="corporate-tabs__info-text-btn">Написать нам</button>
    </div>
    <div class="corporate-tabs__info-img">
      <img src="${firstData.img}" alt="photo" />
    </div>
	`;
  tabsCorporate.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabsCorporate.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const data = corporateTabsData[index];
      containerCorporate.innerHTML = `
			<div class="corporate-tabs__info-text">
      <div class="corporate-tabs__info-text-ps">
        <p>${data.p1}</p>
        <p>${data.p2}</p>
        <p class="corporate-tabs__info-text-ps-3">${data.p3}</p>
        <p class="corporate-tabs__info-text-ps-4">${data.p4}</p>
      </div>
      <button class="corporate-tabs__info-text-btn">Написать нам</button>
    </div>
    <div class="corporate-tabs__info-img">
      <img src="${data.img}" alt="photo" />
    </div>
			`;
    });
  });
}
