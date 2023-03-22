const beispiel1 = document.querySelector("#beispiel1");
beispiel1.addEventListener("click", executeExample);

function executeExample() {
  const str1 = 'A \'quote\' inside a string.';
  const str2 = "Another \"quote\" inside a string.";
  alert(`${str1}
  ${str2}`);
}


const beispiel2 = document.querySelector("#beispiel2");
beispiel2.addEventListener("click", executeExample2);

function executeExample2() {
  alert(`This is a string with a 'quote' in it
  This is a string with a "double quote" in it`);
}

const beispiel3 = document.querySelector("#beispiel3");
beispiel3.addEventListener("click", executeExample3);

function executeExample3() {
alert("string text line 1 \n" + "string text line 1");
}


const beispiel4 = document.querySelector("#beispiel4");
beispiel4.addEventListener("click", executeExample4);

function executeExample4() {
alert(
`string text line 1
string text line 2`);
}



const beispiel5 = document.querySelector("#beispiel5");
beispiel5.addEventListener("click", executeExample5);

function executeExample5() {
    const a = 5;
    const b = 10;
  alert(
"Fifteen is " + (a + b) + " and not " + (2 * a + b) + ".");
}

const beispiel6 = document.querySelector("#beispiel6");
beispiel6.addEventListener("click", executeExample6);

function executeExample6() {
const a = 5;
const b = 10;
alert(
`Fifteen is ${a + b} and not ${2 * a + b}.`);
}

const beispiel7 = document.querySelector("#beispiel7");
beispiel7.addEventListener("click", executeExample7);

function executeExample7() {
  alert(
    'Tom');
}


const beispiel8 = document.querySelector("#beispiel8");
beispiel8.addEventListener("click", executeExample8);

function executeExample8() {
  beispiel8.outerHTML = 
  `<ul>
  <li> example </li>
  <li> example </li>
  <li> example </li>
  </ul>`;
}

