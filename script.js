const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = "ltr";

  document.querySelectorAll("[data-en][data-hi]").forEach((element) => {
    const translation = element.dataset[language];
    if (translation) element.textContent = translation;
  });

  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "हिंदी" : "English";
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Hindi" : "Switch to English"
    );
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "hi" : "en");
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// The admission enquiry form submits directly to the configured email service.
// FormSubmit may send a one-time activation email to the school inbox before
// it delivers the first enquiry. Do not prevent the form's normal submission.

setLanguage("en");
