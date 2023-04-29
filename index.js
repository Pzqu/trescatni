/* let btn = document.querySelector('#btn')
console.log('btn', btn);
let box = document.querySelector('.box')
console.log('box', box);

btn.addEventListener('click', () => {
  box.classList.toggle('toggle-box')
  console.log('box.classList', box.classList);
}) */

let btn = document.querySelector('#burger')
let nav = document.querySelector('#nav')

btn.addEventListener('click', () => {
  nav.classList.toggle('navigacion__active')
  btn.classList.toggle('burger_open')
})