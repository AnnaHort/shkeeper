function toggleClass(selector, className) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.toggle(className);
  }
}

const burger = document.querySelector("#js-burger");

burger.addEventListener("click", () => {
  toggleClass("#js-navigation", "open");
  toggleClass("#js-burger", "active");
});

// ----------------------faq js----------------------

const openListText = document.querySelectorAll(".faq__list-el-title-container");

openListText.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Закриваємо всі відкриті елементи перед відкриттям нового
    document.querySelectorAll(".faq__list-el-text.open").forEach((openItem) => {
      if (openItem !== this.nextElementSibling) {
        openItem.classList.remove("open");
        openItem.previousElementSibling.querySelector(".faq__toggle-btn img").src = "./img/plus.png";
      }
    });
    // Відкриваємо/закриваємо поточний елемент
    const listText = this.nextElementSibling;
    listText.classList.toggle("open");
    // Знаходимо відповідну кнопку та міняємо іконку
    const toggleBtn = this.querySelector(".faq__toggle-btn");
    let icon = toggleBtn.querySelector("img");
    icon.src = listText.classList.contains("open") ? "./img/minus.png" : "./img/plus.png";
  });
});


// ----------------------form js----------------------

document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const nameField = document.getElementById("name");
    const nameError = document.getElementById("name-error");

    const nameRegex =
      /^([A-Za-z][A-Za-z\-\'])|([А-ЯЁIЇҐЄа-яёіїґє][А-ЯЁIЇҐЄа-яёіїґє\-\'])$/;

    if (!nameRegex.test(nameField.value) && nameField.value.length < 2) {
      nameError.textContent = "Name must be at least 2 letters";
      nameField.classList.add("invalid");
      nameField.classList.remove("valid");
      isValid = false;
    } else {
      nameError.textContent = "";
      nameField.classList.add("valid");
      nameField.classList.remove("invalid");
    }

    // Email validation
    const emailField = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      emailError.textContent = "Enter a valid email address";
      emailField.classList.add("invalid");
      emailField.classList.remove("valid");
      isValid = false;
    } else {
      emailError.textContent = "";
      emailField.classList.add("valid");
      emailField.classList.remove("invalid");
    }

    // Message validation
    const messageField = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    if (messageField.value.length < 10) {
      messageError.textContent = "Message must be at least 10 characters";
      messageField.classList.add("invalid");
      messageField.classList.remove("valid");
      isValid = false;
    } else {
      messageError.textContent = "";
      messageField.classList.add("valid");
      messageField.classList.remove("invalid");
    }

    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("feedback-form").reset();
      document
        .querySelectorAll("input, textarea")
        .forEach((field) => field.classList.remove("valid", "invalid"));
    }
  });

// test
// const create = document.getElementById("create");
// const list = document.querySelector(".test-list");

// create.addEventListener("click", function () {
//   const listEl = document.createElement("li");
//   listEl.innerHTML = "Hello, World!";
//   list.appendChild(listEl);
//   listEl.classList.add("test-list-el");

//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.addEventListener("click", function () {
//     list.removeChild(listEl);
//   });
//   listEl.appendChild(deleteBtn);
//   deleteBtn.classList.add("button");
// });
