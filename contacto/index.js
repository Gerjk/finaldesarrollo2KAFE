"use strict";

(() => {
  const contactForm = document.querySelector(".contact-form");
  const contactModalContent = document.querySelector(
    ".contact-modal .modal-body"
  );
  const contactModal = new bootstrap.Modal("#formSentModal");

  contactForm.addEventListener(
    "submit",
    (e) => {
      if (contactForm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();

        const userName = contactForm.inputName.value.split(" ")[0];

        contactModalContent.innerHTML = `Gracias ${userName}!`;
        contactModal.show();
      }
      else  e.preventDefault();
      contactForm.classList.add("was-validated");
    },
    false
  );
})();
