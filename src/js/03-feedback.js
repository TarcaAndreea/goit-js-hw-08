import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea');
const buttonSubmit = document.querySelector('button');
inputEmail.addEventListener('input', throttle(newData, 500));
message.addEventListener('input', throttle(newData, 500));
buttonSubmit.addEventListener('click', eventSubmit);
let formData = {
  email: '',
  message: '',
};
function newData(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      ...formData,
      email: inputEmail.value,
      message: message.value,
    })
  );
}
if (localDataStorage !== null) {
  const parsedFormData = JSON.parse(localDataStorage);
  inputEmail.value = parsedFormData.email;
  textarea.value = parsedFormData.message;
}
function eventSubmit(event) {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  console.log(formData);
}
