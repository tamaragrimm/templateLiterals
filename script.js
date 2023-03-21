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
  alert(`This is a string
  This is a string with a 'quote' in it
  This is a string with a "double quote" in it`);
}
