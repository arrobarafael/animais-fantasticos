function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
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

    tabMenu.forEach((animalImage, index) => {
      animalImage.addEventListener("click", () => activeTab(index));
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(event) {
      event.currentTarget.classList.toggle(activeClass);
      event.currentTarget.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu = 'suave'] a[href^='#']"
  );
  console.log(linksInternos);

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // const topo = section.offsetTop;
    // window.scrollTo(0, topo);
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowHalf = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;
      if (isSectionVisible) {
        console.log("animar");
        section.classList.add("ativo");
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll();
