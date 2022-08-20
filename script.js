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

let dir1 = -1,
  dir2 = 0,
  dir3 = 1;

directionSwitchFunction();

//Target list for filters
let actualList = undefined;

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

if (localStorage.getItem("actualList") == null) {
  actualList = recipes;
} else {
  actualList = JSON.parse(localStorage.getItem("actualList"));
}

// Remember the last visited page

if (actualOption == "savedRecipes") {
  savedRecipesBtn.classList.add("clicked");
  display(actualList, sortAlphabeticOrder);
} else {
  myRecipesBtn.classList.add("clicked");
  display(actualList, sortAlphabeticOrder);
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
    actualList = recipes;
    localStorage.setItem("actualList", JSON.stringify(recipes));
    display(actualList, sortAlphabeticOrder);
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

    actualList = myRecipes;
    localStorage.setItem("actualList", JSON.stringify(myRecipes));
    display(actualList, sortAlphabeticOrder);
  }
});

function display(list, sort) {
  main.innerHTML = `<h3 class="noFoundCard">No results founds for ""</h3>`;

  if (sort == undefined) {
    list = list.sort(sortAlphabeticOrder);
  } else {
    list = list.sort(sort);
  }

  for (let i = 0; i < list.length; i++) {
    main.innerHTML += `<div class="card visible">
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

let input = document.getElementById("searchBar");

//Search bar

function showResults() {
  let noFoundCard = document.querySelector(".noFoundCard");
  let filter = input.value.toUpperCase();

  cards.forEach((card) => {
    let cardName =
      card.querySelector(".cardInfo h1").textContent.toUpperCase() ||
      card.querySelector(".cardInfo h1").innerText.toUpperCase();

    if (cardName.includes(filter)) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });

  if (document.querySelector(".card.visible") == null) {
    noFoundCard.style.display = "flex";
    noFoundCard.textContent = `No results founds for "${input.value}"`;
  } else {
    noFoundCard.style.display = "none";
  }
}

let noFoundCard = document.querySelector(".noFoundCard");
input.addEventListener("keyup", () => {
  noFoundCard.textContent = `No results founds for "${input.value}"`;
});

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
  sidebar.classList.remove("displayGrid");
  content.style.cssText =
    "grid-template-columns:auto 40px,grid-template-rows: 40px auto;";
  expandSidebarBtn.classList.add("displayFlex");
});

expandSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("displayGrid");
  expandSidebarBtn.classList.remove("displayFlex");
});

//*** *** *** *** *** *** *** Sorting *** *** *** *** *** *** *** *** //

function assignSortingIndex() {
  let l = actualList.length;
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

// EXAMPLE
//dir1    dir2      dir
//-1       0         1
//From lowest to highest

//dir1    dir2      dir
//1       0         -1
//From highest to lowest

function sortDifficulty(a, b) {
  assignSortingIndex();

  if (a.difficultyIndex == b.difficultyIndex) {
    return dir2;
  }
  if (a.difficultyIndex < b.difficultyIndex) {
    return dir1;
  }
  if (a.difficultyIndex > b.difficultyIndex) {
    return dir3;
  }
}

function sortDuration(a, b) {
  let l = actualList.length;
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
    return dir2;
  }
  if (a.durationIndex < b.durationIndex) {
    return dir1;
  }
  if (a.durationIndex > b.durationIndex) {
    return dir3;
  }
}

function sortRating(a, b) {
  if (a.rating == b.rating) {
    return dir2;
  }
  if (a.rating < b.rating) {
    return dir1;
  }
  if (a.rating > b.rating) {
    return dir3;
  }
}

function sortAlphabeticOrder(a, b) {
  if (a.name.toUpperCase() == b.name.toUpperCase()) {
    return dir2;
  }
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return dir1;
  }
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return dir3;
  }
}

// To- do  filter buttons
//filter buttons up/down interaction
//filter functions up/down

const sortBtn = document.getElementById("sortBtn");

const filterBtn = document.getElementById("filterBtn");

const sortingOptions = document.getElementById("sortingOptions");

const sortingOption = document.querySelectorAll(".sortingOption");

let filterDirection = document.getElementById("filterDirection");

sortBtn.addEventListener("click", (e) => {
  if (e.target.id == "sortBtn") {
    sortBtn.style.display = "none";
    sortingOptions.style.display = "flex";
  } else {
    return;
  }
});

//Focus out effect

document.addEventListener("click", (e) => {
  if (
    (sortingOptions.style.display =
      "flex" &&
      e.target.id != "sortingOption" &&
      e.target.id != "sortBtn" &&
      e.target.id != "filterDirection")
  ) {
    sortBtn.style.display = "flex";
    sortingOptions.style.display = "none";
  }
});

let directionSwitch = false;

sortingOption.forEach((option) => {
  option.addEventListener("click", () => {
    sortBtn.style.display = "flex";
    sortingOptions.style.display = "none";
    if (
      option.getAttribute("onclick").match(/(?<=sort)\w+/i) == "AlphabeticOrder"
    ) {
      // sortBtn.innerText = `Sort By: Alphabetic Order`;
      if (directionSwitch == false) {
        sortBtn.innerHTML = `<span class="bold">Sort By:</span>Alphabetic Order<i id="filterDirection" class="fa-solid fa-circle-down"></i>`;
      } else {
        sortBtn.innerHTML = `<span class="bold">Sort By:</span>Alphabetic Order<i id="filterDirection" class="fa-solid fa-circle-up"></i>`;
      }
    } else {
      if (directionSwitch == false) {
        sortBtn.innerHTML = `<span class="bold">Sort By:</span>${option
          .getAttribute("onclick")
          .match(
            /(?<=sort)\w+/i
          )}<i id="filterDirection" class="fa-solid fa-circle-down"></i>`;
      } else {
        sortBtn.innerHTML = `<span class="bold">Sort By:</span>${option
          .getAttribute("onclick")
          .match(
            /(?<=sort)\w+/i
          )}<i id="filterDirection" class="fa-solid fa-circle-up"></i>`;
      }
    }

    directionSwitchFunction();
    showResults();
  });
});

function directionSwitchFunction() {
  let filterDirection = document.getElementById("filterDirection");
  filterDirection.addEventListener("click", () => {
    let name =
      filterDirection.parentElement.textContent.match(/(?<=Sort By:)\w+/i)[0];

    if (directionSwitch == true) {
      directionSwitch = false;
      filterDirection.classList.remove("fa-circle-up");
      filterDirection.classList.add("fa-circle-down");
      dir1 = -1;
      dir2 = 0;
      dir3 = 1;
    } else {
      directionSwitch = true;
      filterDirection.classList.remove("fa-circle-down");
      filterDirection.classList.add("fa-circle-up");
      dir1 = 1;
      dir2 = 0;
      dir3 = -1;
    }

    if (name == "Difficulty") {
      display(actualList, sortDifficulty);
    } else if (name == "Duration") {
      display(actualList, sortDuration);
    } else if (name == "Rating") {
      display(actualList, sortRating);
    } else if (name == "Alphabetic") {
      display(actualList, sortAlphabeticOrder);
    }

    showResults();
  });
}

const popUp = document.querySelector(".popUp");
const popUpContainer = document.querySelector(".popUp div");
const popUpContent = document.querySelector(".popUp img");
const closePopUp = document.querySelector(".popUp i");

filterBtn.addEventListener("click", () => {
  if (popUp.style.display == "") {
    popUp.style.display = "none";
    popUpContainer.style.display = "none";
    popUpContent.removeAttribute("src");
  } else {
    popUpContent.setAttribute("src", "./images/popUp.gif");
    popUpContainer.style.display = "flex";
    popUp.style.display = "";
  }
});

closePopUp.addEventListener("click", () => {
  popUpContainer.style.display = "none";
  popUp.style.display = "none";
});

const bellBtn = document.querySelector(".bell");
const notiPoint = document.querySelector(".notiPoint");
const notifications = document.querySelector(".notificationsContainer");
const notification = document.querySelectorAll(".notification");

bellBtn.addEventListener("click", () => {
  if (notifications.style.display == "none") {
    notifications.style.display = "flex";
  } else {
    notifications.style.display = "none";
  }
});

notification.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("checked");
  });
});

let notiClose = notifications.querySelector("i");

notiClose.addEventListener("click", () => {
  notifications.style.display = "none";
  if (
    document.querySelectorAll(".notification").length ==
    document.querySelectorAll(".notification.checked").length
  ) {
    notiPoint.style.display = "none";
  } else {
    notiPoint.style.display = "";
  }
});
