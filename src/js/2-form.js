console.log('Form');

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', oninput);

function oninput(e) {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  const isEmpty = !email.trim() || !message.trim();
  if (isEmpty) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
