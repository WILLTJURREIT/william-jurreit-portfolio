document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 80
    });
  
    new Typed("#typedText", {
      strings: [
        "clean websites.",
        "database-driven web apps.",
        "interactive digital experiences.",
        "brands that earn trust.",
        "AI-assisted marketing systems."
      ],
      typeSpeed: 55,
      backSpeed: 28,
      backDelay: 1500,
      loop: true
    });
  
    PortfolioController.init();
  });