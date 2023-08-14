let header = document.querySelector("header");

const createHeaderTitle = () => {
  let headerTitle = document.createElement("div");
  headerTitle.innerHTML = `
  <h1>
  <a href="/index.html">Fundamental JS Challenges</a></h1><h2>Variables & Data Types</h2>`;
  header.appendChild(headerTitle);
};

const headerTitleComponent = createHeaderTitle();

const createHeaderNavigation = () => {
  let headerNav = document.createElement("nav");
  headerNav.innerHTML = `
  <ul> 
        
          <li><a href="https://java-script-various-tasks.vercel.app/index.html">Vanilla JS Challenges</a></li>
        </ul>`;
  headerNav.classList.add("topNav");
  header.appendChild(headerNav);
};

const headerNavigationComponent = createHeaderNavigation();
