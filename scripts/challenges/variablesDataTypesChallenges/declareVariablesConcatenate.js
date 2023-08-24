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
    let sum = num1 + num2;
    console.log(sum);
  }
};
//     if (inputValue) {
//       if (inputValue === "null") {
//         cleanInputValue = null;
//         return cleanInputValue;
//       } else if (inputValue === "undefined") {
//         cleanInputValue = undefined;
//         return cleanInputValue;
//       } else if (
//         cleanInputValue.includes("[]") ||
//         cleanInputValue.includes("]") ||
//         cleanInputValue.includes("[")
//       ) {
//         cleanInputValue = [cleanInputValue];
//         return cleanInputValue;
//       } else if (
//         cleanInputValue.includes("{}") ||
//         cleanInputValue.includes("}") ||
//         cleanInputValue.includes("{[}")
//       ) {
//         cleanInputValue = { cleanInputValue };
//         return cleanInputValue;
//       } else if (!isNaN(Number(cleanInputValue))) {
//         return (cleanInputValue = Number(cleanInputValue));
//       } else {
//         prompt("Enter a value please");
//       }

//       console.log(cleanInputValue + typeof cleanInputValue);
//       definedValues.push(cleanInputValue);
//       // return definedValues;
//       console.log(cleanInputValue + cleanInputValue);
//       console.log(cleanInputValue + typeof cleanInputValue);
//       definedValues.push(cleanInputValue);
//       // return definedValues;
//       console.log(cleanInputValue + cleanInputValue);
//     } else {
//     }
//     console.log(cleanInputValue + typeof cleanInputValue);
//     definedValues.push(cleanInputValue);
//     // return definedValues;
//     console.log(cleanInputValue + cleanInputValue);
//   });
//   // console.log(definedValues);
//   // let inputValues = document.querySelectorAll(".inputValues");

//   // inputValues.forEach((inputValue) => {
//   //   let cleanInputValue = inputValue.value
//   //     .toLowerCase()
//   //     .trim()
//   //     .replace(/\s+/g, "");
//   //   console.log(cleanInputValue);

//   //   if (cleanInputValue) {
//   //     console.log("exist");
//   //   } else console.log("not");
//   // });
// });

// addEventListener("submit", (event) => {
//   event.preventDefault();

//   let firstValue = document.querySelector("#dataTypeFirst").value;
//   let secondValue = document.querySelector("#dataTypeSecond").value;

//   let cleanFirstValue = firstValue.toLowerCase().trim().replace(/\s+/g, "");
//   console.log(cleanFirstValue);
//   let cleanSecondValue = secondValue.toLowerCase().trim().replace(/\s+/g, "");
//   console.log(cleanSecondValue);

//   if (cleanValue) {
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

//   console.log(cleanFirstValue + cleanSecondValue);
// });
