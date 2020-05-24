export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  resetActiveTabs() {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
  }

  addTabNavEvent() {
    this.tabMenu.forEach((animalImage, index) => {
      animalImage.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }

  activeTab(index) {
    this.resetActiveTabs();
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }
}
