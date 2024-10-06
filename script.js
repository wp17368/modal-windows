'use strict';

const modal = document.querySelector('.modal');
const openModalButtons = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

closeModalButton.addEventListener('click', toggleModalVisibility);

function testLog() {
  console.log('hello, world!');
}
function toggleModalVisibility() {
  modalWindow.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}
for (let i = 0; i < openModalButtons.length; i++) {
  openModalButtons[i].addEventListener('click', toggleModalVisibility);
}
