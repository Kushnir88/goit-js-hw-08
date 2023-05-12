// === Імпортуємо бібліотеку lodash.throttle
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const LOCAL_STORAGE_KEY = 'feedback-form-state';



// === збереження даних форми у локальне сховище із затримкою 555
const saveFormLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formState));
}, 555);

// ==== введення даних у форму
form.addEventListener('input', saveFormLocalStorage);

// === відновлення даних форми з локального сховища
const restoreLocalStorage = () => { 
  const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

// відновлення даних форми при завантаженні сторінки
restoreLocalStorage();


// сабміт - очищення
form.addEventListener('submit', sabmitClear);

function sabmitClear (event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (email === '' || message === '') {
    alert('Всі поля потрібно заповнити!');
    return;
  }
  const formData = {
    email,
    message
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}