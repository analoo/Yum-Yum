var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server5.js is doing
console.log("\n******************************************\n" +
            "scraping for Barefoot Contessa recipes" +
            "\n******************************************\n");

// Make a request to barefootContessa.com
axios.get("https://barefootcontessa.com/recipes/lunch").then(function(response) {

  // Load the HTML into cheerio
  var $ = cheerio.load(response.data);

  // Make an empty array for saving our scraped info
  var results = [];

  // Search reach erecipes div
  $("div.recipes").each(function(i, element) {
    // Get the link to the recipe
    var Link = $(element).find("a").attr("href");

    results.push(Link);
  });
  // Log the results
  console.log(results);
});