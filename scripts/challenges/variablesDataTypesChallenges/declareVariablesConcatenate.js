let dataTypeFirstResultDefined = document.querySelector(
  "#firstDataTypeResultDefined"
);

let secondDataTypeResultDefined = document.querySelector(
  "#secondDataTypeResultDefined"
);

let dataTypeResultConcantenation = document.querySelector(
  "#dataTypeResultConcantenation"
);

addEventListener("submit", (event) => {
  event.preventDefault();
  dataTypeResultConcantenation.textContent = "";

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
    console.log(typeof definedValue);
  } else if (cleanInputValueData.includes("undefined")) {
    definedValue = undefined;
    console.log(typeof definedValue);
  } else if (!isNaN(Number(cleanInputValueData))) {
    definedValue = Number(cleanInputValueData);
    console.log(typeof definedValue);
  } else if (
    cleanInputValueData === "true" ||
    cleanInputValueData === "false"
  ) {
    definedValue = JSON.parse(cleanInputValueData);
    console.log(definedValue);
    console.log(typeof definedValue);
  } else if (
    cleanInputValueData.includes("{}") ||
    cleanInputValueData.includes("}") ||
    cleanInputValueData.includes("{")
  ) {
    definedValue = { cleanInputValueData };
    console.log(definedValue);
    console.log(typeof definedValue);
  } else if (
    cleanInputValueData.includes("[]") ||
    cleanInputValueData.includes("]") ||
    cleanInputValueData.includes("[]")
  ) {
    definedValue = [cleanInputValueData];
    console.log(definedValue);
    console.log(typeof definedValue);
  } else {
    definedValue = cleanInputValueData;
    console.log(definedValue);
    console.log(typeof definedValue);
  }

  if (inputValueId === "dataTypeFirst") {
    num1 = definedValue;
    firstDataTypeResultDefined.textContent = `${typeof num1}`;
    console.log(num1);
  }

  if (inputValueId === "dataTypeSecond") {
    num2 = definedValue;
    secondDataTypeResultDefined.textContent = `${typeof num2}`;
    console.log(typeof num2);
  }

  if (typeof num1 !== "undefined" && typeof num2 !== "undefined") {
    let sum = num1 + num2;
    console.log(sum);
    dataTypeResultConcantenation.textContent = `${sum}`;
  } else if (typeof num1 === "undefined" || typeof num2 === "undefined") {
    alert(
      "if you concantenate number, null, boolean with undefined, result will be NaN"
    );
    sum = num1 + num2;
    dataTypeResultConcantenation.textContent = `${sum}`;
  } else;
};

let undefinedValue = undefined;
let numberValue = 10;
let stringValue = "aaa";
let nullValue = null;
let booleanValue = true;
let objectValue = { property: "value" };
let arrayValue = ["[abc]"];
console.log(Array.isArray(arrayValue));

let sum = (a, b) => a + b;
console.log(sum(undefinedValue, numberValue));
console.log(sum(undefinedValue, stringValue));
console.log(sum(undefinedValue, nullValue));
console.log(sum(undefinedValue, booleanValue));
console.log(sum(undefinedValue, objectValue));
console.log(sum(undefinedValue, arrayValue));

console.log(sum(arrayValue, numberValue));
console.log(sum(arrayValue, stringValue));
console.log(sum(arrayValue, nullValue));
console.log(sum(arrayValue, booleanValue));
console.log(sum(arrayValue, objectValue));

console.log(sum(objectValue, numberValue));
console.log(sum(objectValue, stringValue));
console.log(sum(objectValue, nullValue));
console.log(sum(objectValue, booleanValue));

console.log(sum(booleanValue, numberValue));
console.log(sum(booleanValue, stringValue));
console.log(sum(booleanValue, nullValue));
console.log(sum(booleanValue, objectValue));
console.log(sum(booleanValue, arrayValue));

console.log(15 + true);
