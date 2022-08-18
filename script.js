const main = document.querySelector(".main");
const savedRecipesBtn = document.getElementById("savedRecipesBtn");
const myRecipesBtn = document.getElementById("myRecipesBtn");
let cards = document.querySelectorAll(".card");
const descriptionText = document.querySelector(".aboutMe textarea");
const editButton = document.querySelector(".aboutMe i");
const hideSidebarBtn = document.getElementById("hideSidebarBtn");

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const mainContent = document.querySelector(".main");
const expandSidebarBtn = document.getElementById("expandSidebar");
// Defaults
let actualOption = "";

if (localStorage.getItem("aboutMeText") == null) {
  descriptionText.value =
    "Part-time Chef\nFull time Web developer\n\nGithub.com/BrandonMasis\n\nTry editing this description";
} else {
  descriptionText.value = localStorage.getItem("aboutMeText");
}

if (localStorage.getItem("actualOption") == null) {
  actualOption = "savedRecipes";
} else {
  actualOption = localStorage.getItem("actualOption");
}

// Display or hide
if (actualOption == "savedRecipes") {
  savedRecipesBtn.classList.add("clicked");
  displaySavedRecipes();
} else {
  myRecipesBtn.classList.add("clicked");
  displayMyRecipes();
}

savedRecipesBtn.addEventListener("click", () => {
  if (savedRecipesBtn.classList.contains("clicked")) {
    return;
  } else {
    savedRecipesBtn.classList.add("clicked");
    savedRecipesBtn.nextElementSibling.classList.remove("clicked");
    actualOption = "savedRecipes";
    localStorage.setItem("actualOption", "savedRecipes");
    displaySavedRecipes();
  }
});

myRecipesBtn.addEventListener("click", () => {
  if (myRecipesBtn.classList.contains("clicked")) {
    return;
  } else {
    myRecipesBtn.classList.add("clicked");
    myRecipesBtn.previousElementSibling.classList.remove("clicked");
    actualOption = "myRecipes";
    localStorage.setItem("actualOption", "myRecipes");
    displayMyRecipes();
  }
});

function displaySavedRecipes(filter) {
  main.innerHTML = "";

  let list = recipes.sort(filter);

  for (let i = 0; i < list.length; i++) {
    main.innerHTML += `<div class="card">
          <div class="firstColumn">
            <div class="cardStats">
              <div>
                <i class="fa-solid fa-star"></i>
                <h5>
                  <span class="bold">${list[i].rating}</span>
                </h5>
              </div>
              <div>
                <i class="fa-solid fa-clock"></i>
                <h5>${list[i].duration}</h5>
              </div>
            </div>
            <div class="cardInfo">
              <h1>${list[i].name}</h1>
              <p>${list[i].description}</p>
            </div>
            <div class="cardTags">
              <div class="difficulty">${list[i].difficulty}</div>
              <div class="type">${list[i].type}</div>
            </div>
          </div>
          <div class="cardImg">
            <img src="${list[i].image}"/>
          </div>
        </div>
        `;
  }
  cards = document.querySelectorAll(".card");
}
function displayMyRecipes() {
  main.innerHTML = "";
  main.innerHTML = `<div class="card">
            <div class="firstColumn">
              <div class="cardStats">
                <div>
                  <i class="fa-solid fa-star"></i>
                  <h5>
                    <span class="bold">Decent</span>
                  </h5>
                </div>
                <div>
                  <i class="fa-solid fa-clock"></i>
                  <h5>Depends on your oven</h5>
                </div>
              </div>
              <div class="cardInfo">
                <h1>Peptobismol Hotdog</h1>
                <p>Tought it was ketchup💀</p>
              </div>
              <div class="cardTags">
                <div class="difficulty">Easy</div>
                <div class="type">It's Pink</div>
              </div>
            </div>
            <div class="cardImg">
              <img src="./images/RecipeImages/dog.webp">
            </div>
          </div>
          `;
  cards = document.querySelectorAll(".card");
}

//Search bar
function showResults() {
  let input = document.getElementById("searchBar");
  let filter = input.value.toUpperCase();
  cards.forEach((card) => {
    let cardName =
      card.querySelector(".cardInfo h1").textContent.toUpperCase() ||
      card.querySelector(".cardInfo h1").innerText.toUpperCase();

    if (cardName.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Edit description

editButton.addEventListener("click", () => {
  if (descriptionText.hasAttribute("readonly")) {
    descriptionText.removeAttribute("readonly");
    editButton.classList.replace("fa-pen-to-square", "fa-circle-check");
  } else {
    descriptionText.setAttribute("readonly", "");
    editButton.classList.replace("fa-circle-check", "fa-pen-to-square");
  }
});

descriptionText.addEventListener("keyup", () => {
  localStorage.setItem("aboutMeText", `${descriptionText.value}`);
});

hideSidebarBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
  content.style.cssText =
    "grid-template-columns:auto 40px,grid-template-rows: 40px auto;";
  expandSidebarBtn.style.display = "flex";
});

expandSidebarBtn.addEventListener("click", () => {
  sidebar.style.display = "grid";
  expandSidebarBtn.style.display = "none";
});

// function sortDifficulty(a, b) {
//   //Equal
//   if (a.difficulty == b.difficulty) {
//     return 0;
//   }

//   //Easy down
//   if (
//     a.difficulty == "Easy" &&
//     (b.difficulty == "Medium" ||
//       b.difficulty == "Medium/Hard" ||
//       b.difficulty == "Hard")
//   ) {
//     return -1;
//   }

//   //Medium down
//   if (
//     a.difficulty == "Medium" &&
//     (b.difficulty == "Medium/Hard" || b.difficulty == "Hard")
//   ) {
//     return -1;
//   }

//   //Medium up
//   if (a.difficulty == "Medium" && b.difficulty == "Easy") {
//     return 1;
//   }

//   //Medium/Hard down
//   if (a.difficulty == "Medium/Hard" && b.difficulty == "Hard") {
//     return -1;
//   }

//   //Medium/Hard up
//   if (
//     a.difficulty == "Medium/Hard" &&
//     (b.difficulty == "Easy" || b.difficulty == "Medium")
//   ) {
//     return 1;
//   }
// }

function assignSortingIndex() {
  let l = recipes.length;

  for (let i = 0; i < l; i++) {
    if (
      recipes[i].difficultyIndex == undefined ||
      recipes[i].difficultyIndex == ""
    ) {
      if (recipes[i].difficulty == "Easy") {
        recipes[i].difficultyIndex = 1;
      } else if (recipes[i].difficulty == "Medium") {
        recipes[i].difficultyIndex = 2;
      } else if (recipes[i].difficulty == "Medium/Hard") {
        recipes[i].difficultyIndex = 3;
      } else if (recipes[i].difficulty == "Hard") {
        recipes[i].difficultyIndex = 4;
      }
    }
  }
}

function sortDifficulty(a, b) {
  assignSortingIndex();

  if (a.difficultyIndex == b.difficultyIndex) {
    return 0;
  }
  if (a.difficultyIndex < b.difficultyIndex) {
    return -1;
  }
  if (a.difficultyIndex > b.difficultyIndex) {
    return 1;
  }
}
