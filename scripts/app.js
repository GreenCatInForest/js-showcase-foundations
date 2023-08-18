let basicJsFundamentalsTopics = document.querySelectorAll(
  ".basicJsFundamentalsNav"
);
console.log(basicJsFundamentalsTopics);

let allNavCheatSheets = document.querySelectorAll(".navCheatSheet");
console.log(allNavCheatSheets);

let allCheatSheetsItems = document.querySelectorAll(".cheatSheet");
console.log(allCheatSheetsItems);

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

let showCheatSheet = (event) => {
  let clickedNavCheatSheetItem = event.target;
  let clickedNavCheatSheetItemId = clickedNavCheatSheetItem.id.substring(3);

  allCheatSheetsItems.forEach((allCheatSheetsItem) => {
    console.log(clickedNavCheatSheetItem);
    console.log(clickedNavCheatSheetItem.id);
    console.log(allCheatSheetsItem.id);
    if (
      clickedNavCheatSheetItemId
        .toLowerCase()
        .includes(clickedNavCheatSheetItemId.toLowerCase())
    ) {
      if (
        allCheatSheetsItem.classList.contains("startersJsCheatSheetsHidden")
      ) {
        allCheatSheetsItem.classList.add("startersJsCheatSheetsVisible");
        allCheatSheetsItem.classList.remove("startersJsCheatSheetsHidden");
      } else if (
        allCheatSheetsItem.classList.contains("startersJsCheatSheetsVisible")
      ) {
        console.log("3+");
        allCheatSheetsItem.classList.add("startersJsCheatSheetsHidden");
        allCheatSheetsItem.classList.remove("startersJsCheatSheetsVisible");
      }

      allCheatSheetsItem.classList.remove("startersJsCheatSheetsVisible");
    }
  });
};

allChallengesItems.forEach((challengesItem) => {
  console.log(challengesItem);
  console.log(clickedNavItemId);
  console.log(challengesItem.id);
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

allNavCheatSheets.forEach((navCheatSheet) =>
  navCheatSheet.addEventListener("click", showCheatSheet)
);

basicJsFundamentalsTopics.forEach((basicJsFundamentalsTopic) =>
  basicJsFundamentalsTopic.addEventListener("click", showSection)
);
