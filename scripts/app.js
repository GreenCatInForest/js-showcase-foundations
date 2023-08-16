let basicJsFundamentalsTopic = document.querySelector(
  ".basicJsFundamentalsNav"
);
console.log(basicJsFundamentalsTopic);

let allTopNavItems = document.querySelectorAll(".basicJsFundamentalsNav");
console.log(allTopNavItems);
let allSectionChallengesItems = document.querySelectorAll(
  ".sectionChallengesItem"
);
console.log(allSectionChallengesItems);
let allNavItems = document.querySelectorAll(".navStartersJsChallenges");
console.log(allNavItems);
let allChallengesItems = document.querySelectorAll(".challengeSection");
console.log(allChallengesItems);

let showSection = (event) => {
  console.log("+");
};
// let clickedTopNavItem = event.target;
// let clickedNavItemId = clickedTopNavItem.id;
// console.log(clickedNavItemId);

//   allSectionChallengesItems.forEach((sectionItem) => {
//     // console.log(challengesItem);
//     if (clickedNavItemId.toLowerCase() === sectionItem.id.toLowerCase()) {
//       console.log("+");
//       // if (challengesItem.classList.contains("startersJsChallengesHidden")) {
//       //   challengesItem.classList.add("startersJsChallengesVisible");
//       //   challengesItem.classList.remove("startersJsChallengesHidden");
//       // } else {
//       //   challengesItem.classList.add("startersJsChallengesHidden");
//       //   challengesItem.classList.remove("startersJsChallengesVisible");
//       // }
//       // challengesItem.classList.remove("startersJsChallengesVisible");
//     }
//   });
// };

let showCheatSheet = (event) => {
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

navCheatSheet.addEventListener("click", showCheatSheet);
basicJsFundamentalsTopic.addEventListener("click", showSection);
