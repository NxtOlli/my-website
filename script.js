const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector(".password-toggle");
const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");

passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.textContent = isVisible ? "Vis" : "Skjul";
  passwordToggle.setAttribute("aria-label", isVisible ? "Vis adgangskode" : "Skjul adgangskode");
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Login er ikke tilkoblet endnu. Kontakt biblioteket for adgang.";
});

document.querySelectorAll("[data-dialog]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById(trigger.dataset.dialog).showModal();
  });
});

document.querySelectorAll(".info-dialog").forEach((dialog) => {
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
