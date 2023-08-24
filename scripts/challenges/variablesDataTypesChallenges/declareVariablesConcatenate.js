addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValues = document.querySelectorAll(".inputValues");
  let num1, num2;

  for (i = 0; i < inputValues.length; i++) {
    let inputValueData = inputValues[i].value;
    let inputValueId = inputValues[i].id;

    if (inputValueData) {
      defineValues(inputValueData, inputValueId);
    } else alert("Enter a value please!");
  }
});

defineValues = (inputValueData, inputValueId) => {
  let definedValue;
  let cleanInputValueData = inputValueData
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");

  if (cleanInputValueData === "null") {
    definedValue = null;
  } else if (cleanInputValueData === "undefined") {
    definedValue = undefined;
  } else if (!isNaN(Number(cleanInputValueData))) {
    definedValue = Number(cleanInputValueData);
    console.log(typeof definedValue);
  } else if (
    cleanInputValueData === "true" ||
    cleanInputValueData === "false"
  ) {
    definedValue = Boolean(cleanInputValueData);
    console.log(typeof definedValue);
  } else if (cleanInputValueData.constructor.name === "String") {
    definedValue = cleanInputValueData;
    console.log(cleanInputValueData);
    console.log(cleanInputValueData.constructor.name);
  }

  if (inputValueId === "dataTypeFirst") {
    num1 = definedValue;
    console.log(num1);
  }
  if (inputValueId === "dataTypeSecond") {
    num2 = definedValue;
    console.log(num2);
  }

  if (typeof num1 !== "undefined" && typeof num2 !== "undefined") {
    let sum = num1 + " " + num2;
    console.log(sum);
  } else if (typeof num1 !== "undefined" || typeof num2 !== "undefined") {
    alert("if you concantenate anything with undefined, result will be NaN");
  } else;
};
