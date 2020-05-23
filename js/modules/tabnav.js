export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  tabContent[0].classList.add("ativo");

  function resetActiveTabs() {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
  }

  function activeTab(index) {
    resetActiveTabs();
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((animalImage, index) => {
      animalImage.addEventListener("click", () => activeTab(index));
    });
  }
}
