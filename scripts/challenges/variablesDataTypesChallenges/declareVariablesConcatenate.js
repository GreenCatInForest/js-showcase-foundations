addEventListener("submit", (event) => {
  event.preventDefault();

  let firstValue = document.querySelector("#dataTypeFirst").value;
  let secondValue = document.querySelector("#dataTypeSecond").value;

  let cleanFirstValue = firstValue.toLowerCase().trim().replace(/\s+/g, "");
  console.log(cleanFirstValue);
  let cleanSecondValue = secondValue.toLowerCase().trim().replace(/\s+/g, "");
  console.log(cleanSecondValue);

  if (cleanInputValue) {
    if (cleanInputValue === "null") {
      cleanInputValue = null;
      definedValues.push(cleanInputValue);
      console.log(typeof cleanInputValue);
    } else if (cleanInputValue === "undefined") {
      cleanInputValue = undefined;
      definedValues.push(cleanInputValue);
      console.log(typeof cleanInputValue);
    } else if (
      cleanInputValue.includes("[]") ||
      cleanInputValue.includes("]") ||
      cleanInputValue.includes("[")
    ) {
      cleanInputValue = [cleanInputValue];
      console.log(typeof cleanInputValue);
      console.log(Array.isArray(cleanInputValue));
      definedValues.push(cleanInputValue);
    }
  } else {
  }
  console.log(definedValues);

  console.log(cleanFirstValue + cleanSecondValue);
});

// let inputValues = document.querySelectorAll(".inputValues");
// console.log(inputValues);

// for (i = 0; i < inputValues.length; i++) {
//   let cleanInputValue = inputValues[i].value;
//   console.log(cleanInputValue);

// }
// inputValues.forEach((inputValue) => {
//   let cleanInputValue = inputValue.value
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, "");
//   console.log(cleanInputValue);

//   if (cleanInputValue) {
//     if (cleanInputValue === "null") {
//       cleanInputValue = null;
//       definedValues.push(cleanInputValue);
//       console.log(typeof cleanInputValue);
//     } else if (cleanInputValue === "undefined") {
//       cleanInputValue = undefined;
//       definedValues.push(cleanInputValue);
//       console.log(typeof cleanInputValue);
//     } else if (
//       cleanInputValue.includes("[]") ||
//       cleanInputValue.includes("]") ||
//       cleanInputValue.includes("[")
//     ) {
//       cleanInputValue = [cleanInputValue];
//       console.log(typeof cleanInputValue);
//       console.log(Array.isArray(cleanInputValue));
//       definedValues.push(cleanInputValue);
//     }
//   } else {
//   }
//   console.log(definedValues);
// });
// });

// addEventListener("submit", (event) => {
//   event.preventDefault();

//   let inputValues = document.querySelectorAll(".inputValues");

//   inputValues.forEach((inputValue) => {
//     let cleanInputValue = inputValue.value
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "");
//     console.log(cleanInputValue);

//     if (cleanInputValue) {
//       console.log("exist");
//     } else console.log("not");
//   });
// });
