const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("ativo");

if (tabMenu.length && tabContent.length) {
  function resetActiveTabs() {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
  }

  function activeTab(index) {
    console.log("ativando");
    resetActiveTabs();
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((animalImage, index) => {
    animalImage.addEventListener("click", () => activeTab(index));
  });
}
