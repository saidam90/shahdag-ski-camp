const translations = {
  en: {
    "title-small": "winter daytime",
    "page-title": "Children's Camp",
    "welcome-text":
      "Get ready for an unforgettable winter adventure at the Shahdag Children's Ski Camp! Join us in the heart of the snow-capped mountains for an exciting and educational experience designed especially for young skiers. Our camp is the perfect opportunity for children to immerse themselves in the magic of winter for the first time and improve their skiing skills.",
    "signup-button": "Sign Up",
  },
  ru: {
    "title-small": "зимний дневной",
    "page-title": "Детский Лагерь",
    "welcome-text":
      "Приготовьтесь к незабываемому зимнему приключению в Детском горнолыжном лагере Шахдаг! Присоединяйтесь к нам в самом сердце покрытых снегом гор для захватывающего и образовательного опыта,разработанного специально для молодых лыжников. Наш лагерь - это идеальная возможность для детей впервые погрузиться в волшебство зимы и совершенствовать свои навыки в горных лыжах.",
    "signup-button": "Записаться",
  },
  az: {
    "title-small": "üşaqlar üçün",
    "page-title": "Qış düşərgəsi",
    "welcome-text":
      "Şahdağ Uşaq Xizək Düşərgəsində unudulmaz qış macərasına hazır olun! Xüsusilə gənc xizəkçilər üçün hazırlanmış maraqlı və maarifləndirici təcrübə üçün qarlı dağların qəlbində bizə qoşulun. Düşərgəmiz uşaqlar üçün ilk dəfə qışın sehrinə qərq olmaq və xizək sürmə bacarıqlarını təkmilləşdirmək üçün mükəmməl fürsətdir.",
    "signup-button": "Qeydiyyatdan keçin",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }

  // Add event listener to the language selector
  const languageSelector = document.getElementById("language-selector");
  languageSelector.addEventListener("change", () => {
    const selectedLanguage = languageSelector.value;
    translatePage(selectedLanguage);
    console.log("Switched to " + selectedLanguage);
  });
});
