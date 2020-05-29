var cheerio = require("cheerio");
var axios = require("axios");

let recipeLinks = [
  'https://barefootcontessa.com/recipes/fresh-strawberry-jam',
  'https://barefootcontessa.com/recipes/sour-cream-coffee-cake',
  'https://barefootcontessa.com/recipes/easy-sticky-buns',
  'https://barefootcontessa.com/recipes/homemade-granola-updated',
  'https://barefootcontessa.com/recipes/challah-french-toast',
  'https://barefootcontessa.com/recipes/challah',
  'https://barefootcontessa.com/recipes/raspberry-corn-muffins-updated',
  'https://barefootcontessa.com/recipes/potato-pancakes-with-fried-eggs',
  'https://barefootcontessa.com/recipes/potato-bacon-frittata',
  'https://barefootcontessa.com/recipes/irish-scones',
  'https://barefootcontessa.com/recipes/short-rib-hash-eggs',
  'https://barefootcontessa.com/recipes/chocolate-pecan-scones',
  'https://barefootcontessa.com/recipes/irish-soda-bread',
  'https://barefootcontessa.com/recipes/homemade-granola-bars',
  'https://barefootcontessa.com/recipes/irish-guinness-brown-bread'
]

for (let i = 0; i < recipeLinks.length; i++) {
  console.log("scraping");
  // let recipes = [];

  axios.get(recipeLinks[i]).then(function (response) {
    // Load the HTML into cheerio
    var $ = cheerio.load(response.data);

    // Make an empty array for saving our scraped info
    var recipe = { name: "", servingSize: "", ingredients: [], photo: "", directions: [], tags: ["breakfast"], source:"barefootcontessa.com" };

    // Search reach erecipes div
    $("section.EntryPostTop").each(function (i, element) {
      // Get the title of the recipe
      var title = $(element).find("h1").text();

      var image = $(element).find("img").attr("src");

      var subtitle = $(element).find("li").text();

      var words = subtitle.split(" ");

      var number = words[1];
      var serves = number[0];

      recipe.photo = image;
      recipe.servingSize = serves;
      recipe.name = title;
    });

    $("ul.indg-list").children().each(function (i, element) {
      // Get the title of the recipe
      var rawIngredient = $(element).text();
      let words = rawIngredient.split(" ");
      
      ingredient = {amount: words[0], measurement: words[1], name: words.splice(2).join(" ")}

      recipe.ingredients.push(ingredient);
    });

    $("div.bd4").find("p").each(function (i, element) {
      var step = $(element).text().trim();
      recipe.directions.push(step);
    })

    $("p.h21").children().each(function (i, element) {
      var tag = $(element).text();
      recipe.tags.push(tag.toLowerCase());
    })
    // Log the results
    console.log(recipe);
    console.log(",");
  });
}