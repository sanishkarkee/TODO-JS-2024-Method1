let inputs = document.getElementById('inp');
let text = document.querySelector('.text');

// function Add() {
//   if (inputs.value == '') {
//     alert('Dont enter empty value');
//   } else {
//     // 1. Create <ul>
//     // 2. set value inside <ul>
//     // 3.Insert <ul> inside .text class

//     let newEle = document.createElement('ul');
//     newEle.innerHTML = `${inputs.value}  <i class="fa fa-trash" aria-hidden="true"></i>`;

//     text.appendChild(newEle);

//     // Clear data after adding data
//     inputs.value = '';

//     // -----------------DELETION-----------------
//     newEle.querySelector('i').addEventListener('click', remove);

//     function remove() {
//       newEle.remove();
//     }
//   }
// }

// ---------------------(PRATICE)-------------------------

function Add() {
  if (inputs.value.length == 0) {
    alert('Value cannot be empty.');
  } else {
    // 1. Create <ul>
    // 2. set value inside <ul>
    // 3.Insert <ul> inside .text class
    let newEle = document.createElement('ul');
    newEle.innerHTML = `${inputs.value} <i class="fa fa-times" aria-hidden="true"></i>`;
    text.appendChild(newEle);

    inputs.value = '';

    // -----------------DELETION-----------------
    newEle.querySelector('i').addEventListener('click', () => {
      newEle.remove();
    });
  }
}
