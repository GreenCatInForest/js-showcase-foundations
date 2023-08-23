addEventListener("submit", (event) => {
  event.preventDefault();

  let firstValue = document.querySelector("#dataTypeFirst").value;
  let secondValue = document.querySelector("#dataTypeSecond").value;

  console.log(typeof firstValue);
  console.log(typeof secondValue);

  console.log(firstValue + secondValue);
});
