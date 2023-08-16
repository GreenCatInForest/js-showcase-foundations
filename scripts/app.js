let allNavItems = document.querySelectorAll(".navStartersJsChallenges");
console.log(allNavItems);
let allChallengesItems = document.querySelectorAll(".challengeSection");
// console.log(allChallengesItems);

let showChallenge = (event) => {
  let clickedNavItem = event.target;
  let clickedNavItemId = clickedNavItem.id.substring(3);

  allChallengesItems.forEach((challengesItem) => {
    // console.log(challengesItem);
    if (clickedNavItemId.toLowerCase() === challengesItem.id.toLowerCase()) {
      if (challengesItem.classList.contains("startersJsChallengesHidden")) {
        challengesItem.classList.add("startersJsChallengesVisible");
        challengesItem.classList.remove("startersJsChallengesHidden");
      } else {
        challengesItem.classList.add("startersJsChallengesHidden");
        challengesItem.classList.remove("startersJsChallengesVisible");
      }
      challengesItem.classList.remove("startersJsChallengesVisible");
    }
  });
};

navCheatSheet.addEventListener("click", showChallenge);
