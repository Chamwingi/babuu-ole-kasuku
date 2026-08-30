const translations = {
  sw: {
    home: "Nyumbani",
    news: "Habari",
    stories: "Hadithi",
    entertainment: "Burudani",
    articles: "Makala",
    gifts: "Zawadi",
    about: "Kuhusu",

    welcome: "Karibu BABUU OLE KASUKU",
    intro: "Sehemu yako ya kusoma habari mchanganyiko, hadithi, burudani, makala na maudhui mbalimbali.",

    mixedNews: "Habari Mchanganyiko",
    welcomeTitle: "Karibu kwenye tovuti yetu",
    welcomeText: "Hapa tutakuwa tukikuletea habari na taarifa mbalimbali zinazovutia wasomaji.",

    shareWhatsApp: "Shiriki WhatsApp",
    shareFacebook: "Shiriki Facebook",

    articlesTitle: "Makala",
    articlesText: "Sehemu maalumu kwa makala, elimu, ushauri na mawazo mbalimbali.",

    storiesTitle: "Hadithi",
    storiesText: "Soma hadithi zinazoburudisha na wakati huo huo kutoa mafunzo muhimu katika maisha.",

    storiesHeading: "Hadithi",
    storiesDescription: "Hapa ndipo tutakapoweka hadithi zako na simulizi mbalimbali za BABUU OLE KASUKU.",

    storiesMoreTitle: "Simulizi",
    storiesMoreText: "Simulizi mbalimbali zitawekwa hapa kwa ajili ya burudani, elimu na mafunzo ya maisha.",

    entertainmentTitle: "Burudani",
    entertainmentText: "Habari za burudani, vichekesho na maudhui mengine ya kuvutia.",

    entertainmentHeading: "Burudani",
    entertainmentDescription: "Sehemu hii itakuwa kwa ajili ya maudhui ya burudani na vichekesho.",

    giftsHeading: "Zawadi",
    giftsTitle: "Zawadi za BABUU OLE KASUKU",
    giftsText: "Hapa tutakuwa tukiweka taarifa kuhusu zawadi, mashindano na fursa mbalimbali kwa wasomaji wa BABUU OLE KASUKU.",
    giftsNotice: "Endelea kutembelea tovuti yetu ili usikose taarifa mpya.",

    aboutHeading: "Kuhusu BABUU OLE KASUKU",
    aboutText: "BABUU OLE KASUKU ni jukwaa la maudhui mbalimbali linalolenga kuwakutanisha wasomaji na habari, hadithi, makala, burudani na maudhui mengine yenye manufaa.",

    footer: "Habari • Hadithi • Burudani • Makala • Zawadi",

    languageLabel: "Chagua lugha"
  },

  en: {
    home: "Home",
    news: "News",
    stories: "Stories",
    entertainment: "Entertainment",
    articles: "Articles",
    gifts: "Gifts",
    about: "About",

    welcome: "Welcome to BABUU OLE KASUKU",
    intro: "Your place for mixed news, stories, entertainment, articles and various content.",

    mixedNews: "Mixed News",
    welcomeTitle: "Welcome to our website",
    welcomeText: "Here we will bring you various news and information that interest our readers.",

    shareWhatsApp: "Share on WhatsApp",
    shareFacebook: "Share on Facebook",

    articlesTitle: "Articles",
    articlesText: "A special section for articles, education, advice and different ideas.",

    storiesTitle: "Stories",
    storiesText: "Read entertaining stories that also provide valuable lessons in life.",

    storiesHeading: "Stories",
    storiesDescription: "This is where we will publish your stories and various BABUU OLE KASUKU narratives.",

    storiesMoreTitle: "Narratives",
    storiesMoreText: "Various narratives will be published here for entertainment, education and life lessons.",

    entertainmentTitle: "Entertainment",
    entertainmentText: "Entertainment news, comedy and other interesting content.",

    entertainmentHeading: "Entertainment",
    entertainmentDescription: "This section will feature entertainment content and comedy.",

    giftsHeading: "Gifts",
    giftsTitle: "BABUU OLE KASUKU Gifts",
    giftsText: "Here we will publish information about gifts, competitions and various opportunities for BABUU OLE KASUKU readers.",
    giftsNotice: "Keep visiting our website so you don't miss new updates.",

    aboutHeading: "About BABUU OLE KASUKU",
    aboutText: "BABUU OLE KASUKU is a content platform designed to bring readers news, stories, articles, entertainment and other useful content.",

    footer: "News • Stories • Entertainment • Articles • Gifts",

    languageLabel: "Choose language"
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
