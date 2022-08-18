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

//*** *** *** *** *** *** *** Defaults*** *** *** *** *** *** *** *** //

let actualOption = "";

//Target list for filters
let actualList = myRecipes;

//*** *** *** *** *** *** *** Locale storage defaults*** *** *** *** *** *** *** *** //

// Get description
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

// Remember the last visited page

if (actualOption == "savedRecipes") {
  savedRecipesBtn.classList.add("clicked");
  displaySavedRecipes(sortAlphabetic);
} else {
  myRecipesBtn.classList.add("clicked");
  displayMyRecipes(sortAlphabetic);
}

savedRecipesBtn.addEventListener("click", () => {
  if (savedRecipesBtn.classList.contains("clicked")) {
    return;
  } else {
    savedRecipesBtn.classList.add("clicked");
    savedRecipesBtn.nextElementSibling.classList.remove("clicked");
    actualOption = "savedRecipes";
    localStorage.setItem("actualOption", "savedRecipes");
    //alphabetic order as the default
    displaySavedRecipes(sortAlphabetic);
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

    //alphabetic order as the default
    displayMyRecipes(sortAlphabetic);
  }
});

//Default filter could be (alphabetic order)
//Filters could be: Difficulty, Rating, time, and well alphabetic order.

function displaySavedRecipes(sort) {
  main.innerHTML = "";

  let list = undefined;

  if (sort == undefined) {
    list = recipes;
  } else {
    list = recipes.sort(sort);
  }

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

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.querySelector(".cardImg").classList.toggle("imgHover");
    });
    card.addEventListener("mouseout", () => {
      card.querySelector(".cardImg").classList.remove("imgHover");
    });
  });
}

function displayMyRecipes(sort) {
  main.innerHTML = "";

  let list = undefined;

  if (sort == undefined) {
    list = myRecipes;
  } else {
    list = myRecipes.sort(sort);
  }

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

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.querySelector(".cardImg").classList.toggle("imgHover");
    });
    card.addEventListener("mouseout", () => {
      card.querySelector(".cardImg").classList.remove("imgHover");
    });
  });
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

//*** *** *** *** *** *** ***Sidebar about me*** *** *** *** *** *** *** *** //

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

//*** *** *** *** *** *** *** Sorting *** *** *** *** *** *** *** *** //

let l = actualList.length;

function assignSortingIndex() {
  for (let i = 0; i < l; i++) {
    if (
      actualList[i].difficultyIndex == undefined ||
      actualList[i].difficultyIndex == ""
    ) {
      if (actualList[i].difficulty == "Easy") {
        actualList[i].difficultyIndex = 1;
      } else if (actualList[i].difficulty == "Medium") {
        actualList[i].difficultyIndex = 2;
      } else if (actualList[i].difficulty == "Medium/Hard") {
        actualList[i].difficultyIndex = 3;
      } else if (actualList[i].difficulty == "Hard") {
        actualList[i].difficultyIndex = 4;
      } else {
        actualList[i].difficultyIndex = "none";
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

function sortDuration(a, b) {
  for (let i = 0; i < l; i++) {
    if (actualList[i].duration.match(/minute.?/gi)) {
      actualList[i].durationIndex =
        Number(actualList[i].duration.match(/\d+(\.\d)?/g)) * 1;
    } else if (actualList[i].duration.match(/hour.?/gi)) {
      actualList[i].durationIndex =
        Number(actualList[i].duration.match(/\d+(\.\d)?/g)) * 60;
    }
  }

  if (a.durationIndex == b.durationIndex) {
    return 0;
  }
  if (a.durationIndex < b.durationIndex) {
    return -1;
  }
  if (a.durationIndex > b.durationIndex) {
    return 1;
  }
}

function sortRating(a, b) {
  if (a.rating == b.rating) {
    return 0;
  }
  if (a.rating < b.rating) {
    return -1;
  }
  if (a.rating > b.rating) {
    return 1;
  }
}

function sortAlphabetic(a, b) {
  if (a.name.toUpperCase() == b.name.toUpperCase()) {
    return 0;
  }
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  }
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1;
  }
}

// To- do  filter buttons
//filter buttons up/down interaction
//filter functions up/down

const sortBtn = document.getElementById("sortBtn");

const filterBtn = document.getElementById("filterBtn");

const sortingOptions = document.getElementById("sortingOptions");

sortBtn.addEventListener("click", () => {
  sortBtn.style.display = "none";
  sortingOptions.style.display = "flex";
});

//Focus out effect

document.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id != "sortingOption" && e.target.id != "sortBtn") {
    sortBtn.style.display = "flex";
    sortingOptions.style.display = "none";
  }
});
