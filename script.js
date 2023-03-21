const beispiel1 = document.querySelector("#beispiel1");
beispiel1.addEventListener("click", executeExample);

function executeExample() {
  const str1 = 'A \'quote\' inside a string.';
  const str2 = "Another \"quote\" inside a string.";
  alert(`${str1}
  ${str2}`);
}
