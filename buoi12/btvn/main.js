const emailInput = document.getElementById('my-email');

emailInput.addEventListener('input', function () {
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    console.log('Email hợp lệ!');
  } else {
    console.log('Email không hợp lệ!');
  }
});
const numberInputA = document.getElementById('number-a');
  const numberInputB = document.getElementById('number-b');
  const btnAdd = document.getElementById('btn-add');
  const btnSubtract = document.getElementById('btn-subtract');

  btnAdd.addEventListener('click', function () {
    const result = parseFloat(numberInputA.value) + parseFloat(numberInputB.value);
    console.log('Tổng: ' + result);
  });

  btnSubtract.addEventListener('click', function () {
    const result = parseFloat(numberInputA.value) - parseFloat(numberInputB.value);
    console.log('Hiệu: ' + result);
  });
  const image = document.getElementById('my-image');
  const btnIncrease = document.getElementById('btn-increase');
  const btnDecrease = document.getElementById('btn-decrease');

  btnIncrease.addEventListener('click', function () {
    let width = image.width + 10;
    let height = image.height + 10;
    image.width = width;
    image.height = height;
  });

  btnDecrease.addEventListener('click', function () {
    let width = image.width - 10;
    let height = image.height - 10;
    image.width = width;
    image.height = height;
  });