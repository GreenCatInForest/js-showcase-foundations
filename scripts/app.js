let basicJsFundamentalsTopics = document.querySelectorAll(
  ".basicJsFundamentalsNav"
);
console.log(basicJsFundamentalsTopics);

let navCheatSheets = document.querySelectorAll(".navCheatSheet");
console.log(navCheatSheets);

// Nav Top Menu
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
  let clickedTopNavItem = event.target;
  clickedNavItemId = clickedTopNavItem.id;
  console.log(clickedTopNavItem);
  console.log(clickedNavItemId);
  console.log("+");

  allSectionChallengesItems.forEach((allSectionChallengesItem) => {
    console.log(allSectionChallengesItem);
    if (allSectionChallengesItem.className.includes(clickedNavItemId)) {
      allSectionChallengesItem.classList.add("basicJsFundamentalsTopicVisible");
      allSectionChallengesItem.classList.remove(
        "basicJsFundamentalsTopicHidden"
      );

      // if (
      //   allSectionChallengesItem.classList.contains(
      //     "basicJsFundamentalsTopicHidden"
      //   )
      // ) {
      //   console.log("++");
      //   allSectionChallengesItem.classList.add(
      //     "basicJsFundamentalsTopicVisible"
      //   );
      //   allSectionChallengesItem.classList.remove(
      //     "basicJsFundamentalsTopicHidden"
      //   );
      // } else {
      //   allSectionChallengesItem.classList.add("startersJsChallengesHidden");
      //   allSectionChallengesItem.classList.remove(
      //     "basicJsFundamentalsTopicVisible"
      //   );
      // }
    } else if (!allSectionChallengesItem.className.includes(clickedNavItemId)) {
      console.log("--");
      allSectionChallengesItem.classList.add("basicJsFundamentalsTopicHidden");
      allSectionChallengesItem.classList.remove(
        "basicJsFundamentalsTopicVisible"
      );
    }
  });
};

// show cheat sheets

// let showCheatSheet = (event) => {
//   let clickedNavItem = event.target;
//   let clickedNavItemId = clickedNavItem.id.substring(3);

//   allChallengesItems.forEach((challengesItem) => {
//     console.log(challengesItem);
//     console.log(clickedNavItemId);
//     console.log(challengesItem.id);
// if (clickedNavItemId.toLowerCase() === challengesItem.id.toLowerCase()) {
//   if (challengesItem.classList.contains("startersJsChallengesHidden")) {
//     challengesItem.classList.add("startersJsChallengesVisible");
//     challengesItem.classList.remove("startersJsChallengesHidden");
//   } else {
//     challengesItem.classList.add("startersJsChallengesHidden");
//     challengesItem.classList.remove("startersJsChallengesVisible");
//   }
//   challengesItem.classList.remove("startersJsChallengesVisible");
// }
//   });
// };

navCheatSheets.forEach((navCheatSheet) =>
  navCheatSheet.addEventListener("click", console.log("+"))
);

basicJsFundamentalsTopics.forEach((basicJsFundamentalsTopic) =>
  basicJsFundamentalsTopic.addEventListener("click", showSection)
);
