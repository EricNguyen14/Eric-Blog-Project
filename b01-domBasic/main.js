const elFullName = document.getElementById('fullname');
const elText = document.querySelector('.text');

function handleChangeValue(evt) {
  renderFullName(evt.target.value);
}

function renderFullName(fullName) {
  elText.innerText = fullName;
}

elFullName.addEventListener('input', handleChangeValue);