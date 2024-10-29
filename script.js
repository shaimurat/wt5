// Task 1

// let p = document.getElementById('p');
// let p1 = document.getElementById('p1');

// let x = parseInt(window.prompt('a:'));
// let y = parseInt(window.prompt('b:'));
// let z = parseInt(window.prompt('c:'));

// let a = 100 - x;
// let b = 100 - y;
// let c = 100 - z;

// if (100 - Math.min(a, b, c) === x) {
//     p.textContent = `Nearest: ${x}`;
// } else if (100 - Math.min(a, b, c) === y) {
//     p.textContent = `Nearest: ${y}`;
// } else if (100 - Math.min(a, b, c) === z) {
//     p.textContent = `Nearest: ${z}`;
// }

// if (100 - Math.max(a, b, c) === x) {
//     p1.textContent = `Farthest: ${x}`;
// } else if (100 - Math.max(a, b, c) === y) {
//     p1.textContent = `Farthest: ${y}`;
// } else if (100 - Math.max(a, b, c) === z) {
//     p1.textContent = `Farthest: ${z}`;
// }


// Task 2

// let btn = document.getElementById('btn');
// let p = document.getElementById('p');

// btn.addEventListener('click', function(){
//     let value = document.getElementById('input').value;
//     let sorted = value.split(' ')
//     .map(word=>word.split('').sort().join(''))
//     .join(' ');
//     p.textContent = sorted;
// })


// Task 3

// let btn = document.getElementById('btn');
// let p = document.getElementById('p');

// btn.addEventListener('click', function(){
//     let value = document.getElementById('input').value;
//     let res = value.split('')
//         .filter((item, index, arr) => 
//             arr.filter(arrItem => arrItem === item).length === 1
//         )[0];
//     p.textContent = res;
// })


// Task 4

// let btn = document.getElementById('btn');
// let p = document.getElementById('p');

// btn.addEventListener('click', function(){
//     let value = document.getElementById('input').value;
//     let res = value.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
//     window.alert(res);
// })

// Task 5

// let p = document.getElementById('p');
// let a = window.prompt('a: ');
// let b = window.prompt('b: ');
// let c = window.prompt('c: ');

// let arr = [a, b, c];
// function longestStr(arr){
//     let max = arr[0].length;
//     arr.map(v => max = Math.max(max, v.length));
//     max_str = arr.filter(v => v.length === max);
//     arr.map(v => max = Math.min(max, v.length));
//     min_str = arr.filter(v => v.length === max);
//     p.textContent = `Longest word is: ${max_str}. Shortest word is: ${min_str}`;
// }

// longestStr(arr);


// Task 6

// let btn = document.querySelector('#btn');
// let p = document.querySelector('#p');

// btn.addEventListener('click', function () {
//     let value = document.querySelector('#input').value;
//     p.innerHTML = value.split(' ')
//     .map(word => word.length > 7 ? `<span style="background-color: blue">${word}</span>` : word.length < 3 ? `<b>${word}</b>` : word)
//     .join(' ');
// })


// Task 7

// Array.from(document.querySelectorAll('p'))
//     .forEach(p => {
//         p.innerHTML = p.innerHTML
//             .replace(/\?/g, '*');
//     });

// Array.from(document.querySelectorAll('p'))
//     .forEach(p => {
//         p.innerHTML = p.innerHTML
//             .replace(/\!/g, '@');
//     });


// Task 8

// let p = document.querySelector('p');
// p.innerHTML = p.innerHTML
//     .split(/\.[^\.|<]/)
//     .join('.</p><p>') + '</p>'
// p.innerHTML = p.innerHTML
//     .split(/\?[^\?|<]/)
//     .join('?</p><p>') + '</p>'
// p.innerHTML = p.innerHTML
//     .split(/\![^\!|<]/)
//     .join('!</p><p>') + '</p>'


// Task 9

// let p = document.querySelector('p');
// let count = p.innerText.split(' ').length;
// alert(count + ' words')


// Task 10

// let p = document.querySelector('p');
// p.innerHTML = p.innerText.split(' ').map(word => {
//     if (/^a/i.test(word)) {
//         return `<i>${word}</i>`;
//     } else if (/y$/i.test(word)) {
//         return `<u>${word}</u>`;
//     }
//     return word;
// }).join(' ');


// Task 11

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//     let r = document.querySelector('.input').value;
//     let res = document.querySelector('.res');
//     res.value = ((4/3) * Math.PI * r**3).toFixed(4);
// })


