baconIpsum =
  "Bacon ipsum dolor amet leberkas doner turducken chuck venison beef tail ham. Pancetta chicken picanha sirloin tongue beef pork chop tenderloin. Burgdoggen ribeye brisket, cow tail buffalo strip steak bacon. Filet mignon pork drumstick doner rump ball tip.";

cupcakeIpsum =
  "Jelly-o danish cupcake toffee dragée. Pastry shortbread sweet roll caramels soufflé.";

veggieIpsum =
  "Alfalfa sprouts vitamin glow hummus cranberry spritzer morning smoothie bowl hearts of palm macadamia nut cookies cherry bomb garlic sriracha noodles with soy milk bento box Thai tabasco pepper creamy cauliflower alfredo sauce salad Mexican fiesta. ";

function RandomCalification() {
  let random = (Math.random() * 1.8 + 3.2).toFixed(1);
  return random;
}

const recipes = [
  {
    name: "Chicken Salad",
    description: baconIpsum,

    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Easy",
    type: "Healthy",
    image: "./images/RecipeImages/chicksalad.jpg",
  },
  {
    name: "Raspberry Cake",
    description: cupcakeIpsum,
    rating: `${RandomCalification()}`,
    duration: "3 Hours",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/RecipeImages/raspcake.jpg",
  },
  {
    name: "French Toasts",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "30 Minutes",
    difficulty: "Easy",
    type: "Dessert",
    image: "./images/RecipeImages/french toast.jpg",
  },
  {
    name: "Low carb Meatballs dish",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Medium",
    type: "Healthy",
    image: "./images/RecipeImages/lowcarbMeatball.jpg",
  },
  {
    name: "Grilled Cheese Sandwich",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "30 Minutes",
    difficulty: "Easy",
    type: "Breakfast",
    image: "./images/RecipeImages/grillcheesand.jpg",
  },
  {
    name: "Healthy desserts in 5 minutes",
    description: cupcakeIpsum,
    rating: `${RandomCalification()}`,
    duration: "5 Minutes",
    difficulty: "Easy",
    type: "Healthy",
    image: "./images/RecipeImages/5mindesse.jpg",
  },
  {
    name: "Pasta Bolognese",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "1.5 Hours",
    difficulty: "Medium",
    type: "Italin food",
    image: "./images/RecipeImages/carbonPasta.jpg",
  },
  {
    name: "Salmon Florentine",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Hard",
    type: "Healthy",
    image: "./images/RecipeImages/florentine.jpg",
  },
  {
    name: "Autumn Soup",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Medium",
    type: "Healthy",
    image: "./images/RecipeImages/autumm.jpg",
  },
  {
    name: "Classic Burguer",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "40 Minutes",
    difficulty: "Medium",
    type: "Not so Healthy",
    image: "./images/RecipeImages/classicBurg.jpg",
  },
  {
    name: "Red Velvet Cupcake",
    description: cupcakeIpsum,
    rating: `${RandomCalification()}`,
    duration: "2 Hours",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/RecipeImages/redvelvet.jpg",
  },
  {
    name: "Chicken Wings",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Medium",
    type: "Not so Healthy",
    image: "./images/RecipeImages/chickenwings.jpg",
  },
  {
    name: "Avocado Toast",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "15 Minutes",
    difficulty: "Medium",
    type: "Healthy",
    image: "./images/RecipeImages/avotoast.jpg",
  },
  {
    name: "The perfect pancakes",
    description: cupcakeIpsum,
    rating: `${RandomCalification()}`,
    duration: "30 Minutes",
    difficulty: "Easy",
    type: "Dessert",
    image: "./images/RecipeImages/perfpanc.jpg",
  },
  {
    name: "Cinnamon Rolls",
    description: cupcakeIpsum,
    rating: `${RandomCalification()}`,
    duration: "2 Hour",
    difficulty: "Medium",
    type: "Dessert",
    image: "./images/RecipeImages/cinnamonRolls.jpg",
  },
  {
    name: "Grilled Ribeye",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "1.5 Hours",
    difficulty: "Medium",
    type: "Grilled",
    image: "./images/RecipeImages/Grilled Ribeye.jpg",
  },
  {
    name: "Grilled fish",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "30 Minutes",
    difficulty: "Easy",
    type: "Grilled",
    image: "./images/RecipeImages/grillFished.jpg",
  },
  {
    name: "Tomato soup and cheese scones",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Easy",
    type: "Italian Food",
    image: "./images/RecipeImages/tomatoSoupScones.jpg",
  },
  {
    name: "Maki sushi",
    description: veggieIpsum,
    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Medium",
    type: "Japanese food",
    image: "./images/RecipeImages/makisushi.jpg",
  },
  {
    name: "Spaghetti with meatballs",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "1 Hour",
    difficulty: "Medium",
    type: "Italian food",
    image: "./images/RecipeImages/spagMeatb.jpg",
  },
  {
    name: "Pepperoni Pizza",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "2 Hours",
    difficulty: "Medium/Hard",
    type: "Italian food",
    image: "./images/RecipeImages/peppPizza.jpg",
  },
  {
    name: "Healthy Omelette",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "30 Minutes",
    difficulty: "Easy",
    type: "Healthy",
    image: "./images/RecipeImages/omelette.jpg",
  },
];

const myRecipes = [
  {
    name: "Peptobismol Hotdog",
    description: "Tought it was ketchup💀",
    rating: `${RandomCalification()}`,
    duration: "2 Minutes",
    difficulty: "Easy",
    type: "Sus",
    image: "./images/RecipeImages/dog.webp",
  },
  {
    name: "Pepperoni Pizza",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "2 Hours",
    difficulty: "Medium/Hard",
    type: "Italian food",
    image: "./images/RecipeImages/peppPizza.jpg",
  },
  {
    name: "Healthy Omelette",
    description: baconIpsum,
    rating: `${RandomCalification()}`,
    duration: "30 Minutes",
    difficulty: "Easy",
    type: "Healthy",
    image: "./images/RecipeImages/omelette.jpg",
  },
];
