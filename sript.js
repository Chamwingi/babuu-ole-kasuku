
// BABUU OLE KASUKU - Website Functions

document.addEventListener("DOMContentLoaded", function () {

  // WhatsApp sharing
  const whatsappButtons = document.querySelectorAll(".whatsapp-share");

  whatsappButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const pageUrl = encodeURIComponent(window.location.href);
      const message = encodeURIComponent(
        "Angalia BABUU OLE KASUKU: " + window.location.href
      );

      window.open(
        "https://wa.me/?text=" + message,
        "_blank"
      );
    });
  });


  // Facebook sharing
  const facebookButtons = document.querySelectorAll(".facebook-share");

  facebookButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const pageUrl = encodeURIComponent(window.location.href);

      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + pageUrl,
        "_blank"
      );
    });
  });


  // Search function
  const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#searchInput");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const searchText = searchInput.value.trim();

      if (searchText !== "") {
        alert("Unatafuta: " + searchText);
      } else {
        alert("Tafadhali andika unachotafuta.");
      }
    });
  }


  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });

});
