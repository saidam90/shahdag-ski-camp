const translations = {
  en: {
    section1: "Program",
    section2: "Prices",
    section3: "For information",
    section4: "Contact us",
    "title-small": "winter daytime",
    "page-title": "Ski Camp for Children",
    "welcome-text":
      "Get ready for an unforgettable winter adventure at the Shahdag Children's Ski Camp! Join us in the heart of the snow-capped mountains for an exciting and educational experience designed especially for young skiers. Our camp is the perfect opportunity for children to immerse themselves in the magic of winter for the first time and improve their skiing skills.",
    "signup-button": "Sign Up",
    program: "Program",
    "kids-registration": "9:00 - 9:45 - Registration at the camp",
    "ski-schools": "Zirve Ski School / Shahdag Ski School",
    preparation:
      "Preparation for the ski classes and familiarization with the camp rules",
    prices: "Prices",
    "half-day": "Half day: 120 ₼ (10:00 - 14:00)",
    "full-day": "Full day: 185 ₼ (10:00 - 16:00)",
    "instructor-class": "10:00 - 12:00 - Instructor class",
    "instructor-text":
      "No more than 8 children per instructor in a group. Each instructor chooses the route and training program individually, in accordance with the level.",
    "cloth-changing": "12:00 - 12:30 - Clothes changing time",
    "lunch-time": "12:30 - 14:00 - Lunch at Shahdag Hotel & Spa",
    "ski-gear": "14:00 - 14:30 - Print on a ski board",
    tubing: "15:00 - 16:00 - Tubing activity or continuing a ski lesson",
    end: "16:15 - Parents pick up children from the school",
    information: "For information",
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
    "instructor-class": "10:00 - 12:00 - Занятие с инструктором",
    "instructor-text":
      "Не более 8 детей на одного инструктора в группе. Трассу и программу обучения каждый инструктор выбирает индивидуально, в соответствии с уровнем.",
    "cloth-changing": "12:00 - 12:30 - Время для переодевания",
    "lunch-time": "12:30 - 14:00 - Обед в отеле Shahdag Hotel & Spa",
    "ski-gear": "14:00 - 14:30 - Отпечаток на лыжной доске",
    tubing: "15:00 - 16:00 - Катание на тюбинге или продолжение урока на лыжах",
    end: "16:15 - Сбор в школе, родители забирают детей",
    information: "Для информации",
  },
  az: {
    section1: "Proqram",
    section2: "Qiymətlər",
    section3: "Məlumat üçün",
    section4: "Bizimlə əlaqə",
    "title-small": "Uşaqlar üçün",
    "page-title": "Qış düşərgəsi",
    "welcome-text":
      "Şahdağ Xizək Düşərgəsində uşaqlar unudulmaz qış istirahəti keçirəcəklər. Qarlı dağların qoynunda yerləşən düşərgəmizdə balaca qonaqlarımız xizək bacarıqlarını təkmiləşdirəcək və qış əyləncələrindən zövq alacaqlar!",
    "signup-button": "Qeydiyyatdan keçin",
    program: "Proqram",
    "kids-registration": "9:00 - 9:45 - Uşaqların düşərgədə qeydiyyatı",
    "ski-schools": "Zirve Xizək Məktəbi / Şahdağ Xizək Məktəbi",
    preparation: "Xizək dərslərinə hazırlıq və düşərgə qaydaları ilə tanışlıq",
    prices: "Qiymətlər",
    "half-day": "Yarı gün: 120 ₼ (10:00 - 14:00)",
    "full-day": "Tam gün: 185 ₼ (10:00 - 16:00)",
    "instructor-class": "10:00 - 12:00 - Təlimatçı ilə dərs",
    "instructor-text":
      "Bir təlimatçının  qrupunda maksumum 8 uşaq ola bilər. Hər bir təlimatçı uşaqların xizəksürmə qabilliyətinə uyğun olaraq marşrutu və təlim proqramını fərdi olaraq seçir.",
    "clothes-changing":
      "12:00 - 12:30 - Paltar dəyişilməsi üçün nəzərdə tutulan vaxt",
    "lunch-time": "12:30 - 14:00 - Shahdag Hotel & Spa otelində nahar",
    "ski-gear": "14:00 - 14:30 - Xizək lövhəsində iz",
    tubing: "15:00 - 16:00 - Tübinq əyləncəsi və ya xizək dərsinə davam",
    end: "16:15 - Valideynlər uşaqları xizək məktəbindən götürür",
    information: "Məlumat üçün",
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
