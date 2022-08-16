const main = document.querySelector(".main");
const savedRecipesBtn = document.getElementById("savedRecipesBtn");
const myRecipesBtn = document.getElementById("myRecipesBtn");
let actualOption = "savedRecipes";

savedRecipesBtn.addEventListener("click", () => {
  if (savedRecipesBtn.classList.contains("clicked")) {
    return;
  } else {
    savedRecipesBtn.classList.add("clicked");
    savedRecipesBtn.nextElementSibling.classList.remove("clicked");
    actualOption = "savedRecipes";
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
    displayMyRecipes();
  }
});

const recipes = [
  {
    name: "BBQ Pizza",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg",
  },
  {
    name: "Apple pie a very long tittle why would you",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/pie.jpg",
  },
  {
    name: "Fish",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/fish.jpg",
  },
  {
    name: "Salad",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/salad.jpg",
  },
  {
    name: "Healthy dessert in 5 minutes",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/dessert.jpg",
  },
  {
    name: "BBQ Pizza",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg",
  },
  {
    name: "Apple pie a very long tittle why would you",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/pie.jpg",
  },
  {
    name: "Fish",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/fish.jpg",
  },
  {
    name: "Salad",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/salad.jpg",
  },
  {
    name: "Healthy dessert in 5 minutes",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/dessert.jpg",
  },
  {
    name: "BBQ Pizza",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg",
  },
  {
    name: "Apple pie a very long tittle why would you",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/pie.jpg",
  },
  {
    name: "Fish",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/fish.jpg",
  },
  {
    name: "Salad",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/salad.jpg",
  },
  {
    name: "Healthy dessert in 5 minutes",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/dessert.jpg",
  },
  {
    name: "BBQ Pizza",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg",
  },
  {
    name: "Apple pie a very long tittle why would you",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/pie.jpg",
  },
  {
    name: "Fish",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/fish.jpg",
  },
  {
    name: "Salad",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "4.1/5",
    duration: "1 hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/salad.jpg",
  },
  {
    name: "Healthy dessert in 5 minutes",
    description:
      "Classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.easy thick-style pizza crust with cheese",
    rating: "3.4/5",
    duration: "2 hours",
    difficulty: "Easy",
    type: "Italian food",
    image: "./images/dessert.jpg",
  },
];

displaySavedRecipes();

function displaySavedRecipes() {
  main.innerHTML = "";
  for (let i = 0; i < recipes.length; i++) {
    main.innerHTML += `<div class="card">
          <div class="firstColumn">
            <div class="cardStats">
              <div>
                <i class="fa-solid fa-star"></i>
                <h5>
                  <span class="bold">${recipes[i].rating}</span>
                </h5>
              </div>
              <div>
                <i class="fa-solid fa-clock"></i>
                <h5>${recipes[i].duration}</h5>
              </div>
            </div>
            <div class="cardInfo">
              <h1>${recipes[i].name}</h1>
              <p>${recipes[i].description}</p>
            </div>
            <div class="cardTags">
              <div class="difficulty">${recipes[i].difficulty}</div>
              <div class="type">${recipes[i].type}</div>
            </div>
          </div>
          <div class="cardImg">
            <img src="${recipes[i].image}"/>
          </div>
        </div>
        `;
  }
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
              <img src="./images/g0q7lkk61kez.webp"/>
            </div>
          </div>
          `;
}
