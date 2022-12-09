const div = document.getElementById('div');
const name = document.getElementById('name');

name.addEventListener('keyup', function () {
    div.innerHTML = name.value;
  });