function toggleClass(selector, className) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.toggle(className);
  }
}

const burger = document.querySelector('#js-burger');

burger.addEventListener('click', () => {
  toggleClass('#js-navigation', 'open');
  toggleClass('#js-burger', 'active');
});

const faqToggleBtn = document.querySelectorAll('.js-faq-toggle');
faqToggleBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    const parent = btn.closest('.faq__list-el');
    parent.querySelector('.js-faq-content').classList.toggle('open');
    this.classList.toggle('open');
  });
});

// ----------------------form js----------------------

document
.getElementById('feedback-form')
.addEventListener('submit', function (event) {
  event.preventDefault()
  let isValid = true

  // Name validation
  const nameField = document.getElementById('name')
  const nameError = document.getElementById('name-error')

  const nameRegex = /^([A-Za-z][A-Za-z\-\'])|([А-ЯЁIЇҐЄа-яёіїґє][А-ЯЁIЇҐЄа-яёіїґє\-\'])$/

  if (!nameRegex.test(nameField.value) && nameField.value.length < 2) {
    nameError.textContent = 'Name must be at least 2 letters'
    nameField.classList.add('invalid')
    nameField.classList.remove('valid')
    isValid = false
  } else {
    nameError.textContent = ''
    nameField.classList.add('valid')
    nameField.classList.remove('invalid')
  }

  // Email validation
  const emailField = document.getElementById('email')
  const emailError = document.getElementById('email-error')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(emailField.value)) {
    emailError.textContent = 'Enter a valid email address'
    emailField.classList.add('invalid')
    emailField.classList.remove('valid')
    isValid = false
  } else {
    emailError.textContent = ''
    emailField.classList.add('valid')
    emailField.classList.remove('invalid')
  }

  // Message validation
  const messageField = document.getElementById('message')
  const messageError = document.getElementById('message-error')
  if (messageField.value.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters'
    messageField.classList.add('invalid')
    messageField.classList.remove('valid')
    isValid = false
  } else {
    messageError.textContent = ''
    messageField.classList.add('valid')
    messageField.classList.remove('invalid')
  }

  if (isValid) {
    alert('Form submitted successfully!')
    document.getElementById('feedback-form').reset()
    document
      .querySelectorAll('input, textarea')
      .forEach((field) => field.classList.remove('valid', 'invalid'))
  }
})