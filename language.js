const translations = {
  en: {
    section1: "Program",
    section2: "Prices",
    section3: "For information",
    section4: "Contact us",
    "title-small": "winter daytime",
    "page-title": "Kids Camp",
    "welcome-text":
      "Get ready for an unforgettable winter adventure at the Shahdag Children's Ski Camp! Join us in the heart of the snow-capped mountains for an exciting and educational experience designed especially for young skiers. Our camp is the perfect opportunity for children to immerse themselves in the magic of winter for the first time and improve their skiing skills.",
    "signup-button": "Sign Up",
    program: "Program",
    "kids-registration": "9:00 - 9:45 - Uşaqların düşərgəyə qeydiyyatı",
    "ski-schools": "Zirve Ski School / Shahdag Ski School",
    preparation:
      "Preparation for the ski classes and familiarization with the camp rules",
    prices: "Qiymətlər",
    "half-day": "Half day: 120 ₼ (10:00 - 14:00)",
    "full-day": "Full day: 185 ₼ (10:00 - 16:00)",
    "instructor-class": "",
  },
  ru: {
    section1: "Программа",
    section2: "Цены",
    section3: "Для информации",
    section4: "Связь с нами",
    "title-small": "зимний дневной",
    "page-title": "Детский Лагерь",
    "welcome-text":
      "Приготовьтесь к незабываемому зимнему приключению в Детском горнолыжном лагере Шахдаг! Присоединяйтесь к нашему детскому лагерю, расположенному в самом сердце покрытых снегом гор. Наш лагерь - это идеальная возможность для детей впервые погрузиться в волшебство зимы и совершенствовать свои навыки в горных лыжах.",
    "signup-button": "Записаться",
    program: "Программа",
    "kids-registration": "9:00 - 9:45 - Запись детей в лагерь",
    "ski-schools": "Лыжная школа Zirve / Лыжная школа Shahdag",
    preparation: "Подготовка к занятию и ознакомление с правилами лагеря",
    prices: "Цены",
    "half-day": "Пол дня: 120 ₼ (10:00 - 14:00)",
    "full-day": "Полный день: 185 ₼ (10:00 - 16:00)",
  },
  az: {
    section1: "Proqram",
    section2: "Qiymətlər",
    section3: "Məlumat üçün",
    section4: "Bizimlə əlaqə",
    "title-small": "Uşaqlar üçün",
    "page-title": "Qış düşərgəsi",
    "welcome-text":
      "Şahdağ Xizək Düşərgəsində uşaqlar unudulmaz qış istirahəti keçirəcəklər. Qarlı dağların qoynunda yerləşən uşaq düşərgəmizə qoşulun. Xizək bacarıqlarını təkminləşdirmək və qışın sehrini yaşamaq üçün ideal fürsətdir.",
    "signup-button": "Qeydiyyatdan keçin",
    program: "Proqram",
    "kids-registration": "9:00 - 9:45 - Uşaqların düşərgəyə qeydiyyatı",
    "ski-schools": "Zirve Xizək Məktəbi / Şahdağ Xizək Məktəbi",
    preparation: "Xizək dərslərinə hazırlıq və düşərgə qaydaları ilə tanışlıq",
    prices: "Qiymətlər",
    "half-day": "Yarı gün: 120 ₼ (10:00 - 14:00)",
    "full-day": "Tam gün: 185 ₼ (10:00 - 16:00)",
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

  const defaultLanguage = "az";
  translatePage(defaultLanguage);

  // Add event listener to the language selector
  const languageSelector = document.getElementById("language-selector");
  languageSelector.addEventListener("change", () => {
    const selectedLanguage = languageSelector.value;
    translatePage(selectedLanguage);
    console.log("Switched to " + selectedLanguage);
  });
});
