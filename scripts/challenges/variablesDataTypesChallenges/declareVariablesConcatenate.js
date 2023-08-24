let firstValue = document.querySelector("#dataTypeFirst").value;
let secondValue = document.querySelector("#dataTypeSecond").value;

addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValues = document.querySelectorAll(".inputValues");

  inputValues.forEach((inputValue) => {
    let cleanInputValue = inputValue.value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "");
    console.log(cleanInputValue);

    if (cleanInputValue) {
      console.log("exist");
    } else console.log("not");
  });
});
