let codeBlock = document.querySelectorAll(".codeBlock");
console.log(codeBlock);

codeBlock.forEach((block) => {
  let codeBlockLines = block.innerHTML.split("<br>");
  console.log(codeBlockLines);
});
