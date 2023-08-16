const navListChallengesContainer = document.querySelector(
  ".navListChallengesContainer"
);

const fetchData = async () => {
  try {
    const response = await fetch("./data/data.json");
    console.log("Response:", response);
    return (datas = await response.json());
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchData()
  .then((datas) => {
    let basicChallengesTitleList =
      datas.challenges[0].allChallenges[0].challenge;
    console.log(basicChallengesTitleList);
    console.log(Array.isArray(basicChallengesTitleList));

    basicChallengesTitleList.forEach((basicChallengesTitleItem) => {
      let buttonTitleItem = document.createElement("button");

      buttonTitleItem.classList.add("navListChallengesButton");

      buttonTitleItem.textContent = `// ${basicChallengesTitleItem.challengeTitle}`;
      challengeLink = basicChallengesTitleItem.challengeLink;
      goToChallenge = () => {
        console.log(basicChallengesTitleItem.challengeLink);
      };
      buttonTitleItem.addEventListener("click", goToChallenge);
      navListChallengesContainer.appendChild(buttonTitleItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