// Task 12

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//     let r = document.querySelector('.input_r').value;
//     let h = document.querySelector('.input_h').value;
//     let res = document.querySelector('.res');
//     res.value = (h * Math.PI * r**2).toFixed(4);
// })


// Task 13

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//     let r = document.querySelector('.input_r').value;
//     let h = document.querySelector('.input_h').value;
//     let res = document.querySelector('.res');
//     res.value = ((1/3) * h * Math.PI * r**2).toFixed(4);
// })


// Task 14

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//     let a = document.querySelector('.input_a').value;
//     let b = document.querySelector('.input_b').value;
//     let h = document.querySelector('.input_h').value;
//     let res = document.querySelector('.res');
//     res.value = (a * b * h).toFixed(4);
// })


// Task 15

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//     let a = document.querySelector('.input_a').value;
//     let h = document.querySelector('.input_h').value;
//     let res = document.querySelector('.res');
//     res.value = (a * (1/2) * h).toFixed(4);
// })


// Task 16

// document.getElementById('opennav').addEventListener('click', function () {
//     document.getElementById('mySidenav').style.width = '250px';
//     document.getElementById('main').style.marginLeft = '250px';
//     document.body.style.backgroundColor = "rgba(0,0,0,0.6)"
// })

// document.getElementById('closebtn').addEventListener('click', function () {
//     document.getElementById('mySidenav').style.width = '0';
//     document.getElementById('main').style.marginLeft = '0';
//     document.body.style.backgroundColor = ""
// })


// Task 17

// let month = document.querySelector('.month');
// let day = document.querySelector('.day');
// let date = document.querySelector('.date');
// let year = document.querySelector('.year');

// let currentDate = new Date();

// var months = [
//     "January", "February", "March", "April", 
//     "May", "June", "July", "August", 
//     "September", "October", "November", "December"
// ];

// var days = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", 
//     "Thursday", "Friday", "Saturday"
// ];

// month.innerHTML = months[currentDate.getMonth()];
// day.innerHTML = days[currentDate.getDay()];
// date.innerHTML = currentDate.getDate();
// year.innerHTML = currentDate.getFullYear();


// Task 18

// let lists = document.getElementsByClassName('list');
// let rightBox = document.getElementById('right');
// let leftBox = document.getElementById('left');
// for(let list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target;
//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault();
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected);
//             selected = null;
//         })
//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault();
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected);
//             selected = null;
//         })
//     })
// }


// Task 19

// const playerText = document.getElementById('playerText');
// const computerText = document.getElementById('computerText');
// const resultText = document.getElementById('resultText');
// const choiceBtn = document.querySelectorAll('.choiceBtn');
// let player, computer, result;

// choiceBtn.forEach(button => button.addEventListener('click', () => {
//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
// }))

// function computerTurn() {
//     const random = Math.floor(Math.random() * 3) + 1;
//     switch (random) {
//         case 1:
//             computer = 'ROCK';
//             break;
//         case 2:
//             computer = 'PAPER';
//             break;
//         case 3:
//             computer = 'SCISSORS';
//             break;
//     }
// }

// function checkWinner() {
//     if (player === computer) {
//         return 'Draw';
//     } else if (computer === "ROCK") {
//         return (player === 'PAPER' ? 'You win' : 'You lose');
//     } else if (computer === "PAPER") {
//         return (player === 'SCISSORS' ? 'You win' : 'You lose');
//     }else if(computer === "SCISSORS"){
//         return (player === 'ROCK' ? 'You win' : 'You lose');
//     }
// }


// Task 20

// let hour = document.getElementById('hour');
// let minute = document.getElementById('minute');
// let seconds = document.getElementById('seconds');

// let clock = setInterval(
//     function time(){
//         let date = new Date();
//         let hr = date.getHours();
//         let min = date.getMinutes();
//         let sec = date.getSeconds();

//         if(hr < 10){
//             hr = '0' + hr;
//         }
//         if(min < 10){
//             min = '0' + min;
//         }
//         if(sec < 10){
//             sec = '0' + sec;
//         }

//         hour.textContent = hr;
//         minute.textContent = min;
//         seconds.textContent = sec;

//     }, 1000
// )

let btn = document.getElementById('btn');
let p = document.getElementById('p');

btn.addEventListener('click', () => {
    let value = document.getElementById('input').value;
    let res = value.split('')
        .filter((arr, index, item) => arr.filter(arrItem => arrItem === item).length === 1)[0];
    p.textContent = res;
})