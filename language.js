const translations = {
  sw: {
    home: "Nyumbani",
    news: "Habari",
    stories: "Hadithi",
    entertainment: "Burudani",
    articles: "Makala",
    about: "Kuhusu",
    welcome: "Karibu BABUU OLE KASUKU",
    intro: "Sehemu yako ya kusoma habari mchanganyiko, hadithi, burudani na makala mbalimbali.",
    mixedNews: "Habari Mchanganyiko",
    welcomeTitle: "Karibu kwenye tovuti yetu",
    welcomeText: "Hapa tutakuwa tukikuletea habari na taarifa mbalimbali zinazovutia wasomaji.",
    shareWhatsApp: "Shiriki WhatsApp",
    articlesTitle: "Makala",
    articlesText: "Sehemu maalumu kwa makala, elimu, ushauri na mawazo mbalimbali.",
    storiesTitle: "Hadithi",
    storiesText: "Soma hadithi zinazoburudisha na wakati huo huo kutoa mafunzo muhimu katika maisha.",
    entertainmentTitle: "Burudani",
    entertainmentText: "Habari za burudani, vichekesho na maudhui mengine ya kuvutia.",
    storiesHeading: "Hadithi",
    storiesDescription: "Hapa ndipo tutakapoweka hadithi zako na simulizi mbalimbali za BABUU OLE KASUKU.",
    entertainmentHeading: "Burudani",
    entertainmentDescription: "Sehemu hii itakuwa kwa ajili ya maudhui ya burudani na vichekesho.",
    aboutHeading: "Kuhusu BABUU OLE KASUKU",
    aboutText: "BABUU OLE KASUKU ni jukwaa la maudhui mbalimbali linalolenga kuwakutanisha wasomaji na habari, hadithi, makala na burudani.",
    footer: "Habari • Hadithi • Burudani • Makala"
  },

  en: {
    home: "Home",
    news: "News",
    stories: "Stories",
    entertainment: "Entertainment",
    articles: "Articles",
    about: "About",
    welcome: "Welcome to BABUU OLE KASUKU",
    intro: "Your place for mixed news, stories, entertainment and articles.",
    mixedNews: "Mixed News",
    welcomeTitle: "Welcome to our website",
    welcomeText: "Here we will bring you various news and information that interest our readers.",
    shareWhatsApp: "Share on WhatsApp",
    articlesTitle: "Articles",
    articlesText: "A special section for articles, education, advice and different ideas.",
    storiesTitle: "Stories",
    storiesText: "Read entertaining stories that also provide valuable lessons in life.",
    entertainmentTitle: "Entertainment",
    entertainmentText: "Entertainment news, comedy and other interesting content.",
    storiesHeading: "Stories",
    storiesDescription: "This is where we will publish your stories and various BABUU OLE KASUKU narratives.",
    entertainmentHeading: "Entertainment",
    entertainmentDescription: "This section will feature entertainment content and comedy.",
    aboutHeading: "About BABUU OLE KASUKU",
    aboutText: "BABUU OLE KASUKU is a content platform designed to bring readers news, stories, articles and entertainment.",
    footer: "News • Stories • Entertainment • Articles"
  }
};

function changeLanguage(lang) {
  localStorage.setItem("babuuLanguage", lang);

  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const selector = document.getElementById("languageSelector");

  if (selector) {
    selector.value = lang;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage =
    localStorage.getItem("babuuLanguage") || "sw";

  changeLanguage(savedLanguage);
});
