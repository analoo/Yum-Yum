// Recipes
const Recipes = [
  {
    name: 'Penne Alla Vodka',
    servingSize: '4',
    ingredients: [
      { amount: '¼', measurement: 'cup', name: 'good olive oil' },        
      {
        amount: '2½',
        measurement: 'cups',
        name: 'chopped yellow onions (2 onions)'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced garlic (3 cloves)'
      },
      { amount: '1½', measurement: 'teaspoons', name: 'dried oregano' },  
      { amount: '½', measurement: 'teaspoon', name: 'red pepper flakes' },
      { amount: '1', measurement: 'cup', name: 'vodka' },
      {
        amount: '2',
        measurement: '(28-ounce)',
        name: 'cans whole peeled plum tomatoes, drained'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '¾',
        measurement: 'pound',
        name: 'penne, such as DeCecco'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'chopped fresh oregano leaves, plus extra for serving'
      },
      { amount: '1', measurement: 'cup', name: 'heavy cream' },
      {
        amount: '½',
        measurement: 'cup',
        name: 'freshly grated Parmesan cheese, plus extra for serving'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/penne-alla-vodka/_entryTopPhotoMobile/Page-159.jpg?mtime=20200413111343',
    directions: [
      'Preheat the oven to 375 degrees.',
      'Heat the oil in a medium (11-inch) Dutch oven, such as Le Creuset, over medium-low heat.  Add the onions and cook for about 5 minutes, until the onions are translucent.  Add the garlic, oregano, and red pepper flakes and cook for just one minute.  Add the vodka and simmer for 5 to 7 minutes, until the mixture is reduced by half.   With clean hands, crush each tomato into the pot.  Add 2 teaspoons of salt and ½ teaspoon of black pepper.  Cover the pot with a tight-fitting lid and bake for 1½ hours.',
      'Meanwhile, bring a large pot of water to a boil.  Add 2 tablespoons of salt and the pasta and cook according the directions on the package.  Drain and set aside.',
      'Pour the tomato mixture into a food processor fitted with the steel blade and puree until smooth.  (You can also use a blender.)  Return the tomato mixture to the pot.  Add the fresh oregano, cream, 1 teaspoon of salt, and ½ teaspoon pepper and simmer partially covered for 10 minutes.  Add the pasta to the sauce and cook for 2 more minutes.  Off the heat, stir in ½ cup of the Parmesan cheese and serve hot sprinkled with extra Parmesan and fresh oregano.'
    ],
    tags: [ 'lunch' ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Spanish Pea Soup with Crispy Ham',
    servingSize: '6',
    ingredients: [
      { amount: 'Good', measurement: 'olive', name: 'oil' },
      {
        amount: '½',
        measurement: 'cup',
        name: 'chopped shallots (2 large shallots)'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced garlic (3 cloves)'
      },
      {
        amount: '4',
        measurement: 'cups',
        name: 'chicken stock, preferably homemade'
      },
      {
        amount: '2',
        measurement: 'pounds',
        name: 'frozen peas, such as Bird’s Eye Sweet Garden'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '6',
        measurement: 'thin',
        name: 'slices Spanish Serrano ham or Italian prosciutto'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/spanish-pea-soup-with-crispy-ham/_entryTopPhotoMobile/Page-60.jpg?mtime=20200406095616',
    directions: [
      'In a deep (8 x 5-inch) heavy-bottomed saucepan, heat 2 tablespoons of olive oil over medium heat. Add the shallots and sauté for 3 to 5 minutes, stirring occasionally, until tender and lightly browned. Add the garlic and cook for 1 more minute. Add the chicken stock, frozen peas, 2 teaspoons salt, and 1 teaspoon pepper and bring to a boil. Lower the heat and simmer for 5 minutes. Purée with an immersion blender until coarsely puréed. (I like it to have some texture.) Alternatively, use a blender to purée the soup 1 cup at a time. Pour the soup back into the pot and season to taste. Depending on the saltiness of the stock, I may add up to another teaspoon of salt and - teaspoon pepper to give the soup a very bright flavor.',
      'Meanwhile, preheat the oven to 425 degrees. Place the ham in a single layer on a sheet pan and roast for 5 to 8 minutes, until crisp.',
      'Reheat the soup and serve in shallow bowls with a slice of crispy ham on top. Drizzle with a little olive oil and serve hot.'   
    ],
    tags: [ 'lunch', 'peas', 'ham', 'soup', 'spring', 'easy', 'foolproof' ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Ramen Chicken Noodle Soup',
    servingSize: '4',
    ingredients: [
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'canola or vegetable oil'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: '(1-inch) diced, scrubbed carrots (3 carrots)'
      },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'fresh ginger, peeled and minced'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced garlic (3 cloves)'
      },
      {
        amount: '7',
        measurement: 'to',
        name: '8 cups good chicken stock, preferably homemade'
      },
      {
        amount: '2',
        measurement: 'large',
        name: 'cooked chicken breasts or 1 small rotisserie chicken'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'soy sauce, such as Kikkoman'
      },
      {
        amount: '1',
        measurement: '(3-ounce)',
        name: 'package ramen noodles (discard the flavor packet)'
      },
      {
        amount: '8',
        measurement: 'ounces',
        name: 'baby bok choy, leaves separated and cleaned'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/ramen-chicken-noodle-soup/_entryTopPhotoMobile/IMG_0470.jpg?mtime=20200328101122',
    directions: [
      'Heat the oil in a large, heavy-bottomed pot over medium-low heat. Add the carrots and sauté for 5 minutes, until tender. Add the ginger and garlic and sauté for only one minute. Add 7 cups of the chicken stock, raise the heat to bring the soup to a boil, then lower the heat and simmer for 10 minutes.',
      'Meanwhile, separate the chicken meat from the bones and skin and discard everything except the meat. Shred the meat in large pieces and add it to the stock. Simmer for 5 minutes. Add the soy sauce and taste for seasonings (it will depend largely on the flavor and saltiness of your chicken stock).',
      'Open up the ramen noodles a little and add them to the stock. Cut the stalks and leaves of the bok choy in ¾-inch diagonal slices and add just the stems to the soup, simmering for 2 to 3 minutes, until the noodles and bok choy are tender. Add the leaves of the bok choy and the last cup of chicken stock, if you need more stock.  Serve hot in large shallow bowls.', 'NOTES: ',
      'If you don’t have baby bok choy, you can add any leafy vegetable, such as fresh spinach.',
      'If you don’t have fresh ginger, just leave it out.'
    ],
    tags: [ 'lunch', 'soup', 'chicken', 'ramen' ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Lentil Sausage Soup (updated)',
    servingSize: '4',
    ingredients: [
      {
        amount: '1',
        measurement: 'pound',
        name: 'French green lentils, such as le Puy'
      },
      {
        amount: '1⁄4',
        measurement: 'cup',
        name: 'good olive oil, plus extra for serving'
      },
      {
        amount: '4',
        measurement: 'cups',
        name: 'chopped yellow onions (2 to 3 onions)'
      },
      {
        amount: '4',
        measurement: 'cups',
        name: 'chopped leeks, white and light green parts (2 leeks)'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced garlic (2 large cloves)'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced fresh thyme leaves'
      },
      { amount: '1', measurement: 'teaspoon', name: 'ground cumin' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '3',
        measurement: 'cups',
        name: 'medium-diced celery (8 stalks)'
      },
      {
        amount: '3',
        measurement: 'cups',
        name: 'medium-diced carrots (4 to 6 carrots)'
      },
      {
        amount: '3',
        measurement: 'quarts',
        name: '(12 cups) chicken stock, preferably homemade'
      },
      { amount: '1⁄4', measurement: 'cup', name: 'tomato paste' },
      {
        amount: '1',
        measurement: 'pound',
        name: 'kielbasa, cut in half lengthwise and sliced 1⁄3-inch thick'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'red wine vinegar'
      },
      {
        amount: 'Freshly',
        measurement: 'grated',
        name: 'Parmesan cheese, for serving'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/lentil-sausage-soup-updated/_entryTopPhotoMobile/91-lentil-sausage-soup.jpg?mtime=20200414123325',
    directions: [
      'In a large bowl, cover the lentils with boiling water by 2 inches and allow to sit for 15 minutes. ­Drain and set aside.',      
      'Meanwhile, heat the olive oil in a large (12-inch) pot or Dutch oven, such as Le Creuset, over medium heat. Add the onions and leeks and saute for 15 minutes, stirring occasionally, until the vegetables are translucent. Add the garlic, thyme, cumin, 1 tablespoon salt, and 1½ teaspoons pepper and cook for 1 minute. Add the celery and carrots and cook for 10 minutes, stirring occasionally. Add the chicken stock, tomato paste, and reserved lentils and bring to a boil.  Reduce the heat and simmer uncovered for 1 hour, adding the kielbasa after 30 minutes. Add the red wine vinegar, taste for seasonings, and serve hot in large bowls, drizzled with olive oil and sprinkled with grated ­Parmesan cheese.'
    ],
    tags: [ 'lunch', 'lentils', 'easy', '1-pot', 'soup', 'pantry' ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Egg Salad Tartines',
    servingSize: '6',
    ingredients: [
      { amount: '12', measurement: 'extra-large', name: 'eggs' },
      { amount: '1/3', measurement: 'cup', name: 'good mayonnaise' },
      { amount: '¼', measurement: 'cup', name: 'sweet relish' },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'whole-grain mustard'
      },
      {
        amount: '1',
        measurement: 'tablespoons',
        name: 'minced fresh dill or chives, plus extra for garnish'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '6',
        measurement: 'slices',
        name: 'toasted whole grain bread'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/egg-salad-tartines/_entryTopPhotoMobile/IMG_0634_200410_111803.jpeg?mtime=20200410111803',
    directions: [
      'Boil a large pot of water and carefully lower the eggs into the water, making sure the shells don’t crack.  Lower the heat and simmer the water for 10 minutes.  Drain the water, leaving the eggs in the pot, and refill the pot with cool tap water.  Set aside until the eggs are cool enough to handle.  To peel the eggs, tap both ends of the egg on a board, then roll the egg between your hand and the board to crackle the shell.  Peel under tap water and allow the eggs to cool to room temperature.',
      'Place the eggs in the bowl of a food processor fitted with the steel blade.  Pulse the processor 10 to 12 times to break up, but not puree, the eggs.  Transfer the chopped eggs to a bowl and add the mayonnaise, relish, mustard, dill, 1½ teaspoons salt, and ¾ teaspoon pepper.  Combine lightly with a fork and taste for seasonings.',
      'Place the toasted bread on a board, spread the egg salad on thickly, and garnish with a sprig of dill or chopped chives.  Sprinkle with salt and pepper.  Serve at room temperature either whole or cut in half.'
    ],
    tags: [ 'lunch', 'eggs', 'easy', 'tartine' ],
    source: 'barefootcontessa.com'
  },
  {
    name: "Anna's Tomato Tart",
    servingSize: '6',
    ingredients: [
      { amount: 'For', measurement: 'the', name: 'crust' },
      { amount: '2½', measurement: 'cups', name: 'all-purpose flour' },
      { amount: 'Kosher', measurement: 'salt', name: '' },
      {
        amount: '12',
        measurement: 'tablespoons',
        name: '(1½ sticks) cold unsalted butter, ½-inch-diced'
      },
      { amount: '2', measurement: 'cold', name: 'extra-large egg yolks' },
      { amount: '½', measurement: 'cup', name: 'ice water' },
      {
        amount: '2½',
        measurement: 'pounds',
        name: 'dried beans, for baking the crust (optional)'
      },
      {
        amount: '2½',
        measurement: 'pounds',
        name: 'firm medium (2½-inch) tomatoes, cored and sliced ¼ inch thick'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'whole fresh parsley leaves, lightly packed'
      },
      {
        amount: '½',
        measurement: 'cup',
        name: 'coarsely chopped fresh basil leaves, lightly packed'
      },
      { amount: '3', measurement: 'large', name: 'garlic cloves' },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'fresh thyme leaves'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      { amount: '½', measurement: 'cup', name: 'good olive oil' },
      { amount: '6', measurement: 'tablespoons', name: 'Dijon mustard' },
      {
        amount: '¾',
        measurement: 'pound',
        name: 'grated Gruyère cheese (1 pound with rind)'
      },
      {
        amount: '½',
        measurement: 'cup',
        name: 'plus 2 tablespoons freshly grated Italian Parmesan cheese'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/annas-tomato-tart/_entryTopPhotoMobile/Page-78.jpg?mtime=20190718134759',
    directions: [
      'Place the flour and 1 teaspoon of salt in the bowl of a food processor fitted with the steel blade. Add the butter and pulse 12 to 15 times, until the butter is the size of peas. Add the egg yolks and pulse a few times to combine. With the motor running, add the ice water through the feed tube and pulse until the dough starts to come together. Dump onto a floured board and roll it into a flat disk. Wrap in plastic wrap and refrigerate for 30 minutes.',
      'Preheat the oven to 400 degrees. Line a sheet pan with parchment paper.',
      'Meanwhile, place the tomatoes in a large bowl. Put the parsley, basil, garlic, thyme, 1 teaspoon salt, and 1 teaspoon pepper in the bowl of a food processor fitted with the steel blade and process until finely minced. With the processor running, pour the olive oil down the feed tube and process until combined. Pour the mixture over the tomatoes and toss gently. Set aside.',
      'On a well-floured board, roll the dough out to an 11 × 17-inch rectangle and transfer it to the prepared sheet pan. Don’t worry if it doesn’t fit exactly; you want it to cover most of the bottom of the pan but it can be a little rough on the sides. Place a second sheet pan directly on the pastry and bake for 15 minutes. (You can also line the pastry with foil and fill it with dried beans.) Remove the top sheet pan (or the beans and foil). Using a dinner fork, pierce the pastry in many places. Bake for another 8 to 10 minutes, until lightly browned. Check the pastry during baking; pierce any spots that bubble up. Allow the crust to cool for 15 minutes.',
      'Lower the oven to 375 degrees. Brush the mustard on the crust with a pastry brush. Sprinkle a thick even layer of Gruyère on the pastry, reserving ½ cup for the top, and sprinkle with the ½ cup of Parmesan. Place overlapping tomatoes in rows on top. If there is a little garlic and herb mixture in the bowl, sprinkle it over the tomatoes, but if there is liquid in the bowl, strain it through a very-fine-mesh strainer, discard the liquid, and sprinkle the garlic and herb mixture on the tomatoes. Sprinkle the reserved ½ cup of Gruyère and the remaining 2 tablespoons of Parmesan on top. Bake for 30 minutes.',
      'Cool slightly, cut into squares, and serve warm or at room temperature.'
    ],
    tags: [
      'lunch',
      'lunch',
      'entertaining',
      'vegetarian',
      'summer',
      'baking',
      'tart',
      'tomato'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Buttermilk Herb Mayo',
    servingSize: '1',
    ingredients: [
      {
        amount: '1',
        measurement: 'cup',
        name: 'good mayonnaise, such as Hellmann’s'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'buttermilk, shaken'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'good white wine vinegar'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'thinly sliced scallions, white and green parts'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced fresh parsley'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced fresh chives'
      },
      {
        amount: '¹⁄8',
        measurement: 'teaspoon',
        name: 'minced fresh thyme leaves'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      }
    ],
    photo: undefined,
    directions: [
      'Whisk together the mayonnaise, buttermilk, vinegar, scallions, parsley, chives, thyme, ½ teaspoon salt, and ¼ teaspoon pepper in a medium bowl. Cover and refrigerate until ready to use.'
    ],
    tags: [ 'lunch', 'dressing' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Fried Chicken Sandwiches',
    servingSize: '6',
    ingredients: [
      { amount: '2', measurement: 'cups', name: 'buttermilk, shaken' },
      {
        amount: '1',
        measurement: 'shallot,',
        name: 'peeled, halved lengthwise, and thinly sliced crosswise'
      },
      { amount: '2', measurement: 'garlic', name: 'cloves, smashed' },
      {
        amount: '1',
        measurement: 'jalapeño',
        name: 'pepper (with seeds), halved lengthwise'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '3',
        measurement: 'small',
        name: 'skinless, boneless chicken breasts (6 ounces each)'
      },
      { amount: '3½', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '4', measurement: 'teaspoons', name: 'baking powder' },
      {
        amount: '2½',
        measurement: 'teaspoons',
        name: 'smoked Spanish paprika'
      },
      { amount: '1', measurement: 'teaspoon', name: 'cayenne pepper' },
      { amount: '1', measurement: 'teaspoon', name: 'celery salt' },
      {
        amount: '2',
        measurement: '(48-ounce)',
        name: 'bottles canola oil'
      },
      {
        amount: '6',
        measurement: 'potato',
        name: 'hamburger buns, toasted, for serving'
      },
      {
        amount: 'Buttermilk',
        measurement: 'Herb',
        name: 'Mayo, for serving (recipe linked below)'
      },
      { amount: '6', measurement: 'Bibb', name: 'lettuce leaves' },
      {
        amount: 'Kosher',
        measurement: 'dill',
        name: 'pickles, such as Claussen, thinly sliced, for serving'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/fried-chicken-sandwiches/_entryTopPhotoMobile/IMG_0293.jpg?mtime=20200228130058',
    directions: [
      'In a large bowl, whisk together the buttermilk, shallot, garlic, jalapeño, 2 teaspoons kosher salt, and 1 teaspoon black pepper. Place the chicken breasts between 2 pieces of parchment paper and, with a rolling pin or a meat mallet, pound them until they are evenly ½ inch thick. Slice each piece of chicken in half crosswise so you have 2 pieces approximately the same size. Place the chicken in the marinade, making sure each piece is well coated, cover with plastic wrap, and refrigerate for at least 8 hours or up to (but not more than) 24 hours.',
      'When ready to cook the chicken, preheat the oven to 300 degrees. Set a wire rack on a sheet pan and place them in the oven.',   
      'In a large bowl, whisk together the flour, baking powder, paprika, cayenne pepper, celery salt, 1 tablespoon kosher salt, and 1½ teaspoons black pepper and set aside.',
      'Pour oil into a medium (9-inch round × 4½-inch high) Dutch oven, such as Le Creuset, until it is 2 inches deep. Clip on a candy thermometer and heat the oil over high heat until it reaches 350 degrees. Meanwhile, lift the chicken from the marinade, dredge it in the flour mixture, submerge it again in the marinade, then again in the flour mixture, lightly shaking off the excess. Transfer the chicken to a plate or sheet pan until ready to fry.',
      'When the oil is 350 degrees, carefully lower 3 pieces only into the oil with tongs and adjust the heat to keep the oil at 350 degrees. Don’t crowd the chicken! Cook for 5 minutes, turning once to brown evenly. With a slotted spoon, transfer the chicken to the sheet pan in the oven to keep warm. Repeat with the remaining chicken. Sprinkle all the chicken with salt and keep warm for up to 15 minutes, until ready to serve.',
      'To assemble, place the bottom of each bun on a plate, spread with some of the Buttermilk Herb Mayo, then a lettuce leaf, 4 pickle slices, then a piece of chicken. Spread the underside of the top bun generously with more of the mayo and place on top of the chicken, mayo side down. Serve while the chicken is still warm.'
    ],
    tags: [ 'lunch', 'easy', 'kids', 'lunch', 'chicken' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Winter Slaw',
    servingSize: '8',
    ingredients: [
      {
        amount: '½',
        measurement: 'pound',
        name: 'large kale leaves, center rib removed (6 to 8 leaves)'
      },
      {
        amount: '6',
        measurement: 'ounces',
        name: 'Brussels sprouts, trimmed, halved, and cored'
      },
      {
        amount: '½',
        measurement: 'small',
        name: 'head radicchio, cored'
      },
      {
        amount: '¼',
        measurement: 'cup',
        name: 'freshly squeezed lemon juice (2 lemons)'
      },
      { amount: '½', measurement: 'cup', name: 'good olive oil' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '1',
        measurement: '(6-ounce)',
        name: 'chunk good Parmesan cheese'
      },
      { amount: '1', measurement: 'cup', name: 'dried cranberries' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/winter-slaw/_entryTopPhotoMobile/76-web-horizon.jpg?mtime=20160815133421',
    directions: [
      'With a very sharp chef’s knife, cut the kale, Brussels sprouts, and radicchio crosswise in thin shreds, as you would cut cabbage for coleslaw, and place them in a large bowl.',
      'In a small bowl or liquid measuring cup, whisk together the lemon juice, olive oil, 1 teaspoon salt, and ½ teaspoon pepper. Pour enough dressing on the salad to just moisten it, reserving the rest.',
      'Shave the Parmesan in big shards with a vegetable peeler. Add the cheese and dried cranberries to the salad and toss it carefully to avoid breaking up the cheese. Check for seasonings, add more vinaigrette, if necessary, and serve cold or at room temperature.' 
    ],
    tags: [
      'lunch',            'lunch',
      'salad',            'sides',
      'winter ',          'entertaining ',
      'make ahead',       'weeknight',
      'light ',           'gluten free ',
      'vegetarian ',      'kale',
      'brussels sprouts'
    ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Tomato & Eggplant Soup',
    servingSize: '6',
    ingredients: [
      { amount: 'Good', measurement: 'olive', name: 'oil' },
      {
        amount: '4½',
        measurement: 'cups',
        name: '(½-inch-diced) unpeeled eggplant (1 pound)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'chopped yellow onion (2 onions)'
      },
      { amount: '2', measurement: 'cups', name: 'chopped fennel bulb' },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'minced garlic (6 cloves)'
      },
      {
        amount: '3',
        measurement: 'cups',
        name: 'good chicken stock, preferably homemade'
      },
      {
        amount: '1',
        measurement: '(28-ounce)',
        name: 'can crushed tomatoes, preferably San Marzano'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'whole dried fennel seeds'
      },
      { amount: '1½', measurement: 'teaspoons', name: 'dried oregano' },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'fresh thyme leaves'
      },
      {
        amount: '¼',
        measurement: 'teaspoon',
        name: 'crushed red pepper flakes'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '1',
        measurement: '(28-ounce)',
        name: 'can whole peeled tomatoes, preferably San Marzano'
      },
      {
        amount: 'Freshly',
        measurement: 'grated',
        name: 'Italian Parmesan cheese, for serving'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/tomato-eggplant-soup/_entryTopPhotoMobile/soup1.jpg?mtime=20190109144844',
    directions: [
      'Heat ½ cup olive oil in a medium (10 to 11-inch) pot or Dutch oven, such as Le Creuset, over medium heat. Add the eggplant and sauté for 5 minutes, stirring frequently, until tender. Add a little more olive oil if the eggplant is sticking.',
      'Add 2 tablespoons olive oil to the pot, add the onions and fennel, and cook for 6 to 8 minutes, stirring occasionally, until the onion is tender but not browned. Add the garlic and cook for one minute, stirring often. Add the chicken stock, crushed tomatoes, fennel seeds, oregano, thyme, red pepper flakes, 1 tablespoon salt, and 2 teaspoons black pepper. Pour the can of whole tomatoes, including the liquid, into a food processor and pulse until the tomatoes are coarsely chopped. Add the tomatoes and the liquid to the pot. Bring to a boil, lower the heat, and simmer uncovered for 15 minutes, stirring occasionally. Taste for seasonings. Serve hot in large bowls sprinkled with Parmesan cheese and a drizzle of olive oil.'
    ],
    tags: [
      'lunch',     'lunch',
      'soup',      'easy',
      'light',     'make-ahead',
      'weeknight', 'eggplant',
      'tomatoes'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Lobster Cobb Salad',
    servingSize: '4',
    ingredients: [
      { amount: 'For', measurement: 'the', name: 'Vinaigrette:' },
      {
        amount: '1-1/2',
        measurement: 'tablespoons',
        name: 'Dijon mustard'
      },
      {
        amount: '1/4',
        measurement: 'cup',
        name: 'freshly squeezed lemon juice (2 lemons)'
      },
      { amount: '5', measurement: 'tablespoons', name: 'good olive oil' },
      { amount: '3/4', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '1/2',
        measurement: 'teaspoon',
        name: 'freshly ground black pepper'
      },
      { amount: 'For', measurement: 'the', name: 'Salad:' },
      { amount: '2', measurement: 'ripe', name: 'Hass avocados' },
      { amount: 'Juice', measurement: 'of', name: '1 lemon' },
      {
        amount: '1-1/2',
        measurement: 'pounds',
        name: 'cooked lobster meat, cut in 3/4-inch dice'
      },
      {
        amount: '1',
        measurement: 'pint',
        name: 'cherry tomatoes, cut in half or quarters'
      },
      { amount: '1-1/2', measurement: 'teaspoons', name: 'kosher salt' },
      {
        amount: '1/2',
        measurement: 'teaspoon',
        name: 'freshly ground black pepper'
      },
      {
        amount: '1/2',
        measurement: 'pound',
        name: 'lean bacon, fried and crumbled'
      },
      {
        amount: '3/4',
        measurement: 'cup',
        name: 'crumbled English Stilton, or other crumbly blue cheese'
      },
      {
        amount: '1',
        measurement: 'bunch',
        name: 'arugula, washed and spun dry'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/lobster-cobb-salad/_entryTopPhotoMobile/Page-50-web-horizon.jpg?mtime=20160808163844',
    directions: [
      'For the vinaigrette, whisk together the mustard, lemon juice, olive oil, salt, and pepper in a small bowl. For the salad, cut the avocados in half, remove the seed, and peel. Cut into 3/4-inch dice and toss with the lemon juice. If the arugula leaves are large, cut them in half crosswise. Put the lobster and tomatoes in a bowl. Sprinkle with the salt and pepper and toss with enough vinaigrette to moisten. Add the diced avocados, crumbled bacon, blue cheese, and arugula and toss again. Serve at room temperature.'
    ],
    tags: [
      'lunch',
      'lunch',
      'salad',
      'summer',
      'entertaining ',
      'gluten free',
      'lobster',
      'seafood',
      'bacon'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Zucchini & Goat Cheese Tart',
    servingSize: '6',
    ingredients: [
      { amount: '1¼', measurement: 'cups', name: 'all-purpose flour' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '10',
        measurement: 'tablespoons',
        name: '(1¼ sticks) cold unsalted butter, ½-inch-diced'
      },
      {
        amount: '½',
        measurement: 'teaspoon',
        name: 'white wine vinegar'
      },
      { amount: '5', measurement: 'tablespoons', name: 'ice water' },
      {
        amount: '1½',
        measurement: 'pounds',
        name: 'zucchini, unpeeled and sliced ⅛ inch thick'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'good olive oil, divided'
      },
      {
        amount: '8',
        measurement: 'ounces',
        name: 'plain creamy goat cheese, such as Montrachet, at room temperature'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'minced fresh thyme leaves'
      },
      { amount: '¼', measurement: 'teaspoon', name: 'grated lemon zest' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/zucchini-goat-cheese-tart/_entryTopPhotoMobile/87-web-horizon.jpg?mtime=20160815133722',
    directions: [
      'Place the flour, ¾ teaspoon of salt, and the butter in the bowl of a food processor fitted with the steel blade and pulse 12 to 14 times, until the butter is the size of peas. With the processor running, pour the vinegar and ice water through the feed tube and continue to process and pulse until the dough just comes together. Dump out on a floured board, form into a disk, wrap in plastic, and chill for 30 minutes.', 'Meanwhile, place the zucchini in a colander set over a plate. Toss it with 2 teaspoons of salt and set aside for 30 minutes. Spread the zucchini out on a clean dish towel, roll it up, and squeeze gently to remove some of the liquid. Put the zucchini slices into a bowl and toss with 1 tablespoon of olive oil. With a fork, mash together the goat cheese, thyme, lemon zest, ½ teaspoon salt, and ¼ teaspoon pepper and set aside.',
      'Preheat the oven to 400 degrees. Roll the dough out on a floured board to an 11-inch circle and place on a sheet pan lined with parchment paper. Spread the dough with the goat cheese mixture, leaving a ½-inch border. Lay the zucchini slices in tightly overlapping circles, starting at the very edge of the -pastry (the zucchini will shrink when it bakes). Continue over-lapping circles of zucchini until the whole tart is covered. Drizzle with the remaining tablespoon of olive oil and sprinkle with pepper. Bake for 40 to 50 minutes, until the dough is golden brown. Cut in wedges and serve hot, warm, or at room temperature.'
    ],
    tags: [
      'lunch',
      'lunch',
      'summer',
      'entertaining ',
      'make ahead ',
      'zucchini',
      'goat cheese',
      'vegetarian'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Maple-Roasted Carrot Salad',
    servingSize: '4',
    ingredients: [
      {
        amount: '2',
        measurement: 'pounds',
        name: 'carrots, preferably with leafy tops'
      },
      { amount: 'Good', measurement: 'olive', name: 'oil' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '¼',
        measurement: 'cup',
        name: 'pure Grade A maple syrup'
      },
      { amount: '2/3', measurement: 'cup', name: 'dried cranberries' },
      {
        amount: '2/3',
        measurement: 'cup',
        name: 'freshly squeezed orange juice (2 oranges)'
      },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'sherry wine vinegar'
      },
      {
        amount: '2',
        measurement: 'garlic',
        name: 'cloves, grated on a Microplane'
      },
      { amount: '6', measurement: 'ounces', name: 'baby arugula' },
      {
        amount: '6',
        measurement: 'ounces',
        name: 'goat cheese, such as Montrachet, medium-diced'
      },
      {
        amount: '2/3',
        measurement: 'cup',
        name: 'roasted, salted Marcona almonds'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/maple-roasted-carrot-salad/_entryTopPhotoMobile/MapleRoastedCarrotSalad-2-copy-final.jpg?mtime=20161018153811',
    directions: [
      'Preheat the oven to 425 degrees.',
      'Trim and scrub the carrots. If the carrots are more than 1 inch in diameter, cut them in half lengthwise. Cut the carrots in large diagonal slices 1 inch wide × 2 inches long (they will shrink when they roast) and place in a medium bowl with ¼ cup of olive oil, 1 teaspoon salt, and ½ teaspoon pepper. Toss well and transfer to two sheet pans. (If you use just one, they’ll steam instead of roasting.) Roast for 20 minutes, tossing once, until the carrots are tender. Transfer all the carrots to one of the sheet pans, add the maple syrup, toss, and roast for 10 to 15 minutes, until the edges are caramelized. Watch them carefully! Toss with a metal spatula and set aside for 10 minutes.',
      'Meanwhile, combine the cranberries and orange juice in a small saucepan, bring to a simmer, then set aside for 10 minutes.',    
      'In a small bowl, combine the vinegar, garlic, and ½ teaspoon salt. Whisk in 3 tablespoons of olive oil. Place the arugula in a large bowl and add the carrots, cranberries (with their liquid), goat cheese, almonds, and the vinaigrette. Toss with large spoons, sprinkle with salt, and serve at room temperature.'
    ],
    tags: [
      'lunch',      'lunch',
      'sides',      'salads',
      'make ahead', 'entertaining',
      'weeknight',  'easy',
      'vegetarian', 'light',
      'carrots',    'cranberries',
      'arugula',    'goat cheese'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Crunchy Iceberg Salad with Creamy Blue Cheese',
    servingSize: '4',
    ingredients: [
      { amount: 'For', measurement: 'the', name: 'Dressing:' },
      {
        amount: '4',
        measurement: 'ounces',
        name: 'Roquefort blue cheese, crumbled'
      },
      {
        amount: '⅔',
        measurement: 'cup',
        name: 'good mayonnaise, such as Hellmann’s or Best Foods'
      },
      { amount: '⅓', measurement: 'cup', name: 'plain Greek yogurt' },
      { amount: '1', measurement: 'tablespoon', name: 'sherry vinegar' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      { amount: 'For', measurement: 'the', name: 'Salad:' },
      {
        amount: '4',
        measurement: 'tender',
        name: 'inside celery stalks, trimmed and sliced crosswise ¼ inch thick'
      },
      {
        amount: '6',
        measurement: 'radishes,',
        name: 'trimmed and sliced into thin rounds'
      },
      {
        amount: '5',
        measurement: 'scallions,',
        name: 'trimmed, white and green parts sliced ¼ inch thick'
      },
      {
        amount: '1',
        measurement: 'large',
        name: 'head iceberg lettuce, wilted outer leaves removed'
      },
      {
        amount: '4',
        measurement: 'to',
        name: '6 ounces Roquefort blue cheese, crumbled'
      },
      { amount: 'Fleur', measurement: 'de', name: 'sel' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/crunchy-iceberg-salad-with-creamy-blue-cheese/_entryTopPhotoMobile/69-web-horizon.jpg?mtime=20160815123541',
    directions: [
      'For the dressing, place 4 ounces of blue cheese in a small bowl and microwave for 15 seconds, until it begins to melt. Place the mayonnaise, yogurt, warm blue cheese, sherry vinegar, ½ teaspoon salt, and ¼ teaspoon pepper in the bowl of a food processor fitted with the steel blade and process until smooth. Set aside or refrigerate until ready to use.',
      'For the salad, combine the celery, radishes, and scallions in a bowl. Slice the whole head of lettuce across to make four ¾-inch-thick round disks and place each on a dinner plate. Spoon the dressing on the lettuce and sprinkle on a quarter of the vegetable mixture. Distribute the remaining crumbled blue cheese on the salads, sprinkle with fleur de sel and pepper, and serve.'
    ],
    tags: [
      'lunch',
      'starters',
      'lunch',
      'salad',
      'entertaining ',
      'weeknight',
      'make ahead ',
      'gluten free ',
      'vegetarian',
      'blue cheese'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Broccoli & Bow Ties (updated)',
    servingSize: '6',
    ingredients: [
      { amount: 'Kosher', measurement: 'salt', name: '' },
      {
        amount: '8',
        measurement: 'cups',
        name: 'broccoli florets (4 heads)'
      },
      {
        amount: '1/2',
        measurement: 'pound',
        name: 'farfalle (bow tie) pasta'
      },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'unsalted butter'
      },
      { amount: '3', measurement: 'tablespoons', name: 'good olive oil' },
      { amount: '1', measurement: 'teaspoon', name: 'minced garlic' },
      { amount: 'Zest', measurement: 'of', name: '1 lemon' },
      {
        amount: '1/2',
        measurement: 'teaspoon',
        name: 'freshly ground black pepper'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'freshly squeezed lemon juice'
      },
      {
        amount: '1/4',
        measurement: 'cup',
        name: 'toasted pignoli (pine) nuts'
      },
      {
        amount: 'Freshly',
        measurement: 'grated',
        name: 'Parmesan cheese, optional'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/broccoli-bow-ties-updated/_entryTopPhotoMobile/205-Broccoli-and-Bow-Ties.jpg?mtime=20200319110225',
    directions: [
      'Cook the broccoli for 3 minutes in a large pot of boiling salted water. Remove the broccoli from the water with a slotted spoon or sieve. Place in a large bowl and set aside.',
      'In the same water, cook the bow-tie pasta according to the package directions, about 12 minutes. Drain well and add to the broccoli.',
      'Meanwhile, in a small sauté pan, heat the butter and oil and cook the garlic and lemon zest over medium-low heat for 1 minute. Off the heat, add 2 teaspoons salt, the pepper, and lemon juice and pour this over the broccoli and pasta. Toss well. Season to taste, sprinkle with the pignolis and cheese, if using, and serve.'
    ],
    tags: [ 'lunch' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Cauliflower Toasts',
    servingSize: '6',
    ingredients: [
      {
        amount: '1',
        measurement: 'small',
        name: 'head cauliflower (2 pounds)'
      },
      { amount: '4', measurement: 'tablespoons', name: 'good olive oil' },
      {
        amount: '¼',
        measurement: 'teaspoon',
        name: 'crushed red pepper flakes'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '12',
        measurement: 'ounces',
        name: 'Italian mascarpone cheese, at room temperature'
      },
      {
        amount: '6',
        measurement: 'ounces',
        name: 'Gruyère cheese, grated'
      },
      {
        amount: '4',
        measurement: 'ounces',
        name: 'thinly sliced prosciutto, julienned'
      },
      { amount: '¼', measurement: 'teaspoon', name: 'ground nutmeg' },
      {
        amount: '6',
        measurement: 'large',
        name: 'slices country-style bread'
      },
      { amount: 'Paprika', measurement: undefined, name: '' },
      {
        amount: 'Freshly',
        measurement: 'grated',
        name: 'Italian Parmesan cheese'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'minced fresh chives'
      },
      {
        amount: 'Flaked',
        measurement: 'sea',
        name: 'salt, such as Maldon'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/cauliflower-toasts/_entryTopPhotoMobile/348_Gart_9780804187046_art_r1.jpg?mtime=20181003125705',
    directions: [
      'Preheat the oven to 400 degrees.',
      'Turn the cauliflower upside down on a cutting board. Cut off and discard most but not all of the stems, then cut the florets into small, ½-inch clusters.  Place the florets on a sheet pan, toss them with the olive oil, red pepper flakes, 1 teaspoon salt, and ½ teaspoon black pepper, and spread them out in a single layer.  Roast for 25 to 30 minutes, tossing two or three times, until the florets are tender and randomly browned. Set aside to cool for 10 minutes.',
      'Set the oven to broil and arrange a rack 6 inches below the heat.',
      'Transfer the florets to a large mixing bowl and add the mascarpone, stirring to coat the florets evenly. Stir in the Gruyère, prosciutto, nutmeg, 1 teaspoon salt, and ½ teaspoon black pepper.',
      'Toast the bread in a toaster until lightly browned, and place in a single layer on a sheet pan lined with foil. Mound the cauliflower mixture evenly on each toast and dust with paprika. Broil the toasts for 2 to 4 minutes, until browned and bubbling. (Watch them carefully!) Transfer to plates and sprinkle with Parmesan, the chives, and sea salt. Serve hot.'
    ],
    tags: [
      'lunch',
      'lunch',
      'comfort food',
      'make ahead',
      'weeknight',
      'cauliflower',
      'prosciutto'
    ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Tuscan White Bean Soup',
    servingSize: '3',
    ingredients: [
      {
        amount: '1',
        measurement: 'pound',
        name: 'dried white cannellini beans (for canned beans, see note)'
      },
      { amount: 'Good', measurement: 'olive', name: 'oil' },
      {
        amount: '4',
        measurement: 'ounces',
        name: 'pancetta, ¼-inch diced (see note)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'chopped leeks, white and light green parts (2 leeks)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'chopped yellow onion (2 onions)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: '(½-inch) diced carrots, scrubbed (5 carrots)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: '(½-inch) diced celery (4 ribs)'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'minced garlic (6 cloves)'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'minced fresh rosemary'
      },
      {
        amount: '8',
        measurement: 'to',
        name: '10 cups chicken stock, preferably homemade'
      },
      { amount: '2', measurement: 'bay', name: 'leaves' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: 'Freshly',
        measurement: 'grated',
        name: 'Parmesan cheese'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/tuscan-white-bean-soup/_entryTopPhotoMobile/IMG_0459.jpg?mtime=20200326090410',
    directions: [
      'At least 8 hours or the night before you make the soup, place the beans in a large bowl and add enough cold water to cover the beans by 2 inches.  Refrigerate for at least 8 hours or overnight.  Drain the beans, rinse under cold running water, and drain again.  Set aside.',
      'In a large (10-inch) pot or Dutch oven such as Le Creuset, heat ¼ cup of olive oil over medium heat, add the pancetta, and sauté for 4 to 5 minutes, until browned.  Add the leeks, onions, carrots, celery, garlic, and rosemary and cook over medium-low for 10 minutes, stirring occasionally, until the vegetables are tender.  Add the beans, 8 cups of the chicken stock, bay leaves, 1 tablespoon salt, and 1 teaspoon pepper and bring to a boil.  Lower the heat and simmer, partially covered, for 1 hour and 30 minutes, until the beans are tender.  Stir occasionally, scraping the bottom of the pot.  Discard the bay leaves, cover the pot, and allow the soup to sit off the heat for 15 minutes.  Add up to 2 more cups of chicken stock if the soup is too thick.',
      'Reheat slowly, ladle into large shallow soup bowls, sprinkle with Parmesan cheese, drizzle with olive oil, and serve hot.',     
      'FOR CANNED BEANS:',
      'First, use 2 (14-ounce) cans of white cannellini beans.  Drain the beans, reserving the liquid.  Place 1 cup of the beans and ½ cup of the liquid into the bowl of a food processor fitted with the steel blade and puree.  When ready to add the beans in the recipe, stir in the puree and add the remaining drained beans (discard the remaining liquid).',
      'Second, use only 6 cups of chicken stock.',
      'Third, simmer the soup for 45 minutes, rather than 1 hour and 30 minutes.',
      'Notes: To reheat a second day, you’ll need to add some water, salt, and pepper.',
      "Use bacon if you don't have pancetta."
    ],
    tags: [ 'dinner' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Stewed Lentils & Tomatoes (updated)',
    servingSize: '6',
    ingredients: [
      { amount: 'Good', measurement: 'olive', name: 'oil' },
      {
        amount: '2',
        measurement: 'cups',
        name: 'chopped yellow onions (2 onions)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: '(½-inch) diced carrots (3 to 4 carrots)'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced garlic (3 cloves)'
      },
      {
        amount: '1',
        measurement: '(28-ounce)',
        name: 'can whole plum tomatoes'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'French green lentils (7 ounces)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'good chicken stock, preferably homemade'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'mild curry powder'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'chopped fresh thyme leaves'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'good red wine vinegar'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/stewed-lentils-tomatoes/_entryTopPhotoMobile/145.jpg?mtime=20200318175834',
    directions: [
      'Heat the 2 tablespoons of oil in a large saucepan.  Add the onions and carrots and cook over medium-low heat for 8 to 10 minutes, stirring occasionally, until the onions start to brown.  Add the garlic and cook for one minute.',
      'Meanwhile, place the tomatoes, including the juice, in the bowl of a food processor fitted with a steel blade and pulse several times until the tomatoes are roughly chopped.',
      'Add the tomatoes, lentils, chicken stock, curry, thyme, 1 tablespoon salt, and 1 teaspoon pepper to the pot.   Bring to a boil, lower the heat, and simmer, covered, for 30 to 40 minutes, until the lentils are tender.  Stir occasionally, scraping the bottom of the pot with a wooden spoon and check to be sure the liquid is simmering.  (I pull the pot halfway off the burner to keep it simmering.) Remove from the heat and allow the lentils to sit covered for another 10 minutes.  Stir in the vinegar, check the seasonings, serve hot or warm.',
      'Protips: Garlic burns easily so you want to cook it for only a minute.',
      'To remove thyme leaves from the stem, run your fingertips down the stem from top to bottom and the leaves will fall off.',      
    ],
    tags: [ 'dinner' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Hot Dogs in Puff Pastry',
    servingSize: '2',
    ingredients: [
      {
        amount: '1',
        measurement: 'to',
        name: '2 sheets puff pastry, defrosted and refrigerated'
      },
      { amount: 'Good', measurement: 'Dijon', name: 'mustard' },
      {
        amount: '4',
        measurement: 'hot',
        name: 'dogs, such as Hebrew National'
      },
      {
        amount: '1',
        measurement: 'egg',
        name: 'beaten with 1 tablespoon water, for egg wash'
      },
      {
        amount: 'Flaked',
        measurement: 'sea',
        name: 'salt, such as Maldon'
      },
      { amount: 'Freshly', measurement: 'ground', name: 'black pepper' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/hot-dogs-in-puff-pastry/_entryTopPhotoMobile/IMG_0995.jpg?mtime=20200511114551',
    directions: [
      'Preheat the oven to 375 degrees.',
      'Lay the cold puff pastry on a board and cut a 5½-inch wide strip to match the length of the hot dogs. Brush a 3-inch-wide strip of the cut pastry generously with Dijon mustard.  Place a hot dog at the end of the pastry where you brushed the mustard and roll it up and away from you one turn, until the hot dog is just encased in one layer of pastry and mustard.  Brush the next 1-inch strip of pastry with the egg wash and continue to roll the hot dog, so the pastry is completely sealed. Cut any remaining pastry across and place the hot dog, seam side down, on a sheet pan lined with parchment paper.  Prepare the remaining 3 hot dogs the same way.',        
      'Brush the pastry with egg wash and sprinkle generously with sea salt and pepper.  Bake for 15 to 20 minutes, until the pastry is nicely browned.  Serve hot with extra mustard on the side.'
    ],
    tags: [
      'dinner',
      'easy',
      'kid-friendly',
      'weeknight',
      'high low',
      'fast',
      'simple',
      'quick',
      'hotdogs'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Overnight Mac & Cheese',
    servingSize: '4',
    ingredients: [
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '8',
        measurement: 'ounces',
        name: 'elbow macaroni or cavatappi, preferably Italian'
      },
      { amount: '3', measurement: 'cups', name: 'heavy cream' },
      {
        amount: '2',
        measurement: 'cups',
        name: 'grated Gruyere, divided'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'grated sharp white Cheddar, such as Cabot, divided'
      },
      { amount: '¼', measurement: 'teaspoon', name: 'ground nutmeg' },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'melted butter, plus extra for the dish'
      },
      {
        amount: '1½',
        measurement: 'cups',
        name: 'fine fresh white bread crumbs (5 slices, crusts removed, see note)'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/overnight-mac-cheese/_entryTopPhotoMobile/IMG_0802.jpeg?mtime=20200422090604',
    directions: [
      'Twenty-four hours before you plan to serve the gratin, bring a large pot of water to a boil.  Add 2 tablespoons salt and the macaroni and cook for exactly 4 minutes.  Drain and set aside.',
      'Meanwhile, in a medium (10-inch) bowl, combine the cream, nutmeg, 1 cup of the Gruyere, ½ cup of the Cheddar, 2 teaspoons salt, and 1 teaspoon pepper.  When the pasta is done, stir it into the cream mixture, cover the bowl with plastic wrap, and refrigerate for a full 24 hours.  The pasta will absorb the cream and expand.',
      'When ready to cook, allow the mixture to sit at room temperature for about an hour.  (You can also microwave it for 4 minutes.)  Preheat the oven to 400 degrees.',
      'Butter a 2-quart gratin dish, transfer the mixture to the dish and spread it evenly.  Combine the remaining 1 cup Gruyere and ½ cup Cheddar and sprinkle it evenly on top.  Combine the bread crumbs and 2 tablespoons butter and sprinkle evenly on top.  Bake for 20 to 25 minutes, rotating halfway through, until golden brown and crusty.  Serve hot.',
      'Note: To make 1½ cups of fresh bread crumbs, remove and discard the crusts from 5 slices of white bread.  Dice the remaining bread and put it in the bowl of a food processor fitted with the steel blade and process until you have fine crumbs.'
    ],
    tags: [
      'dinner',
      'overnight',
      'gruyere',
      'macaroni',
      'kid-friendly',
      'easy',
      'make ahead'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Chicken Pot Pie',
    servingSize: '6',
    ingredients: [
      {
        amount: '3',
        measurement: 'whole',
        name: '(6 split) chicken breasts, bone-in, skin-on'
      },
      { amount: '3', measurement: 'tablespoons', name: 'good olive oil' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '5',
        measurement: 'cups',
        name: 'chicken stock, preferably homemade'
      },
      { amount: '2', measurement: 'chicken', name: 'bouillon cubes' },
      {
        amount: '12',
        measurement: 'tablespoons',
        name: '(1½ sticks) unsalted butter'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'chopped yellow onions (2 onions)'
      },
      { amount: '¾', measurement: 'cup', name: 'all-purpose flour' },
      { amount: '¼', measurement: 'cup', name: 'heavy cream' },
      {
        amount: '2',
        measurement: 'cups',
        name: 'medium-diced carrots (4 carrots), blanched for 2 minutes'
      },
      {
        amount: '1',
        measurement: '(10-ounce)',
        name: 'package frozen peas (2 cups) (not defrosted)'
      },
      {
        amount: '1½',
        measurement: 'cups',
        name: 'frozen small whole onions (not defrosted)'
      },
      { amount: '½', measurement: 'cup', name: 'minced fresh parsley' },
      {
        amount: '1',
        measurement: 'sheet',
        name: 'frozen puff pastry, defrosted in the fridge'
      },
      {
        amount: '1',
        measurement: 'egg',
        name: 'mixed with 1 tablespoon water, for egg wash'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/chicken-pot-pie/_entryTopPhotoMobile/IMG_1110.jpeg?mtime=20200520113349',
    directions: [
      'Preheat the oven to 375 degrees.',
      'Place the chicken breasts on a sheet pan and rub them with olive oil. Sprinkle generously with salt and pepper and roast for 35 to 40 minutes, until cooked through. Set aside until cool enough to handle. Separate the meat and discard the bones and skin. Dice the chicken into ¾ inch cubes. You will have 4 to 6 cups of diced chicken.',
      'In a small saucepan, heat the chicken stock and dissolve the bouillon cubes in the stock. In a large pot or Dutch oven, melt the butter and sauté the onions over medium-low heat for 10 to 15 minutes, until translucent. Add the flour and cook over low heat, stirring constantly, for 2 minutes. Add the hot chicken stock mixture and simmer over low heat for one minute, stirring constantly, until thick. Add 2 teaspoons salt, ½ teaspoon pepper, and the cream.  Stir in the chicken, carrots, peas, onions, and parsley. Spoon into a 10 x 13 x 2-inch oval or rectangular baking dish and place the dish on a sheet pan lined with aluminum foil.',
      'Unfold a sheet of puff pastry on top of the chicken and vegetable mixture and cut the pastry to fit the dish. Cut 3 slits in the pastry to allow steam to escape. Brush the pastry with the egg wash and bake for 30 to 40 minutes, until the pastry is browned and the stew is bubbly and hot. Serve hot.'
    ],
    tags: [ 'dinner' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Salmon Teriyaki & Broccolini',
    servingSize: '4',
    ingredients: [
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'vegetable oil or olive oil'
      },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'soy sauce, such as Kikkoman'
      },
      {
        amount: '1½',
        measurement: 'tablespoons',
        name: 'pure maple syrup'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'toasted sesame oil'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced fresh ginger'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced garlic (3 cloves)'
      },
      {
        amount: '¼',
        measurement: 'teaspoon',
        name: 'hot red pepper flakes'
      },
      {
        amount: '4',
        measurement: 'skinless',
        name: 'salmon fillets (2 to 2 ½ pounds total)'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '1',
        measurement: 'pound',
        name: 'broccolini, lower third of the stems discarded'
      },
      {
        amount: 'Steamed',
        measurement: 'white',
        name: 'basmati rice (recipe follows)'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'white basmati rice, such as Texmati'
      },
      { amount: '1¾', measurement: 'cups', name: 'water' },
      { amount: '1', measurement: 'tablespoon', name: 'unsalted butter' },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/salmon-teriyaki-broccolini/_entryTopPhotoMobile/IMG_0761.jpeg?mtime=20200420114838',
    directions: [
      'Preheat the oven to 400 degrees.  Arrange two racks evenly spaced in the oven.',
      'In a small saucepan, combine the vegetable oil, soy sauce, maple syrup, sesame oil, ginger, garlic, and hot red pepper flakes. Bring to a boil over medium heat, lower the heat and simmer for 3 minutes. Set aside off the heat.',
      'Arrange the salmon fillets, rounded sides up, in a baking dish just large enough to hold them with a little space in between the fillets.  Sprinkle the salmon with 1 teaspoon salt and ½ teaspoon pepper and spoon the soy sauce mixture evenly over the fillets. Roast the salmon for about 12 minutes for rare and 15 minutes for medium, depending on the thickness of the fillets.',
      'Meanwhile, prepare the broccolini. Place the broccolini on a sheet pan, drizzle it with 4 tablespoons olive oil, sprinkle with salt and pepper, and toss with your hands. Ten minutes before the salmon is done, roast the broccolini on the second oven rack until crisp/tender.',
      'Divide the hot rice between 4 shallow bowls and top each with a salmon fillet and some broccolini. Spoon the sauce from the salmon over the salmon and rice and serve hot.',
      'Combine the rice, water, butter, and salt in a medium saucepan, bring the water to a boil, lower the heat, cover, and simmer for 15 minutes, until the water is absorbed and the rice is tender and fluffy. You may have to pull the pot halfway off the burner to keep a simmer. Fluff with a fork and serve hot.'
    ],
    tags: [ 'dinner' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Crispy Mustard-Roasted Chicken',
    servingSize: '3',
    ingredients: [
      { amount: '4', measurement: 'garlic', name: 'cloves' },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'minced fresh thyme leaves'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'panko (Japanese bread flakes)'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'grated lemon zest (2 lemons)'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'good olive oil'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'unsalted butter, melted'
      },
      {
        amount: '1/2',
        measurement: 'cup',
        name: 'Dijon mustard, such as Grey Poupon'
      },
      { amount: '1/2', measurement: 'cup', name: 'dry white wine' },
      {
        amount: '1',
        measurement: '(3½-',
        name: 'to 4-pound) chicken, cut in eighths'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/crispy-mustard-roasted-chicken/_entryTopPhotoMobile/Page-116-web-horizon.jpg?mtime=20160725115747',
    directions: [
      'Preheat the oven to 350 degrees.',
      'Place the garlic, thyme, 2 teaspoons salt, and 1 teaspoon pepper in a food processor fitted with the steel blade and process until the garlic is finely minced. Add the panko, lemon zest, olive oil, and butter and pulse a few times to moisten the bread flakes. Pour the mixture onto a large plate. In a shallow bowl, whisk together the mustard and wine.',
      'Pat the chicken dry with paper towels. Sprinkle generously all over with salt and pepper. Dip each piece in the mustard mixture to coat on all sides (as you would dip chicken in beaten eggs), and then place skin-side down only into the crumb mixture, pressing gently to make the crumbs adhere. Place the chicken on a sheet pan crumb-side up. Press the remaining crumbs on the chicken pieces.', 
      'Bake the chicken for 40 minutes. Raise the heat to 400 degrees and bake for another 10 minutes, until the crumbs are browned and the chicken is cooked through. Serve hot, warm, or at room temperature.'
    ],
    tags: [
      'dinner',
      'dinner',
      "ina's favorite dinners",
      'entertaining',
      'weeknight',
      'make ahead',
      'easy',
      'kids',
      'chicken '
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Italian Wedding Soup',
    servingSize: '6',
    ingredients: [
      { amount: 'For', measurement: 'the', name: 'meatballs:' },
      { amount: '¾', measurement: 'pound', name: 'ground chicken' },
      {
        amount: '½',
        measurement: 'pound',
        name: 'chicken sausage, casings removed'
      },
      {
        amount: '2/3',
        measurement: 'cup',
        name: 'fresh white bread crumbs'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'minced garlic (2 cloves)'
      },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'chopped fresh parsley'
      },
      {
        amount: '¼',
        measurement: 'cup',
        name: 'freshly grated Pecorino Romano cheese'
      },
      {
        amount: '¼',
        measurement: 'cup',
        name: 'freshly grated Parmesan cheese, plus extra for serving'
      },
      { amount: '3', measurement: 'tablespoons', name: 'milk' },
      {
        amount: '1',
        measurement: 'extra-large',
        name: 'egg, lightly beaten'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      { amount: 'For', measurement: 'the', name: 'soup:' },
      { amount: '2', measurement: 'tablespoons', name: 'good olive oil' },
      { amount: '1', measurement: 'cup', name: 'minced yellow onion' },
      {
        amount: '1',
        measurement: 'cup',
        name: '1/4-inch-diced carrots (3 carrots)'
      },
      {
        amount: '¾',
        measurement: 'cup',
        name: '1/4-inch-diced celery (2 stalks)'
      },
      {
        amount: '10',
        measurement: 'cups',
        name: 'Homemade Chicken Stock (see link below)'
      },
      { amount: '½', measurement: 'cup', name: 'dry white wine' },
      {
        amount: '1',
        measurement: 'cup',
        name: 'small pasta such as tubetini or stars'
      },
      { amount: '¼', measurement: 'cup', name: 'minced fresh dill' },
      {
        amount: '12',
        measurement: 'ounces',
        name: 'baby spinach, washed and trimmed'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/italian-wedding-soup/_entryTopPhotoMobile/ItalianWeddingSoup_SMALL.jpg?mtime=20200123150201',
    directions: [
      'Preheat the oven to 350 degrees.',
      'For the meatballs, place the ground chicken, sausage, bread crumbs, garlic, parsley, Pecorino, Parmesan, milk, egg, 1 teaspoon salt, and 1/2 teaspoon pepper in a bowl and combine gently with a fork. With a teaspoon, drop 1- to 1 1/4-inch meatballs onto a sheet pan lined with parchment paper. (You should have about 40 meatballs. They don’t have to be perfectly round.) Bake for 30 minutes, until cooked through and lightly browned. Set aside.',
      'In the meantime, for the soup, heat the olive oil over medium- low heat in a large, heavy-bottomed soup pot. Add the onion, carrots, and celery and sauté until softened, 5 to 6 minutes, stirring occasionally. Add the chicken stock and wine and bring to a boil. Add the pasta to the simmering broth and cook for 6 to 8 minutes, until the pasta is tender. Add the fresh dill and then the meatballs to the soup and simmer for 1 minute. Taste for salt and pepper. Stir in the fresh spinach and cook for 1 minute, until the spinach is just wilted. Ladle into soup bowls and sprinkle each serving with extra grated Parmesan cheese.',
      'Click here for the recipe for Homemade Chicken Stock.'
    ],
    tags: [
      'dinner',
      'soups',
      'chicken stock',
      'meatballs',
      'chicken ',
      'dinner',
      'lunch'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Chicken Thighs with Creamy Mustard Sauce',
    servingSize: '4',
    ingredients: [
      {
        amount: '8',
        measurement: 'medium',
        name: 'bone-in, skin-on chicken thighs (2¼ pounds)'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      { amount: 'Good', measurement: 'olive', name: 'oil' },
      {
        amount: '2',
        measurement: 'cups',
        name: 'halved and thinly sliced yellow onion (2 onions)'
      },
      { amount: '2', measurement: 'tablespoons', name: 'dry white wine' },
      { amount: '8', measurement: 'ounces', name: 'crème fraîche' },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'good Dijon mustard'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'whole-grain mustard'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'chopped fresh parsley'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/chicken-thighs-with-creamy-mustard-sauce/_entryTopPhotoMobile/216_Gart_9780804187046_art_r1.jpg?mtime=20190905140841',
    directions: [
      'Place the chicken thighs on a cutting board, skin side up, and pat them dry with paper towels. Sprinkle the chicken with 1½ teaspoons salt and ¾ teaspoon pepper. Turn them over and sprinkle them with one more teaspoon of salt.',
      'Heat 1 tablespoon olive oil in a large (11 to 12-inch) cast-iron skillet over medium heat. When the oil is hot, place the chicken in the pan in one layer, skin side down. Cook over medium heat for 15 minutes without moving, until the skin is golden brown. (If the skin gets too dark, turn the heat to medium low.) Turn the chicken pieces with tongs, add the onions to the pan, including under the chicken, and cook over medium heat for 15 minutes, stirring the onions occasionally, until the thighs are cooked to 155 to 160 degrees and the onions are browned. Transfer the chicken (not the onions) to a plate and allow to rest uncovered while you make the sauce. If the onions aren’t browned, cook them for another minute.',
      'Add the wine, crème fraîche, Dijon mustard, whole-grain mustard, and 1 teaspoon salt to the skillet and stir over medium heat for one minute. Return the chicken, skin side up, and the juices to the skillet, sprinkle with parsley, and serve hot.'
    ],
    tags: [
      'dinner',
      'dinner',
      'easy',
      'gluten-free',
      'weeknight',
      'chicken',
      'mustard'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Grilled New York Strip Steaks',
    servingSize: '6',
    ingredients: [
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'light brown sugar'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'ground coffee (regular or decaf)'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: '(dried) granulated garlic'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'chipotle chile powder'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'crushed red pepper flakes'
      },
      {
        amount: '3',
        measurement: '(1½-inch-thick)',
        name: 'New York strip steaks or “club steaks”'
      },
      {
        amount: '1½',
        measurement: 'tablespoons',
        name: 'good olive oil'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/grilled-new-york-strip-steaks/_entryTopPhotoMobile/119-web-horizon.jpg?mtime=20160815124311',
    directions: [
      'In a small bowl, combine 2 tablespoons salt, 1 tablespoon black pepper, the brown sugar, coffee, garlic, chipotle powder, and red pepper flakes.  Pat the steaks dry with paper towels, place them in a baking dish, and rub them all over with the olive oil.  Sprinkle the steaks all over with the spice mix, using it all.  Cover the dish and refrigerate for at least 2 hours to allow the flavors to get into the meat.',
      'When ready to cook, heat enough charcoal to cover half of the grill (I fill a charcoal chimney ¾ full). Pour a layer of hot coals on one side of the grill, leaving the other side empty.',
      'Cook the steaks on the hot side of the grill for exactly 2 minutes on one side, turn them over, and cook for exactly 2 minutes on the other side. (Be sure your timer is accurate.) Move the steaks to the cool side of the grill, put the lid on, check to be sure the vents are open, and cook for 8 to10 minutes, until a meat thermometer inserted sideways into the middle of the steak registers between 115 degrees for rare, and 120 degrees for medium-rare, and 125 degrees for medium.  Transfer the steaks to a plate, cover the plate tightly with aluminum foil, and allow to rest for 15 minutes. Remove the foil after 15 minutes or the steaks will continue to cook!  Slice the steaks, sprinkle with salt, and serve hot or warm.',
      'Note: With a gas grill, cook the steaks for 2 minutes on each side, then turn off 1 or 2 burners and place the steaks on the cool side of the grill to cook for 10 to 12 minutes.'
    ],
    tags: [
      'dinner',
      'dinner',
      'summer',
      'entertaining ',
      'weeknight',
      'make ahead ',
      'gluten free',
      'grilling ',
      'beef '
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Chicken Marbella (updated)',
    servingSize: '6',
    ingredients: [
      { amount: '½', measurement: 'cup', name: 'good olive oil' },
      { amount: '½', measurement: 'cup', name: 'good red wine vinegar' },
      {
        amount: '1½',
        measurement: 'cups',
        name: 'large pitted prunes, such as Sunsweet'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'large green olives, pitted, such as Cerignola'
      },
      {
        amount: '½',
        measurement: 'cup',
        name: 'capers, including the juices (3½ ounces)'
      },
      { amount: '6', measurement: 'bay', name: 'leaves' },
      {
        amount: '1½',
        measurement: 'heads',
        name: 'of garlic, cloves separated, peeled, and minced'
      },
      { amount: '¼', measurement: 'cup', name: 'dried oregano' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '2',
        measurement: '(4-pound)',
        name: 'chickens, backs removed and cut in 8 pieces'
      },
      {
        amount: '½',
        measurement: 'cup',
        name: 'light brown sugar, lightly packed'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'dry white wine, such as Pinot Grigio'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/chicken-marbella-updated/_entryTopPhotoMobile/012_Gart_9780804187046_art_r1.jpg?mtime=20191107134549',
    directions: [
      'Combine the olive oil, vinegar, prunes, olives, capers, bay leaves, garlic, oregano, 2 tablespoons salt, and 2 teaspoons pepper in a large bowl. Add the chicken to the marinade. (You can also place the chicken and marinade in a 2-gallon plastic storage bag and squeeze out the air to make sure the chicken is fully covered with the marinade.) Refrigerate overnight, turning occasionally to be sure the marinade is getting into all of the chicken pieces.',
      'Preheat the oven to 350 degrees.',
      'Place the chicken, skin side up, along with the marinade in one layer in a large (15 × 18-inch) roasting pan, sprinkle with the brown sugar, 2 teaspoons salt, and 1 teaspoon pepper, and pour the wine around (not over!) the chicken. Roast for 45 to 55 minutes, until the internal temperature of the chicken is 145 degrees. Remove the pan from the oven, cover tightly with aluminum foil, and allow to rest for 10 to 15 minutes. Discard the bay leaves. Transfer the chicken, prunes, and olives to a serving platter, sprinkle with salt, and serve hot with the pan juices.'
    ],
    tags: [
      'dinner',
      'dinner',
      'entertaining',
      'chicken',
      'gluten-free',
      'easy',
      'make-ahead'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Perfect Roast Chickens (updated)',
    servingSize: '6',
    ingredients: [
      {
        amount: '2',
        measurement: '(4-pound)',
        name: 'roasting chickens'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '8',
        measurement: 'fresh',
        name: 'thyme sprigs, divided'
      },
      { amount: '2', measurement: 'lemons,', name: 'quartered, divided' },
      {
        amount: '1',
        measurement: 'head',
        name: 'of garlic, cut in half crosswise, divided'
      },
      {
        amount: '4',
        measurement: 'tablespoons',
        name: '(½ stick) unsalted butter, melted'
      },
      {
        amount: '2',
        measurement: 'large',
        name: 'yellow onions, halved and sliced crosswise'
      },
      { amount: 'Good', measurement: 'olive', name: 'oil' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/perfect-roast-chickens-updated/_entryTopPhotoMobile/IMG_0951.jpeg?mtime=20200504121719',
    directions: [
      'Preheat the oven to 425 degrees.',
      'Remove the chicken giblets from each of the chickens. Rinse the chickens inside and out and remove any excess fat and pinfeathers. Pat the outsides dry with paper towels. Place the chickens in a large roasting pan.  Liberally salt and pepper the cavities of the chickens. Stuff the cavity of each chicken with half of the thyme, half of the lemons, and half of the garlic. Brush the outside of the chickens with the butter and sprinkle them liberally with salt and pepper. Tie the legs together with kitchen string and tuck the wing tips under the body of each chicken. Scatter the onion slices around the chickens, drizzle them with olive oil, toss the onions with your hands, and distribute them around the chickens. (You want the chickens and onions to fit snugly into the pan or the onions will burn.',
      'Roast the chickens for 1¼ to 1½ hours, or until an instant-read thermometer reads 155 to 160 degrees and the juices run clear when you cut between a leg and thigh. Cover with aluminum foil and allow to rest for 15 minutes. Slice the chickens onto a platter and serve immediately with the onions and pan juices.'
    ],
    tags: [
      'dinner',
      'easy',
      'chicken',
      'roasted',
      'comfort food',
      'classic',
      'weeknight',
      'simple'
    ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Fresh Strawberry Jam',
    servingSize: '3',
    ingredients: [
      {
        amount: '3',
        measurement: 'pints',
        name: 'fresh strawberries, hulled'
      },
      { amount: '3', measurement: 'cups', name: 'granulated sugar' },
      {
        amount: '½',
        measurement: 'to',
        name: '1 Granny smith apple, peeled, cored and small-diced'
      },
      { amount: '½', measurement: 'cup', name: 'fresh blueberries' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/fresh-strawberry-jam/_entryTopPhotoMobile/IMG_1040.jpg?mtime=20200514105057',
    directions: [
      'Place the strawberries in a colander and rinse them under cold running water. Drain and hull the strawberries. Cut the larger strawberries in half or quarters and leave the small ones whole. Place the strawberries in a deep, heavy-bottomed pot such as Le Creuset and toss them with the sugar.',
      'Bring the mixture to a boil over medium heat, stirring often. Add the apple (if the strawberries are under-ripe, add half of the apple; if they are very ripe, add the whole apple) and blueberries and continue to cook the mixture at a rolling boil, stirring occasionally, until the jam reaches 220 degrees on a candy thermometer. This should take 25 to 35 minutes. Skim and discard any foam that rises to the top. Test the consistency of the jam by putting some jam on a plate and placing it in the freezer for 5 to 10 minutes, until cool, to see if it jells. If the jam doesn’t quite jell, cook it’s a little longer and test it again. Allow the mixture to cool to room temperature and then store covered in the refrigerator.  It will keep refrigerated for at least 2 weeks. To keep the jam longer, pack and seal in canning jars according to the manufacturer’s instructions.'
    ],
    tags: [ 'breakfast' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Homemade Challah',
    servingSize: 'o',
    ingredients: [
      {
        amount: '1',
        measurement: 'cup',
        name: 'warm (115 to 120 degrees) water'
      },
      {
        amount: '2',
        measurement: '(1⁄4-ounce)',
        name: 'packages active dry yeast'
      },
      { amount: '½', measurement: 'cup', name: 'sugar' },
      {
        amount: '3',
        measurement: 'extra-large',
        name: 'eggs, at room temperature'
      },
      {
        amount: '1',
        measurement: 'extra-large',
        name: 'egg yolk, at room temperature'
      },
      {
        amount: '5½',
        measurement: 'to',
        name: '6 cups all-purpose flour'
      },
      { amount: '1', measurement: 'tablespoon', name: 'kosher salt' },
      {
        amount: '¼',
        measurement: 'pound',
        name: '(1 stick) unsalted butter, diced, at room temperature'
      },
      { amount: 'Vegetable', measurement: 'oil', name: '' },
      {
        amount: '1',
        measurement: 'extra-large',
        name: 'egg beaten with 1 tablespoon water, for egg wash'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/challah/_entryTopPhotoMobile/IMG_0657.jpeg?mtime=20200417105745',     
    directions: [
      'Warm the bowl of an electric mixer fitted with the dough hook by rinsing it with hot water. Pour the warm water into the bowl (be sure it’s at least 110 degrees when it’s in the bowl), and mix in the yeast, and sugar. Allow to sit for 5 minutes, until it starts to froth, which tells you that the yeast is active. Add the eggs and egg yolk and mix on low speed. With the mixer on low, gradually add 4½ cups of the flour, scraping down the bowl as you go. With the mixer on low, add the salt and butter, then slowly add between 1 and 1½ more cups of the flour, mixing on low for about 5 minutes and continuing to add a dusting of flour to the bowl but only enough so the dough doesn’t stick to the bottom of the bowl. The dough will be soft and a little sticky.',
      'Turn the dough out onto a floured board and knead it by hand for a full 2 minutes. Roll the dough into a ball with the smooth side up. Brush a large bowl with vegetable oil and place the dough in the bowl, smooth side down. Roll the dough around to cover it with oil, then turn it smooth side up, making sure the entire dough is covered with oil to prevent a crust from forming. Cover the bowl with a clean, dry kitchen towel and allow to rise in a warm place for about 2 hours, until doubled in size.',
      'Punch the dough down lightly and turn it out onto an unfloured cutting board. With a sharp knife, cut the dough into 4 equal pieces. Line a sheet pan with parchment paper. Turn the first ball of dough smooth side up and roll it into a cylinder. Roll the dough in a rope 17 inches long and lay it, seam side down, on the parchment paper. Repeat for the other 3 balls of dough, laying them side by side on the parchment paper.',
      'To braid the dough, pile one end of the ropes on top of each other and pinch them together and fold under. With the pinched end away from you, take the far right rope and move it left over 2 ropes. Then take the far left rope and move it right over 2 ropes. Continue taking alternate ropes and laying them over 2 ropes until you’ve braided the entire bread. Pinch the ends together and fold them under. Cover the bread with a clean, dry kitchen towel and allow it to sit in a warm place for 45 to 60 minutes, until doubled in size.',
      'Meanwhile, preheat the oven to 350 degrees. Place an oven rack in the lower third of the oven. Brush the bread thoroughly with the egg wash and bake for 35 to 40 minutes, until the outside is browned and it sounds hollow when you tap the bottom. Place the challah on a baking rack and cool completely.',
      'Make Challah French Toast the next day!'
    ],
    tags: [ 'breakfast', 'bread', 'easy', 'twofer' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Sour Cream Coffee Cake',
    servingSize: '8',
    ingredients: [
      { amount: 'For', measurement: 'the', name: 'cake:' },
      {
        amount: '12',
        measurement: 'tablespoons',
        name: '(1½ sticks) unsalted butter, at room temperature'
      },
      { amount: '1½', measurement: 'cups', name: 'granulated sugar' },
      {
        amount: '3',
        measurement: 'extra-large',
        name: 'eggs, at room temperature'
      },
      {
        amount: '1½',
        measurement: 'teaspoons',
        name: 'pure vanilla extract'
      },
      {
        amount: '1¼',
        measurement: 'cups',
        name: 'sour cream, at room temperature'
      },
      {
        amount: '2½',
        measurement: 'cups',
        name: 'cake flour (see note)'
      },
      { amount: '2', measurement: 'teaspoons', name: 'baking powder' },
      { amount: '½', measurement: 'teaspoon', name: 'baking soda' },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: 'For', measurement: 'the', name: 'streusel:' },
      {
        amount: '¼',
        measurement: 'cup',
        name: 'light brown sugar, lightly packed'
      },
      { amount: '½', measurement: 'cup', name: 'all-purpose flour' },
      {
        amount: '1',
        measurement: '½',
        name: 'teaspoons ground cinnamon'
      },
      { amount: '¼', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'cold unsalted butter, diced'
      },
      {
        amount: '¾',
        measurement: 'cup',
        name: 'chopped walnuts or pecans'
      },
      { amount: 'For', measurement: 'the', name: 'glaze:' },
      { amount: '½', measurement: 'cup', name: 'confectioners’ sugar' },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'pure maple syrup'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/sour-cream-coffee-cake/_entryTopPhotoMobile/IMG_0967.jpeg?mtime=20200507103625',
    directions: [
      'Preheat the oven to 350 degrees. Grease and flour a 10-inch tube pan.',
      'Cream the butter and sugar in the bowl of an electric mixer fitted with the paddle attachment for 4 to 5 minutes, until light. Add the eggs one at a time, then add the vanilla and sour cream. In a separate bowl, sift together the flour, baking powder, baking soda, and salt. With the mixer on low, add the flour mixture to the batter until just combined. Finish stirring with a spatula to be sure the batter is well mixed.',
      'For the streusel, place the brown sugar, flour, cinnamon, salt, and butter in a bowl and pinch together with your fingers until it forms a crumble. Mix in the walnuts.',
      'Spoon half the batter into the pan and spread it out with a knife. Sprinkle with 3/4 cup streusel. Spoon the rest of the batter in the pan, spread it out, and scatter the remaining streusel on top. Bake for 45 to 55 minutes, until a cake tester comes out clean.',
      'Allow to cool on a wire rack for 30 minutes. Carefully transfer the cake, streusel-side up, onto a serving plate. Whisk the confectioners’ sugar and maple syrup together, adding a few drops of water, if necessary, to make the glaze thick but runny. Drizzle the glaze over the cake with a small spoon. Serve at room temperature.',
      'Notes: If you don’t have cake flour, you can substitute 2¼ cups all-purpose flour plus ¼ cup cornstarch.',
      'If the eggs are cold, place the whole eggs in a bowl of warm water for 5 minutes before cracking them.'
    ],
    tags: [ 'breakfast' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Short Rib Hash & Eggs',
    servingSize: '4',
    ingredients: [
      {
        amount: '1',
        measurement: 'pound',
        name: 'Yukon Gold potatoes, unpeeled, ¾-inch diced'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'good white wine vinegar'
      },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '4',
        measurement: 'ounces',
        name: 'thick-cut applewood-smoked bacon, ½-inch diced'
      },
      { amount: 'Good', measurement: 'olive', name: 'oil' },
      {
        amount: '2',
        measurement: 'cups',
        name: 'sliced yellow onion (2 onions)'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: '(1-inch-diced) cooked boneless short ribs'
      },
      {
        amount: '6',
        measurement: 'ounces',
        name: 'Brussels sprouts, halved, cored, and thinly sliced'
      },
      { amount: '½', measurement: 'teaspoon', name: 'Sriracha' },
      { amount: '1', measurement: 'tablespoon', name: 'unsalted butter' },
      { amount: '4', measurement: 'extra-large', name: 'eggs' },
      {
        amount: '4',
        measurement: '(½-inch-thick)',
        name: 'slices bread from a country loaf, toasted'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'minced fresh chives, for serving'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/short-rib-hash-eggs/_entryTopPhotoMobile/235_Gart_9780804187046_art_r1.jpg?mtime=20190613130305',
    directions: [
      'Place the potatoes in a medium saucepan and add water to cover by 2 inches, plus the vinegar and 2 teaspoons salt. Bring to a boil, lower the heat, and simmer for 5 minutes. Drain and set aside.',
      'Meanwhile, heat a large (12-inch) sauté pan over medium heat, add the bacon, and sauté for 6 to 8 minutes, until lightly browned. Transfer the bacon to a plate using a slotted spoon. Put the potatoes in the sauté pan and cook over medium to medium-high heat, tossing occasionally with a spatula, for 6 to 8 minutes, until the potatoes are lightly browned. If the pan is dry, add a few tablespoons olive oil. Return the bacon to the pan and add the onions, 2 teaspoons salt, and 1 teaspoon pepper, toss well, and cook over medium heat for 8 minutes, tossing occasionally. Add the short ribs, Brussels sprouts, and Sriracha, and cook for 3 to 4 minutes, tossing occasionally, until heated through and the sprouts are crisp-tender.',
      'Meanwhile, melt the butter in a medium (10-inch) sauté pan. Carefully crack 4 eggs into the opposite corners of the pan, sprinkle with salt and pepper, and cook over medium heat for 3 to 4 minutes, until the whites are almost cooked. Cover the pan and cook over low heat for one minute, until the whites are set but the yolks are still runny.',
      'Spoon the hash onto 4 dinner plates, place each egg on a piece of toast, and place one on each plate.',
      'Sprinkle with chives and salt and serve hot.'
    ],
    tags: [
      'breakfast',
      'breakfast',
      'brunch',
      'entertaining',
      'eggs',
      'brussels sprouts ',
      'bacon',
      'easy',
      'holiday',
      'weekend'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Potato Pancakes with Fried Eggs',
    servingSize: '4',
    ingredients: [
      {
        amount: '4',
        measurement: 'large',
        name: 'baking potatoes (2 pounds)'
      },
      {
        amount: '2',
        measurement: 'extra-large',
        name: 'eggs, lightly beaten'
      },
      {
        amount: '6',
        measurement: 'tablespoons',
        name: 'flour or matzo meal'
      },
      { amount: '2', measurement: '1/2', name: 'teaspoons kosher salt' },
      {
        amount: '1/2',
        measurement: 'teaspoon',
        name: 'freshly ground black pepper, plus extra for garnish'
      },
      {
        amount: '6',
        measurement: 'tablespoons',
        name: 'clarified butter (see note)'
      },
      { amount: '4', measurement: 'extra-large', name: 'eggs' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/potato-pancakes-with-fried-eggs/_entryTopPhotoMobile/IMG_5901_200409_122438.jpg?mtime=20200409122438',
    directions: [
      'Peel the potatoes and grate them lengthwise. Place them in a colander or kitchen towel and squeeze out as much liquid as possible. Combine the potatoes in a bowl with the egg, flour, salt, and pepper. Mix well.',
      'Melt 2 tablespoons of clarified butter in a skillet. Drop a heaping tablespoon of the potato mixture into the sizzling butter. Flatten with a spatula and cook for 2 minutes. Turn, flatten again, and cook for another 2 minutes, until crisp on the outside and golden brown. Move to a plate lined with a paper towel while you finish cooking the pancakes. In the same pan, use the remaining butter to fry the eggs, cooking two at a time, until the yolk is a runny or jammy, as desired.  Serve 3 – 4 potato pancakes on a plate with a fried egg on top.  Sprinkle with salt and pepper serve hot.',
      'Note: To make 6 tablespoons of clarified butter, slowly melt 8 tablespoons of butter in a small saucepan. Set it aside until the milk solids settle. Spoon off any solids that rise to the top and then carefully pour off the golden liquid, leaving the milky part in the bottom of the pan. Clarified butter has a higher burning temperature than melted butter.'
    ],
    tags: [ 'breakfast', 'potato', 'easy', 'eggs' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Challah French Toast',
    servingSize: '8',
    ingredients: [
      { amount: '6', measurement: 'extra-large', name: 'eggs' },
      {
        amount: '1½',
        measurement: 'cups',
        name: 'half-and-half or milk'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'grated orange zest'
      },
      { amount: '1', measurement: 'tablespoon', name: 'good honey' },
      {
        amount: '½',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '1',
        measurement: 'large',
        name: 'loaf of challah or brioche bread'
      },
      { amount: 'Unsalted', measurement: 'butter', name: '' },
      { amount: 'Vegetable', measurement: 'oil', name: '' },
      { amount: 'To', measurement: 'serve:', name: '' },
      { amount: 'Pure', measurement: 'maple', name: 'syrup' },
      {
        amount: 'Good',
        measurement: 'raspberry',
        name: 'preserves (optional)'
      },
      {
        amount: 'Sifted',
        measurement: 'confectioners’',
        name: 'sugar (optional)'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/challah-french-toast/_entryTopPhotoMobile/IMG_0753.jpeg?mtime=20200417111531',
    directions: [
      'Preheat the oven to 250 degrees.',
      'In a large shallow dish, whisk together the eggs, half-and-half, orange zest, honey, vanilla, and salt. Slice the challah in 3/4-inch-thick slices. Soak as many slices in the egg mixture as possible for 5 minutes, turning once.',
      'Heat 1 tablespoon butter and 1 tablespoon oil in a very large sauté pan over medium heat. Add the soaked bread and cook for 2 to 3 minutes on each side, until nicely browned.  Place the cooked French toast on a sheet pan and keep it warm in the oven. Fry the remaining soaked bread slices, adding butter and oil as needed, until it’s all cooked.  Serve hot with maple syrup, raspberry preserves, and/or confectioners’ sugar.'
    ],
    tags: [ 'breakfast', 'french toast', 'brunch' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Easy Sticky Buns (updated)',
    servingSize: '1',
    ingredients: [
      {
        amount: '12',
        measurement: 'tablespoons',
        name: '(1½ sticks) unsalted butter, at room temperature'
      },
      {
        amount: '1/3',
        measurement: 'cup',
        name: 'light brown sugar, lightly packed'
      },
      {
        amount: '½',
        measurement: 'cup',
        name: 'pecans, chopped in large pieces'
      },
      {
        amount: '1',
        measurement: 'package',
        name: '(17.3 ounces/ 2 sheets) frozen puff pastry, such as Pepperidge Farm, defrosted'
      },
      { amount: 'For', measurement: 'the', name: 'filling:' },
      {
        amount: '2',
        measurement: 'tablespoon',
        name: 'unsalted butter, melted and cooled'
      },
      {
        amount: '2/3',
        measurement: 'cups',
        name: 'light brown sugar, lightly packed'
      },
      { amount: '3', measurement: 'teaspoons', name: 'ground cinnamon' },
      { amount: '1', measurement: 'cup', name: 'raisins' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/easy-sticky-buns/_entryTopPhotoMobile/IMG_0920.jpeg?mtime=20200501113619',
    directions: [
      'Preheat the oven to 400 degrees. Place a 12-cup standard muffin tin on a sheet pan lined with parchment paper.',
      'In the bowl of an electric mixer fitted with the paddle attachment, combine 12 tablespoons of butter and 1/3 cup brown sugar. Place 1 tablespoon of the mixture in each of the 12 muffin cups. Distribute the pecans evenly between the 12 muffin cups on top of the butter & sugar mixture.',
      'Lightly flour a wooden board or stone surface. Unfold one sheet of puff pastry with the folds going left to right.  Brush the whole sheet with half of the melted butter. Leaving a 1-inch border on the puff pastry, sprinkle each sheet with 1/3 cup of brown sugar, 1½ teaspoons of cinnamon, and ½ cup of raisins. Starting with the end nearest you, roll the pastry up snugly like a jelly roll around the filling, finishing the roll with the seam-side down. Trim the ends of the roll about ½ inch and discard. Slice the roll in 6 equal pieces. Place each piece, spiral side up, in 6 of the muffin cups. Repeat with the second piece of puff pastry.',
      'Bake for 25 to 30 minutes, until the sticky buns are golden brown on top and firm to the touch. Be careful – they’re hot! Allow to cool for 5 minutes only, invert the buns onto the parchment paper (ease the filling and pecans out onto the buns with a small spoon) and cool completely.'
    ],
    tags: [
      'breakfast',    'breakfast',
      'brunch',       'holiday ',
      'entertaining', 'easy',
      'make ahead ',  'vegetarian',
      'kids',         'baking'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Irish Scones',
    servingSize: '1',
    ingredients: [
      {
        amount: '4',
        measurement: 'cups',
        name: 'plus 1 tablespoon all-purpose flour'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'sugar, plus additional for sprinkling'
      },
      { amount: '2', measurement: 'tablespoons', name: 'baking powder' },
      { amount: '4', measurement: 'teaspoons', name: 'kosher salt' },
      {
        amount: '3/4',
        measurement: 'pound',
        name: 'cold unsalted butter, diced'
      },
      {
        amount: '4',
        measurement: 'extra-large',
        name: 'eggs, lightly beaten'
      },
      { amount: '1', measurement: 'cup', name: 'cold heavy cream' },
      { amount: '3/4', measurement: 'cup', name: 'dried currants' },
      {
        amount: '1',
        measurement: 'egg',
        name: 'beaten with 2 tablespoons water or milk, for egg wash'
      },
      {
        amount: 'Clotted',
        measurement: 'cream',
        name: 'and strawberry jam, for serving'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/irish-scones/_entryTopPhotoMobile/IMG_0335.jpg?mtime=20200317090516', 
    directions: [
      'Preheat the oven to 400 degrees.',
      'In the bowl of an electric mixer fitted with a paddle attachment, combine 4 cups of flour, 2 tablespoons sugar, the baking powder, and salt. Add the butter and mix on the lowest speed until the butter is the size of peas.  Beat together the eggs and heavy cream and, with the mixer on low, quickly add them to the flour-and-butter mixture, combining just until blended. Toss the currants with 1 tablespoon flour, add them to the dough, and mix quickly to distribute the currants through the dough. The dough may be a quite sticky.',
      'Dump the dough out onto a well-floured surface and knead quickly to be sure it is well combined. Flour your hands and a rolling pin and roll the dough 3/4-inch thick. You should see lumps of butter in the dough. Cut into circles with a 3-inch plain round cutter and place the circles on a sheet pan lined with parchment paper.',
      'Brush the tops of the dough with egg wash. Sprinkle with sugar and bake for 20 to 25 minutes, until the tops are browned and the insides are fully baked. Serve warm with clotted cream and jam.'
    ],
    tags: [ 'breakfast', 'scones', 'tea', 'breakfast' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Homemade Granola (updated)',
    servingSize: '1',
    ingredients: [
      {
        amount: '4',
        measurement: 'cups',
        name: 'old-fashioned rolled oats'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'sweetened, shredded coconut'
      },
      { amount: '2', measurement: 'cups', name: 'sliced almonds' },
      { amount: '¾', measurement: 'cup', name: 'vegetable oil' },
      { amount: '½', measurement: 'cup', name: 'good honey' },
      {
        amount: '1½',
        measurement: 'cups',
        name: 'small-diced dried apricots'
      },
      { amount: '1', measurement: 'cup', name: 'small-diced dried figs' },
      { amount: '1', measurement: 'cup', name: 'dried cherries' },
      { amount: '1', measurement: 'cup', name: 'dried cranberries' },
      {
        amount: '1',
        measurement: 'cup',
        name: 'roasted, unsalted cashews'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/homemade-granola-updated/_entryTopPhotoMobile/IMG_0796.jpg?mtime=20200422104636',
    directions: [
      'Preheat the oven to 350 degrees.  (Be sure your oven is accurate!)',
      'Toss the oats, coconut, and almonds together in a large bowl.  Whisk together the oil and honey in a 2-cup measuring cup.  Pour the oil mixture over the oat mixture and stir with a wooden spoon until all the oats and nuts are coated.  Pour onto a sheet pan and spread the mixture out in an even layer.  Bake for 30 to 35 minutes, tossing every 10 minutes with a large metal spatula, until nicely and evenly browned.',
      'Set the granola aside to cool, stirring every 5 minutes, until it’s room temperature.  Meanwhile, combine the apricots, figs, cherries, cranberries, and cashews.  When the granola is cool, stir in the dried fruit mixture and serve at room temperature (see note).',
      'Notes: If you want the roasted oat mixture to stay crisp, store it separately from the dried fruit mixture in airtight containers at room temperature and combine as needed.',
      'If you only have raw cashews, roast them at 350 degrees for 10 to 15 minutes, until nicely browned.  (You can roast them in the same oven with the granola.)'
    ],
    tags: [ 'breakfast', 'granola', 'snack', 'healthy', 'easy' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Chocolate Pecan Scones',
    servingSize: '1',
    ingredients: [
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'plus 4 cups all-purpose flour, divided'
      },
      {
        amount: '1½',
        measurement: 'cups',
        name: 'medium-diced bittersweet chocolate, such as Lindt (8 ounces)'
      },
      { amount: '1', measurement: 'cup', name: 'chopped pecans' },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'sugar, plus additional for sprinkling'
      },
      { amount: '2', measurement: 'tablespoons', name: 'baking powder' },
      { amount: '4', measurement: 'teaspoons', name: 'kosher salt' },
      {
        amount: '¾',
        measurement: 'pound',
        name: 'cold unsalted butter, ½-inch diced'
      },
      { amount: '1', measurement: 'cup', name: 'cold heavy cream' },
      {
        amount: '4',
        measurement: 'extra-large',
        name: 'eggs, lightly beaten'
      },
      {
        amount: '1',
        measurement: 'egg',
        name: 'beaten with 2 tablespoons water or cream, for egg wash'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/chocolate-pecan-scones/_entryTopPhotoMobile/114_Gart_9780804187046_art_r1.jpg?mtime=20190502102849',
    directions: [
      'Preheat the oven to 400 degrees. Arrange two racks evenly spaced in the oven. Line two sheet pans with parchment paper.',       
      'In a small bowl, combine the 3 tablespoons flour with the chocolate and pecans and set aside.',
      'In the bowl of an electric mixer fitted with the paddle attachment, combine the 4 cups flour, the sugar, baking powder, and salt. Add the butter and, with the mixer on low speed, blend until the butter is the size of peas. Measure the cream in a 2-cup glass measuring cup, add the eggs, and beat until combined. With the mixer still on low, pour the wet mixture into the dry mixture and combine just until blended. Add the chocolate and pecan mixture and mix just until combined. The dough will be very sticky.',
      'Dump the dough out onto a very well-floured surface and knead it a few times to be sure the chocolate and pecans are well distributed, adding a little flour so the dough doesn’t stick to the board. Flour your hands and a rolling pin and roll the dough ¾ to 1 inch thick. You should see lumps of butter in the dough. Cut the dough with a 3-inch plain round cutter and place the scones on the prepared sheet pans. Re-roll the scraps and cut out more scones. Brush the tops with the egg wash, sprinkle with sugar, and bake for 20 minutes, switching the pans halfway through, until the tops are lightly browned and the insides are fully baked. Serve warm or at room temperature.'
    ],
    tags: [
      'breakfast',
      'breakfast',
      'brunch',
      'baking',
      'scones',
      'chocolate',
      'pecans',
      'vegetarian'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Irish Guinness Brown Bread',
    servingSize: 'o',
    ingredients: [
      {
        amount: '1',
        measurement: 'cup',
        name: 'quick-cooking oats (not instant), such as McCann’s, plus extra for sprinkling'
      },
      {
        amount: '2¼',
        measurement: 'cups',
        name: 'whole wheat flour, such as Heckers'
      },
      { amount: '¼', measurement: 'cup', name: 'all-purpose flour' },
      {
        amount: '½',
        measurement: 'cup',
        name: 'dark brown sugar, lightly packed'
      },
      { amount: '2¼', measurement: 'teaspoons', name: 'baking soda' },
      { amount: '1', measurement: 'teaspoon', name: 'baking powder' },
      { amount: '2', measurement: 'teaspoons', name: 'kosher salt' },
      {
        amount: '1',
        measurement: '(11-',
        name: 'to 12-ounce) bottle Guinness extra stout beer, at room temperature'
      },
      { amount: '1', measurement: 'cup', name: 'buttermilk, shaken' },
      {
        amount: '5',
        measurement: 'tablespoons',
        name: 'unsalted butter, melted, plus extra for brushing the pan'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      {
        amount: 'Salted',
        measurement: 'butter,',
        name: 'such as Irish Kerrygold'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/irish-guinness-brown-bread/_entryTopPhotoMobile/IrishGuinessBrownBread_jmd2.jpg?mtime=20170316132232',
    directions: [
      'Preheat the oven to 450 degrees.',
      'In a large bowl, combine the oats, whole wheat flour, all-purpose flour, brown sugar, baking soda, baking powder, and salt. In a separate bowl, whisk together the beer, buttermilk, melted butter, and vanilla. Make a well in the dry ingredients and pour the wet ingredients into the well. With your fingers, stir the batter from the middle of the bowl to the outside, until it’s well mixed. It will look more like cake batter than bread dough.',
      'Brush a 9 × 5 × 2½-inch loaf pan with melted butter. Pour the batter into the pan and sprinkle the top with oats. Put the bread in the oven, immediately turn the temperature down to 400 degrees, and bake for 45 minutes, until a toothpick comes out clean. Turn the bread out onto a baking rack and allow to cool completely. Slice and serve with salted butter.'
    ],
    tags: [
      'breakfast',
      'breakfast',
      'bread & cheese',
      'baking',
      'bars',
      'brunch',
      'easy',
      'vegetarian',
      'irish'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Irish Soda Bread',
    servingSize: '1',
    ingredients: [
      {
        amount: '4',
        measurement: 'cups',
        name: 'all-purpose flour, plus extra for currants'
      },
      { amount: '4', measurement: 'tablespoons', name: 'sugar' },
      { amount: '1', measurement: 'teaspoon', name: 'baking soda' },
      { amount: '1½', measurement: 'teaspoons', name: 'kosher salt' },
      {
        amount: '4',
        measurement: 'tablespoons',
        name: '(1/2 stick) cold unsalted butter, cut into ½-inch diced'
      },
      {
        amount: '1¾',
        measurement: 'cups',
        name: 'cold buttermilk, shaken'
      },
      {
        amount: '1',
        measurement: 'extra-large',
        name: 'egg, lightly beaten'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'grated orange zest'
      },
      { amount: '1', measurement: 'cup', name: 'dried currants' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/irish-soda-bread/_entryTopPhotoMobile/235-Irish-Soda-Bread.jpg?mtime=20190313125553',
    directions: [
      'Preheat the oven to 375 degrees.  Line a sheet pan with parchment paper.',
      'Combine the flour, sugar, baking soda, and salt in the bowl of an electric mixer fitted with the paddle attachment.  Add the butter and mix on low speed until the butter is mixed into the flour.',
      'With a fork, lightly beat the buttermilk, egg, and orange zest together in a measuring cup.  With the mixer on low speed, slowly add the buttermilk mixture to the flour mixture.  Combine the currants with 1 tablespoon of flour and mix into the dough.  It will be very wet.',
      'Dump the dough onto a well-floured board and knead it a few times into a round loaf.  Place the loaf on the prepared sheet pan and lightly cut an X into the top of the bread with a serrated knife.  Bake for 45 to 55 minutes, or until a cake tester comes out clean.  When you tap the loaf, it will have a hollow sound.',
      'Cool on a baking rack.  Serve warm or at room temperature.'
    ],
    tags: [
      'breakfast',
      'breakfast',
      'bread',
      'make ahead',
      'vegetarian',
      'baking',
      'irish'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Potato Bacon Frittata',
    servingSize: '8',
    ingredients: [
      { amount: '1', measurement: 'tablespoon', name: 'good olive oil' },
      {
        amount: '2',
        measurement: 'ounces',
        name: 'bacon, diced (2 thick-cut strips)'
      },
      {
        amount: '8',
        measurement: 'tablespoons',
        name: '(1 stick) unsalted butter, divided'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'unpeeled and 1/2-inch-diced Yukon Gold potatoes'
      },
      { amount: '8', measurement: 'extra-large', name: 'eggs' },
      {
        amount: '14',
        measurement: 'ounces',
        name: 'ricotta cheese (store bought or recipe below)'
      },
      {
        amount: '¾',
        measurement: 'pound',
        name: 'Gruyère cheese, grated'
      },
      { amount: '½', measurement: 'cup', name: 'whole milk' },
      {
        amount: 'Kosher',
        measurement: 'salt',
        name: 'and freshly ground black pepper'
      },
      {
        amount: '½',
        measurement: 'cup',
        name: 'minced scallions, white and green parts'
      },
      { amount: '1/3', measurement: 'cup', name: 'all-purpose flour' },
      { amount: '¾', measurement: 'teaspoon', name: 'baking powder' },
      { amount: '4', measurement: 'cups', name: 'whole milk' },
      { amount: '2', measurement: 'cups', name: 'heavy cream' },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'good white wine vinegar'
      }
    ],
    photo: undefined,
    directions: [
      'Preheat the oven to 350 degrees.',
      'Heat the olive oil in a medium (10-inch) oven-proof sauté pan with sloping sides over medium-low heat, add the bacon, and sauté over medium-low heat for 3 to 5 minutes, until browned.  Remove the bacon from the pan with a slotted spoon and set aside.',
      'Discard all but 2 tablespoons of fat in the pan and add 3 tablespoons of the butter.   Add the potatoes and fry them for 10 to 12 minutes, until cooked through and lightly browned, turning occasionally.  Melt the remaining 5 tablespoons of butter in a small dish in the microwave.',
      'Meanwhile, whisk the eggs in a large bowl, then stir in the ricotta, Gruyère, melted butter, milk, scallions, 2 teaspoons salt, and 1 teaspoon pepper.   Combine the flour and baking powder and stir into the egg mixture.',
      'Add the bacon back to the pan and spread the potatoes and bacon out in a single layer.  Pour  over the egg mixture, smoothing the top.  Place the pan in the center of the oven and bake for 50 to 55 minutes, until the frittata is browned and puffed and a knife inserted in the middle comes out clean. Serve hot.',
      'Set a fine mesh sieve over a deep bowl.  Dampen 2 pieces of cheesecloth with water and line the sieve with a double layer of the cheesecloth.',
      'Pour the milk and cream into a stainless-steel pot and stir in the salt.  Bring to a full boil over medium heat, stirring occasionally.  Turn off the heat and pour in the vinegar.  Allow the mixture to sit for one minute until it curdles.  It will separate into thick parts (the curds) and milky parts (the whey).',
      'Pour the mixture into the cheesecloth-lined sieve and allow it to drain into the bowl at room temperature for 20 to 30 minutes, occasionally discarding the liquid that collects in the bowl.  Transfer the ricotta to a bowl, discarding the cheesecloth and any remaining liquid.  Use immediately or cover with plastic wrap and refrigerate. The ricotta will keep refrigerated for 4 to 5 days.'     
    ],
    tags: [ 'breakfast' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Raspberry Corn Muffins (updated)',
    servingSize: '1',
    ingredients: [
      { amount: '3', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '1', measurement: 'cup', name: 'sugar' },
      {
        amount: '1',
        measurement: 'cup',
        name: 'fine cornmeal, such as Quaker'
      },
      { amount: '2', measurement: 'tablespoons', name: 'baking powder' },
      { amount: '2', measurement: 'teaspoons', name: 'salt' },
      { amount: '1½', measurement: 'cups', name: 'whole milk' },
      {
        amount: '½',
        measurement: 'pound',
        name: 'unsalted butter, melted'
      },
      { amount: '2', measurement: 'extra-large', name: 'eggs' },
      {
        amount: '¾',
        measurement: 'cup',
        name: 'good raspberry preserves'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/raspberry-corn-muffins-updated/_entryTopPhotoMobile/IMG_0724.jpeg?mtime=20200416114055',
    directions: [
      'Preheat the oven to 350 degrees.  Grease the top of a muffin pan and fill each cup with a paper liner.',
      'In a large bowl, combine the flour, sugar, cornmeal, baking powder, and salt. In a separate bowl, combine the milk, melted butter, and eggs. Pour the wet ingredients into the dry ones and stir with a rubber spatula just until the ingredients are blended. Set the batter aside for 10 minutes to allow the ingredients to rest. With a standard ice cream scoop (you can also use a spoon), place a rounded scoop of batter into the paper liners, filling each one to the top. Bake for 25 to 30 minutes, until the tops are lightly browned and a toothpick comes out clean. Cool slightly and transfer the cupcakes to a cooling rack.  Allow to cool for 10 minutes.',     
      'Spoon the raspberry preserves into a pastry bag fitted with a large round tip.  Push the tip of the bag through the top of the muffin and squeeze 1 to 2 tablespoons of preserves into the middle of each muffin.  Serve warm or at room temperature.'
    ],
    tags: [ 'breakfast' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Homemade Granola Bars',
    servingSize: '1',
    ingredients: [
      { amount: '2', measurement: 'cups', name: 'old-fashioned oatmeal' },
      { amount: '1', measurement: 'cup', name: 'sliced almonds' },
      {
        amount: '1',
        measurement: 'cup',
        name: 'shredded coconut, loosely packed'
      },
      { amount: '½', measurement: 'cup', name: 'toasted wheat germ' },
      {
        amount: '3',
        measurement: 'tablespoons',
        name: 'unsalted butter'
      },
      { amount: '2/3', measurement: 'cup', name: 'honey' },
      {
        amount: '1/4',
        measurement: 'cup',
        name: 'light brown sugar, lightly packed'
      },
      {
        amount: '1',
        measurement: '½',
        name: 'teaspoons pure vanilla extract'
      },
      { amount: '¼', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: '½', measurement: 'cup', name: 'chopped pitted dates' },
      { amount: '½', measurement: 'cup', name: 'chopped dried apricots' },
      { amount: '½', measurement: 'cup', name: 'dried cranberries' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/homemade-granola-bars/_entryTopPhotoMobile/243-homemade-granola-bar.jpg?mtime=20180906120930',
    directions: [
      'Preheat the oven to 350 degrees. Butter an 8 x 12-inch baking dish and line it with parchment paper.',
      'Toss the oatmeal, almonds, and coconut together on a sheet pan and bake for 10 to 12 minutes, stirring occasionally, until lightly browned. Transfer the mixture to a large mixing bowl and stir in the wheat germ.',
      'Reduce the oven temperature to 300 degrees.',
      'Place the butter, honey, brown sugar, vanilla, and salt in a small saucepan and bring to a boil over medium heat. Cook and stir for a minute, then pour over the toasted oatmeal mixture. Add the dates, apricots, and cranberries and stir well.',
      'Pour the mixture into the prepared pan. Wet your fingers and lightly press the mixture evenly into the pan. Bake for 25 to 30 minutes, until light golden brown. Cool for at least 2 to 3 hours before cutting into squares. Serve at room temperature.'
    ],
    tags: [
      'breakfast',  'breakfast',
      'make ahead', 'light',
      'kids',       'vegetarian',
      'baking',     'granola',
      'oats',       'nuts'
    ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Triple Chocolate Loaf Cakes',
    servingSize: '2',
    ingredients: [
      {
        amount: '16',
        measurement: 'tablespoons',
        name: '(2 sticks) unsalted butter, at room temperature'
      },
      {
        amount: '2',
        measurement: 'cups',
        name: 'plus 2 tablespoons all-purpose flour, divided'
      },
      { amount: '1', measurement: 'cup', name: 'boiling water' },
      {
        amount: '5',
        measurement: 'ounces',
        name: 'bittersweet chocolate, such as Lindt, roughly chopped'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'unsweetened cocoa powder, such as Pernigotti'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'instant coffee granules, such as Nescafé'
      },
      { amount: '1', measurement: 'teaspoon', name: 'baking powder' },
      { amount: '1½', measurement: 'teaspoons', name: 'kosher salt' },
      {
        amount: '1',
        measurement: 'cup',
        name: 'roughly chopped walnuts'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'semisweet chocolate chips'
      },
      { amount: '1', measurement: 'cup', name: 'granulated sugar' },
      {
        amount: '1',
        measurement: 'cup',
        name: 'dark brown sugar, lightly packed'
      },
      {
        amount: '3',
        measurement: 'extra-large',
        name: 'eggs, at room temperature'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'pure vanilla extract'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/triple-chocolate-loaf-cakes/_entryTopPhotoMobile/triple-chocolate-cake-2.jpg?mtime=20181213133049',
    directions: [
      'Preheat the oven to 350 degrees. Grease two (8½ × 4½ × 2½-inch) loaf pans, line the bottoms with parchment paper, then grease and flour the pans.',
      'Pour the boiling water into a 2-cup glass measuring cup, add the bitter-sweet chocolate, cocoa powder, and coffee granules, andstir until the chocolate melts. Set aside to cool for at least 15 minutes.',
      'In a medium bowl, sift together the 2 cups flour, the baking powder, and salt and set aside. In another bowl, combine the walnuts, chocolate chips, and the 2 tablespoons flour and set aside.',
      'In the bowl of an electric mixer fitted with the paddle attachment, beat the butter, granulated sugar, and brown sugar together on medium speed for 2 minutes. With the mixer on low, add the eggs, one at a time, and then the vanilla, scraping down the bowl with a rubber spatula. Alternately in thirds, add the flour mixture and the chocolate mixture, beginning and ending with the flour. Fold in the nut mixture with a rubber spatula.',
      'Divide the batter equally between the prepared pans, smooth the tops, and bake for 45 to 55 minutes, until a toothpick inserted in the middle comes out clean. (Test in a few places because you might hit a warm chocolate chip.) Cool in the pans for 30 minutes, turn out on a cooling rack, rounded side up, and allow to cool to room temperature.'
    ],
    tags: [
      'dessert',
      'make-ahead',
      'entertaining',
      'holiday',
      'cake',
      'baking',
      'chocolate',
      'gifts'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Perfect Poached Fruit',
    servingSize: '1',
    ingredients: [
      { amount: '1', measurement: '(750', name: 'ml) bottle vin santo' },
      { amount: '1', measurement: '1/2', name: 'cups sugar' },
      { amount: '1', measurement: 'large', name: 'cinnamon stick' },
      { amount: '6', measurement: 'whole', name: 'cloves' },
      { amount: '1', measurement: 'vanilla', name: 'bean' },
      {
        amount: 'Zest',
        measurement: 'of',
        name: '1 orange, julienned'
      },
      { amount: 'Zest', measurement: 'of', name: '1 lemon, julienned' },
      { amount: '10', measurement: 'whole', name: 'Bosc pears' },
      {
        amount: '1',
        measurement: '1/2',
        name: 'cups large dried figs'
      },
      {
        amount: '1',
        measurement: '1/2',
        name: 'cups large dried apricots'
      },
      {
        amount: '3/4',
        measurement: 'cup',
        name: 'large dried pitted prunes'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/perfect-poached-fruit/_entryTopPhotoMobile/67-perfect-poached-fruit.jpg?mtime=20180321133044',
    directions: [
      'Place the vin santo, sugar, cinnamon, cloves, vanilla bean, and zests in a large, shallow saucepan with 2 cups of water. Bring to a boil, then reduce the heat to low and simmer for 10 minutes.',
      'Peel the pears, leaving the stems intact, and scoop out the seeds from the bottom with an apple corer or melon baller. Lay half the pears on their sides in the poaching liquid and simmer for 20 minutes, carefully turning the pears once with a spoon. Remove with a slotted spoon. Poach the remaining pears in the same liquid. Snip off the hard stems from the figs with scissors. Add the figs, apricots, prunes, and the first batch of poached pears and simmer 5 to 10 more minutes, until the pears and the dried fruit are all tender.',
      'Chill the pears, dried fruit, zests, and poaching liquid. Remove the cinnamon, cloves, and vanilla before serving if you like.' 
    ],
    tags: [
      'dessert',     'dessert',
      'winter',      'entertaining',
      'holiday',     'light',
      'gluten-free', 'vegetarian',
      'fruit',       'wine',
      'make ahead',  'easuy'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Fresh Fig & Ricotta Cake',
    servingSize: '8',
    ingredients: [
      {
        amount: '10',
        measurement: 'tablespoons',
        name: '(1¼ sticks) unsalted butter, at room'
      },
      { amount: '1', measurement: 'cup', name: 'granulated sugar' },
      {
        amount: '3',
        measurement: 'extra-large',
        name: 'eggs, at room temperature'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'fresh whole milk ricotta, at room temperature'
      },
      { amount: '2', measurement: 'tablespoons', name: 'sour cream' },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      { amount: '½', measurement: 'teaspoon', name: 'grated lemon zest' },
      { amount: '1¼', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '1', measurement: 'tablespoon', name: 'baking powder' },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '8',
        measurement: 'large',
        name: '(or 12 medium) fresh figs, stems removed, quartered through the stem'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'turbinado sugar, such as Sugar in the Raw'
      },
      { amount: 'Crème', measurement: 'fraîche,', name: 'for serving' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/fresh-fig-ricotta-cake/_entryTopPhotoMobile/120_Gart_9780804187046_art_r1.jpg?mtime=20181017132720',
    directions: [
      'Preheat the oven to 375 degrees. Butter and flour a 9-inch round springform pan, tapping out the excess flour.',
      'Place the butter and granulated sugar in the bowl of an electric mixer fitted with the paddle attachment and beat on medium speed for 3 minutes, until light and fluffy, scraping down the bowl with a rubber spatula. With the mixer on medium low, add the eggs, one at a time, scraping down the bowl and mixing until smooth. Add the ricotta, sour cream, vanilla, and lemon zest and mix until combined. Don’t worry; the ricotta will make it look lumpy.',
      'In a small bowl, sift together the flour, baking powder, and salt. With the mixer on low, slowly add the dry ingredients to the batter, mixing just until combined. Pour the batter into the prepared pan and smooth the top. Arrange the figs on the cake, cut sides up, in snug but not -overlapping concentric circles. Sprinkle with the turbindo sugar and bake for 35 to 45 minutes, until the top is lightly browned and a toothpick inserted in the center comes out clean.',
      'Allow the cake to cool in the pan on a baking rack for 15 to 20 minutes, transfer to a cake plate, and serve warm with crème fraîche on the side.'
    ],
    tags: [
      'dessert',
      'dessert',
      'make-ahead',
      'entertaining',
      'easy',
      'cake',
      'figs',
      'baking',
      'ricotta'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Raspberry Crumble Bars',
    servingSize: '9',
    ingredients: [
      {
        amount: '1/2',
        measurement: 'pound',
        name: '(2 sticks) unsalted butter, at room temperature'
      },
      { amount: '3/4', measurement: 'cup', name: 'sugar' },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      {
        amount: '2-1/3',
        measurement: 'cups',
        name: 'all-purpose flour'
      },
      { amount: '1/2', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '10',
        measurement: 'to',
        name: '12 ounces good raspberry jam, such as Hero'
      },
      {
        amount: '2/3',
        measurement: 'cup',
        name: 'good granola without dried fruit'
      },
      { amount: '1/4', measurement: 'cup', name: 'sliced almonds' },
      {
        amount: 'Confectioners’',
        measurement: 'sugar,',
        name: 'for sprinkling'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/raspberry-crumble-bars/_entryTopPhotoMobile/Page-211-web-horizon.jpg?mtime=20160725151208',
    directions: [
      'Preheat the oven to 350 degrees.',
      'Place the butter and sugar in the bowl of an electric mixer fitted with the paddle attachment and mix on medium speed just until combined. With the mixer on low, add the vanilla.',
      'Sift the flour and salt together and, with the mixer on low, slowly add to the butter mixture, mixing until it almost comes together in a ball. Turn the dough out on a board. Lightly pat two-thirds of the dough evenly on the bottom of a 9-inch square baking pan and about ¼ inch up the sides. Spread with the jam, leaving a ¼-inch border. Mix the granola into the remaining dough with your hands. Break the dough into small bits and distribute it on top of the jam, covering most of the surface. Sprinkle the almonds on top. Bake the bars for 45 minutes, until lightly browned.',
      'Cool completely and cut into 9 or 12 bars. Sprinkle lightly with confectioners’ sugar.'
    ],
    tags: [
      'dessert',
      'dessert',
      'entertaining ',
      'make ahead ',
      'vegetarian ',
      'kids ',
      'baking',
      'raspberries'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Frozen Hot Chocolate',
    servingSize: '4',
    ingredients: [
      {
        amount: '4',
        measurement: 'ounces',
        name: 'bittersweet chocolate, such as Lindt'
      },
      {
        amount: '1½',
        measurement: 'tablespoons',
        name: 'unsweetened cocoa powder, such as Pernigotti'
      },
      { amount: '1½', measurement: 'tablespoons', name: 'sugar' },
      { amount: '½', measurement: 'cup', name: 'half-and-half' },
      { amount: '1½', measurement: 'cups', name: 'whole milk' },
      {
        amount: '4',
        measurement: 'tablespoons',
        name: 'coffee liqueur, such as Kahlúa, or brewed espresso'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      { amount: '4', measurement: 'cups', name: 'ice' },
      {
        amount: 'Sweetened',
        measurement: 'Whipped',
        name: 'Cream, for serving (see recipe)'
      },
      {
        amount: 'Grated',
        measurement: 'bittersweet',
        name: 'chocolate, for garnish'
      },
      { amount: 'Straws,', measurement: 'for', name: 'serving' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/frozen-hot-chocolate/_entryTopPhotoMobile/100_FrozenHotChoc_003-copy.jpg?mtime=20170214140648',
    directions: [
      'Break the bittersweet chocolate into pieces and place it in a medium bowl set over a pot of simmering water, stirring occasionally, until just melted. Off the heat, whisk in the cocoa powder, sugar, and half-and-half and set aside',
      'Place ¾ cup of the milk, 2 tablespoons of the coffee liqueur, ½ teaspoon of the vanilla, and half of the chocolate mixture in a blender. Add 2 cups of the ice and blend for several minutes, until the mixture is thick but not icy, like a frozen daiquiri. (You can add a little more milk or ice if it’s too thick or too thin.) Pour into two (10-ounce) ice cream soda glasses and top each with a generous dollop of whipped cream and some grated chocolate. Repeat for the second two glasses. Serve ice cold with straws and long-handled spoons.'
    ],
    tags: [
      'dessert',
      'dessert ',
      'entertaining',
      'weeknight',
      'easy',
      'gluten free',
      'vegetarian',
      'chocolate'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Raspberry Baked Alaska',
    servingSize: '6',
    ingredients: [
      {
        amount: '1',
        measurement: '(1-pound)',
        name: 'store-bought pound cake'
      },
      {
        amount: '1',
        measurement: 'pint',
        name: 'good raspberry sorbet, such as Ciao Bella'
      },
      {
        amount: '1',
        measurement: 'pint',
        name: 'good vanilla ice cream, such as Häagen-Dazs'
      },
      { amount: 'for', measurement: 'the', name: 'swiss meringue' },
      { amount: '8', measurement: 'extra-large', name: 'egg whites' },
      { amount: '1½', measurement: 'cups', name: 'sugar' },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'pure vanilla extract'
      },
      { amount: '½', measurement: 'teaspoon', name: 'cream of tartar' },
      { amount: '½', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: 'Fresh',
        measurement: 'Raspberry',
        name: 'Sauce (recipe follows)'
      },
      {
        amount: '1',
        measurement: '(6-ounce)',
        name: 'package fresh raspberries'
      },
      { amount: '½', measurement: 'cup', name: 'sugar' },
      {
        amount: '1',
        measurement: 'cup',
        name: '(12 ounces) seedless raspberry jam, such as Tiptree'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'framboise liqueur'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/raspberry-baked-alaska/_entryTopPhotoMobile/ba2.jpg?mtime=20190816140346',
    directions: [
      'Slice the cake into six ½-inch-thick slices. Cut six (2½-inch) circles—one from each slice—with an unfluted round cookie cutter, discarding the scraps. (You can also use a small knife.) Place the cake rounds 2 inches apart on a flat dish that will fit in your freezer.',
      'Soften the sorbet and ice cream just enough to be able to scoop them with a standard 2¼-inch-diameter ice cream scoop (15 to 30 seconds in the microwave works). Fill half the scoop with raspberry sorbet and the rest of the scoop with vanilla ice cream and place an ice cream ball, flat side down, in the middle of each cake round. Freeze for at least 30 minutes, until the ice cream is very hard.',
      'Preheat the oven to 500 degrees.',
      'To make the Swiss meringue, place the egg whites and sugar in a heat-proof glass bowl set over a pan of simmering water. Whisk the mixture almost constantly, until it reaches 120 degrees on a candy thermometer and the sugar has dissolved (see tip). Pour the mixture into the bowl of an electric mixer fitted with the whisk attachment. Add the vanilla, cream of tartar, and salt and beat on medium speed for one minute, then on high speed for 5 minutes, until the egg whites form stiff, glossy peaks.',
      'Transfer the cake rounds and ice cream to a sheet pan lined with parchment paper. Working quickly, spread the meringue with a spoon or small spatula, making lots of peaks all over with the back of the spoon. (You can also use a pastry bag fitted with a large fluted tip and pipe the meringue thickly around each ball of ice cream and cake.) Be sure all of the ice cream is covered with meringue. Bake for 2½ to 3 minutes, until the edges of the meringues are browned, turning the pan once to brown evenly. Transfer to dessert plates, drizzle fresh raspberry sauce around each baked Alaska, and serve immediately.',
      'Place the raspberries, sugar, and ¼ cup water in a small saucepan over medium heat. Bring to a boil, lower the heat, and simmer for 4 minutes. Pour the cooked raspberries, the jam, and the framboise into the bowl of a food processor fitted with the steel blade and process until smooth. Pour into a container and chill. The sauce can be refrigerated for up to one week.'
    ],
    tags: [ 'dessert' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Sparkling Grapefruit Granita',
    servingSize: '6',
    ingredients: [
      { amount: '1', measurement: 'cup', name: 'sugar' },
      {
        amount: '2',
        measurement: 'cups',
        name: 'freshly squeezed pink grapefruit juice (3 to 4 large grapefruits)'
      },
      { amount: '2', measurement: 'cups', name: 'dry rosé Champagne' },
      { amount: '1/8', measurement: 'teaspoon', name: 'fleur de sel' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/sparkling-grapefruit-granita/_entryTopPhotoMobile/Page-216-copy.jpg?mtime=20190815142016',
    directions: [
      'Combine the sugar with 1 cup water in a small saucepan. Bring to a boil and simmer for 2 minutes, until the sugar dissolves. Pour into a 9 × 13 × 2-inch rectangular (non-metal) baking dish. Stir in the grapefruit juice, Champagne, and fleur de sel.',
      'Carefully place the dish on a level surface in the freezer. Freeze for one hour, rake the granita with a large dinner fork, and return it to the freezer. Continue to rake the granita every 30 minutes, until it’s firm and granular. This might take as long as 3 hours. Serve frozen in pretty bowls or stemmed glasses.'
    ],
    tags: [
      'dessert', 'dessert',
      'easy',    'entertaining',
      'summer',  'gluten-free',
      'light',   'vegetarian',
      'rose',    'grapefruit',
      'granita'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Raspberry Rhubarb Crostata',
    servingSize: '6',
    ingredients: [
      { amount: '2', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '¼', measurement: 'cup', name: 'granulated sugar' },
      { amount: '½', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '½',
        measurement: 'pound',
        name: '(2 sticks) very cold unsalted butter, ½-inch-diced'
      },
      { amount: '¼', measurement: 'cup', name: 'ice water' },
      { amount: '¼', measurement: 'cup', name: 'cornstarch' },
      {
        amount: '4',
        measurement: 'cups',
        name: '(½-inch-thick) sliced fresh rhubarb (1¼ pounds)'
      },
      { amount: '6', measurement: 'ounces', name: 'fresh raspberries' },
      { amount: '2/3', measurement: 'cup', name: 'granulated sugar' },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'grated orange zest'
      },
      {
        amount: '¼',
        measurement: 'cup',
        name: 'freshly squeezed orange juice'
      },
      {
        amount: '1',
        measurement: 'extra-large',
        name: 'egg beaten with 1 tablespoon water, for egg wash'
      },
      {
        amount: 'Turbinado',
        measurement: 'or',
        name: 'demerara sugar, such as Sugar in the Raw'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/raspberry-rhubarb-crostata/_entryTopPhotoMobile/dup.jpg?mtime=20170330142916',
    directions: [
      'For the pastry, place the flour, granulated sugar, and salt in the bowl of a food processor fitted with the steel blade. Pulse a few times to combine. Add the butter and toss carefully with your fingers to coat each cube of butter with the flour. Pulse 12 to 15 times, or until the butter is the size of peas. With the motor running, add the ice water all at once through the feed tube. Keep hitting the pulse button just until the dough comes together. Turn onto a well-floured board, cut in half, and form into two disks. Wrap and refrigerate for at least an hour. (Wrap the second dough well and freeze, if not using.)',
      'For the filling, place 3 tablespoons of water in small bowl, whisk in the cornstarch, and set aside. In a large heavy-bottomed saucepan, combine the rhubarb, raspberries, granulated sugar, orange zest, and orange juice. Cook over medium heat for 5 to 6 minutes, until some of the juices are released. Stir in the cornstarch, bring to a boil, lower the heat, and simmer for 2 minutes. Refrigerate for 30 minutes, until cool.',
      'Preheat the oven to 425 degrees. Line a sheet pan with parchment paper.',
      'Roll the pastry into an 11- to 12-inch circle on a lightly floured surface and transfer to the prepared pan. Pile the raspberry rhubarb mixture onto the pastry, leaving a 1½-inch border all around. Fold the border up over the filling, pleating if necessary and pressing lightly. Brush the pastry with egg wash, sprinkle just the pastry with turbinado sugar, and bake for 30 to 35 minutes, until the pastry is browned and the filling is thickened. Cool for 30 minutes and serve warm or at room temperature.'
    ],
    tags: [
      'dessert',
      'dessert',
      'spring',
      'entertaining',
      'make ahead',
      'vegetarian',
      'raspberry',
      'rhubarb',
      'baking'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Cherry Pistachio Biscotti',
    servingSize: '2',
    ingredients: [
      {
        amount: '12',
        measurement: 'tablespoons',
        name: '(1½ sticks) unsalted butter, at room temperature'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'light brown sugar, lightly packed'
      },
      { amount: '½', measurement: 'cup', name: 'granulated sugar' },
      { amount: '1½', measurement: 'teaspoons', name: 'ground cinnamon' },
      {
        amount: '3',
        measurement: 'extra-large',
        name: 'eggs, at room temperature, one separated'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'pure vanilla extract'
      },
      { amount: '3', measurement: 'cups', name: 'all-purpose flour' },
      {
        amount: '1',
        measurement: '1/3',
        name: 'cups almond meal or almond flour, such as Bob’s Red Mill'
      },
      { amount: '1', measurement: 'teaspoon', name: 'baking powder' },
      { amount: '½', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: '½', measurement: 'cup', name: 'shelled pistachios' },
      { amount: '½', measurement: 'cup', name: 'whole dried cherries' },
      {
        amount: 'Turbinado',
        measurement: 'sugar,',
        name: 'such as Sugar in the Raw'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/cherry-pistachio-biscotti/_entryTopPhotoMobile/CherryPistachioBisotti_004_Crop-copy.jpg?mtime=20171218145830',
    directions: [
      'Preheat the oven to 300 degrees. Line a sheet pan with parchment paper.',
      'In the bowl of an electric mixer fitted with the paddle attachment, cream the butter, brown sugar, granulated sugar, and cinnamon on medium speed for 3 minutes, until light and fluffy. With the mixer on low, gradually add the 2 whole eggs, the egg yolk (reserve the egg white), and vanilla and mix until combined, scraping down the bowl with a rubber spatula.',
      'In a medium bowl, combine the all-purpose flour, almond meal, baking powder, and salt. With the mixer on low, slowly add the dry mixture to the butter-sugar mixture, mixing only until combined. Scrape down the bowl and beater and make sure all the ingredients are combined. Stir in the pistachios and cherries.',
      'Roll the dough into a ball on a well-floured board and cut in half. With floured hands, roll each piece into a cylinder about 11 inches long by 2 inches in diameter and place them 3 inches apart on the prepared sheet pan.',
      'Place the reserved egg white in a bowl and beat with a whisk for 15 seconds. Brush the logs with the egg white (save the rest!) and sprinkle each with 1 teaspoon of turbinado sugar. Bake for 45 minutes, until lightly browned (the logs will be soft). Cool for 30 minutes.',
      'Turn the oven down to 275 degrees.',
      'Line two sheet pans with parchment paper. With a serrated knife, slice the biscotti ½ inch thick at a full 45-degree angle. Place the slices cut side up on the prepared sheet pans. Brush them with the egg white and sprinkle generously with turbinado sugar. Bake for 45 to 50 minutes, turning each slice once, until browned and fully baked. Transfer to a baking rack to cool.',
    ],
    tags: [
      'dessert',
      'dessert',
      'entertaining',
      'holiday',
      'cookies',
      'pistachio',
      'make ahead'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Raspberry Shortbread Hearts',
    servingSize: '1',
    ingredients: [
      {
        amount: '3/4',
        measurement: 'pound',
        name: '(3 sticks) unsalted butter, at room temperature'
      },
      { amount: '1', measurement: 'cup', name: 'granulated sugar' },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      { amount: '3½', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '¼', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '¾',
        measurement: 'cup',
        name: 'good raspberry preserves'
      },
      {
        amount: 'Confectioners’',
        measurement: 'sugar,',
        name: 'for dusting'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/raspberry-shortbread-hearts/_entryTopPhotoMobile/IMG_0851.jpg?mtime=20200428112624',
    directions: [
      'Preheat the oven to 350 degrees.',
      'In the bowl of an electric mixer fitted with the paddle attachment, mix together the butter and sugar on medium speed until they are just combined (don’t whip the butter!). Stir in the vanilla.  In a medium bowl, sift together the flour and salt, then slowly add them to the butter-and-sugar mixture. Mix on low speed until the dough starts to come together. If the dough doesn’t come together, add a tablespoon or two of warm water. Dump onto a surface dusted with flour and shape into a flat disk. Wrap in plastic and chill for 30 minutes.',
      'Roll the dough ¼-inch thick, cut out hearts with a large heart-shaped cutter, and place them on sheet pans lined with parchment paper. With a smaller heart-shaped cutter, make a heart-shaped cut-out in the middle of only half of the cookies. Refrigerate the cookies for 15 minutes.',
      'Bake the cookies for 20 to 25 minutes, until the edges begin to brown. Allow to cool to room temperature. Spread raspberry preserves on the top of each solid cookie. Lightly dust the top of the cut-out cookies with confectioners’ sugar and then press the bottom (the flat side) of the cut-out cookies on the raspberry filling, pressing the two cookies together. The raspberry preserves will be in the middle and the confectioners’ sugar will be on top. Serve at room temperature.'
    ],
    tags: [
      'dessert',    'cookies',
      'kids',       'vegetarian',
      'easy',       'love',
      'valentines', 'pantry',
      'sweets',     'treats',
      'fun'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'French Apple Tart',
    servingSize: '6',
    ingredients: [
      { amount: 'For', measurement: 'the', name: 'Pastry:' },
      { amount: '2', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '1/2', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: '1', measurement: 'tablespoon', name: 'sugar' },
      {
        amount: '12',
        measurement: 'tablespoons',
        name: '(1½ sticks) cold unsalted butter, diced'
      },
      { amount: '1/2', measurement: 'cup', name: 'ice water' },
      { amount: 'For', measurement: 'the', name: 'Apples:' },
      { amount: '4', measurement: 'Granny', name: 'Smith apples' },
      { amount: '1/2', measurement: 'cup', name: 'sugar' },
      {
        amount: '4',
        measurement: 'tablespoons',
        name: '(½ stick) cold unsalted butter, small-diced'
      },
      {
        amount: '1/2',
        measurement: 'cup',
        name: 'apricot jelly or warm sieved apricot jam'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'Calvados, rum, or water'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/french-apple-tart/_entryTopPhotoMobile/190-french-apple-tart-web-horizon.jpg?mtime=20160722150513',
    directions: [
      'For the pastry, place the flour, salt, and sugar in the bowl of a food processor fitted with the steel blade. Pulse for a few seconds to combine. Add the butter and pulse 10 to 12 times, until the butter is in small bits the size of peas. With the motor running, pour the ice water down the feed tube and pulse just until the dough starts to come together. Dump onto a floured board and knead quickly into a ball. Wrap in plastic and refrigerate for at least 1 hour.',
      'Preheat the oven to 400 degrees. Line a sheet pan with parchment paper.',
      'Roll the dough slightly larger than 10 x 14 inches. Using a ruler and a small knife, trim the edges. Place the dough on the prepared sheet pan and refrigerate while you prepare the apples.',
      'Peel the apples and cut them in half through the stem. Remove the stems and cores with a sharp knife and a melon baller. Slice the apples crosswise in ¼-inch-thick slices. Place overlapping slices of apples diagonally down the middle of the tart and continue making diagonal rows on both sides of the first row until the pastry is covered with apple slices. (I tend not to use the apple ends in order to make the arrangement beautiful.) Sprinkle with the full ½ cup sugar and dot with the butter.',
      'Bake for 45 minutes to 1 hour, until the pastry is browned and the edges of the apples start to brown. Rotate the pan once during cooking. If the pastry puffs up in one area, cut a little slit with a knife to let the air out. Don’t worry! The apple juices will burn in the pan but the tart will be fine! When the tart’s done, heat the apricot jelly together with the Calvados and brush the apples and the pastry completely with the jelly mixture. Loosen the tart with a metal spatula so it doesn’t stick to the paper. Allow to cool and serve warm or at room temperature.',
      "Ina Garten's Trip to Paris (Apple Music)",
      "Ina Garten's Trip to Paris (Spotify)"
    ],
    tags: [
      'dessert',
      'dessert ',
      'autumn',
      "ina's favorite desserts",
      'french ',
      'entertaining',
      'make ahead ',
      'vegetarian',
      'baking',
      'apple desserts'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Bourbon Honey Cake',
    servingSize: '1',
    ingredients: [
      {
        amount: '1',
        measurement: 'cup',
        name: 'vegetable oil, plus extra for the pan'
      },
      {
        amount: '3¾',
        measurement: 'cups',
        name: 'all-purpose flour, plus extra for the pan'
      },
      { amount: '1½', measurement: 'cups', name: 'granulated sugar' },
      { amount: '1', measurement: 'cup', name: 'honey' },
      {
        amount: '½',
        measurement: 'cup',
        name: 'light brown sugar, lightly packed'
      },
      {
        amount: '3',
        measurement: 'extra-large',
        name: 'eggs, at room temperature'
      },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'grated orange zest (2 oranges)'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      { amount: '1', measurement: 'tablespoon', name: 'baking powder' },
      { amount: '1', measurement: 'teaspoon', name: 'baking soda' },
      { amount: '4', measurement: 'teaspoons', name: 'ground cinnamon' },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: '½', measurement: 'teaspoon', name: 'ground cloves' },
      { amount: '½', measurement: 'teaspoon', name: 'ground allspice' },
      { amount: '½', measurement: 'teaspoon', name: 'ground ginger' },
      { amount: '1', measurement: 'cup', name: 'hot coffee' },
      {
        amount: '½',
        measurement: 'cup',
        name: 'freshly squeezed orange juice (2 oranges)'
      },
      {
        amount: '¼',
        measurement: 'cup',
        name: 'good bourbon, such as Maker’s Mark'
      },
      {
        amount: '½',
        measurement: 'cup',
        name: 'blanched sliced almonds'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/bourbon-honey-cake/_entryTopPhotoMobile/bourboncake.jpg?mtime=20190926160204',
    directions: [
      'Preheat the oven to 350 degrees. Brush a 9-inch angel food cake pan with a nonremovable bottom with oil, line the bottom with parchment paper, then oil and flour the pan.',
      'In the bowl of an electric mixer fitted with the paddle attachment, mix the oil, granulated sugar, honey, brown sugar, eggs, orange zest, and vanilla on medium speed for one minute. In another bowl, sift together the flour, baking powder, baking soda, cinnamon, salt, cloves, allspice, and ginger and blend. Combine the coffee, orange juice, and bourbon in a 2-cup glass measuring cup. With the mixer on low, alternately add the flour and liquid mixtures to the oil-sugar mixture in thirds, beginning and ending with flour, until combined. Scrape down the bowl with a rubber spatula. Don’t worry; the batter will be very liquid!',
      'Pour the batter into the prepared pan. Rap the pan 5 times on the counter to get rid of any bubbles in the batter. Sprinkle the top with the almonds. Bake in the center of the oven for 40 to 45 minutes, until a toothpick inserted into the center comes out clean. Cool completely, then remove from the pan and place almond side up on a flat serving plate. Serve at room temperature.'
    ],
    tags: [
      'dessert',
      'dessert',
      'holiday',
      'baking',
      'make-ahead',
      'cake',
      'entertaining'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Homemade Marshmallows',
    servingSize: '2',
    ingredients: [
      {
        amount: '3',
        measurement: 'packages',
        name: 'unflavored gelatin'
      },
      { amount: '1', measurement: '1/2', name: 'cups granulated sugar' },
      { amount: '1', measurement: 'cup', name: 'light corn syrup' },
      { amount: '1/4', measurement: 'teaspoon', name: 'kosher salt' },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'pure vanilla extract'
      },
      {
        amount: 'Confectioners’',
        measurement: 'sugar,',
        name: 'for dusting'
      },
      {
        amount: '7',
        measurement: 'ounces',
        name: 'sweetened shredded coconut (optional)'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/homemade-marshmallows/_entryTopPhotoMobile/choco_insta_2-1.jpg?mtime=20200421104146',
    directions: [
      'Combine the gelatin and 1/2 cup of cold water in the bowl of an electric mixer fitted with the whisk attachment and allow to sit while you make the syrup.',
      'Meanwhile, combine the sugar, corn syrup, salt, and 1/2 cup water in a small saucepan and cook over medium heat until the sugar dissolves. Raise the heat to high and cook until the syrup reaches 240 degrees on a candy thermometer. Remove from the heat.',       
      'With the mixer on low speed, slowly pour the sugar syrup into the dissolved gelatin. Put the mixer on high speed and whip until the mixture is very thick, about 15 minutes. Add the vanilla and mix thoroughly.',
      'With a sieve, generously dust an 8 x 12-inch nonmetal baking dish with confectioners’ sugar. Pour the marshmallow mixture into the pan, smooth the top, and dust with more confectioners’ sugar. Allow to stand uncovered overnight until it dries out.',
      'Turn the marshmallows onto a board and cut them in squares. Dust them with more confectioners’ sugar.',
      'Place the coconut in a very large dry saute pan and cook over low heat for 15 to 20 minutes, tossing frequently, until lightly browned. Set aside.',
      'Sprinkle half the toasted coconut in an 8 x 12-inch nonmetal pan. Pour in the marshmallow batter and smooth the top of the mixture with damp hands. Sprinkle on the remaining toasted coconut. Allow to dry uncovered at room temperature overnight.',
      'Remove the marshmallows from the pan and cut into squares. Roll the sides of each piece carefully in confectioners’ sugar.'     
    ],
    tags: [ 'dessert' ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: 'Old-Fashioned Apple Crisp',
    servingSize: '1',
    ingredients: [
      {
        amount: '5',
        measurement: 'pounds',
        name: 'McIntosh or Macoun apples'
      },
      { amount: 'Grated', measurement: 'zest', name: 'of 1 orange' },
      { amount: 'Grated', measurement: 'zest', name: 'of 1 lemon' },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'freshly squeezed orange juice'
      },
      {
        amount: '2',
        measurement: 'tablespoons',
        name: 'freshly squeezed lemon juice'
      },
      { amount: '1/2', measurement: 'cup', name: 'granulated sugar' },
      {
        amount: '2',
        measurement: 'teaspoons',
        name: 'ground cinnamon'
      },
      { amount: '1', measurement: 'teaspoon', name: 'ground nutmeg' },
      { amount: 'For', measurement: 'the', name: 'Topping:' },
      {
        amount: '1-1/2',
        measurement: 'cups',
        name: 'all-purpose flour'
      },
      { amount: '3/4', measurement: 'cup', name: 'granulated sugar' },
      {
        amount: '3/4',
        measurement: 'cup',
        name: 'light brown sugar, packed'
      },
      { amount: '1/2', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: '1', measurement: 'cup', name: 'oatmeal' },
      {
        amount: '1/2',
        measurement: 'pound',
        name: 'cold unsalted butter, diced'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/old-fashioned-apple-crisp/_entryTopPhotoMobile/Page-227-web-horizon.jpg?mtime=20160726113700',
    directions: [
      'Preheat the oven to 350 degrees. Butter a 9 x 14 x 2-inch oval baking dish.',
      'Peel, core, and cut the apples into large wedges. Combine the apples with the zests, juices, sugar, and spices. Pour into the dish.',
      'To make the topping, combine the flour, sugars, salt, oatmeal, and cold butter in the bowl of an electric mixer fitted with the paddle attachment. Mix on low speed until the mixture is crumbly and the butter is the size of peas. Scatter evenly over the apples.',
      'Place the crisp on a sheet pan and bake for one hour until the top is brown and the apples are bubbly. Serve warm.',
      'To make the topping, combine the flour, sugars, salt, oatmeal, and cold butter in the bowl of an electric mixer fitted with the paddle attachment. Mix on low speed until the mixture is crumbly and the butter is the size of peas. Scatter evenly over the apples.',
      'Place the crisp on a sheet pan and bake for one hour until the top is brown and the apples are bubbly. Serve warm.'
    ],
    tags: [
      'dessert',
      'dessert ',
      'autumn',
      'holiday',
      "ina's favorite desserts",
      'entertaining',
      'make ahead',
      'vegetarian',
      'baking',
      'kids',
      'apple desserts'
    ],
    source: 'barefootcontessa.com'
  },
  {
    name: 'Flag Cake',
    servingSize: '2',
    ingredients: [
      {
        amount: '18',
        measurement: 'tablespoons',
        name: '(2-1/4 sticks) unsalted butter, at room temperature'
      },
      { amount: '3', measurement: 'cups', name: 'sugar' },
      {
        amount: '6',
        measurement: 'extra-large',
        name: 'eggs, at room temperature'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'sour cream, at room temperature'
      },
      {
        amount: '1-1/2',
        measurement: 'teaspoons',
        name: 'pure vanilla extract'
      },
      { amount: '3', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '1/3', measurement: 'cup', name: 'cornstarch' },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: '1', measurement: 'teaspoon', name: 'baking soda' },
      { amount: 'For', measurement: 'the', name: 'Icing:' },
      {
        amount: '1',
        measurement: 'pound',
        name: '(4 sticks) unsalted butter, at room temperature'
      },
      {
        amount: '1-1/2',
        measurement: 'pounds',
        name: 'cream cheese, at room temperature'
      },
      {
        amount: '1',
        measurement: 'pound',
        name: 'confectioners’ sugar, sifted'
      },
      {
        amount: '1-1/2',
        measurement: 'teaspoons',
        name: 'pure vanilla extract'
      },
      { amount: 'To', measurement: 'Assemble:', name: '' },
      { amount: '2', measurement: 'half-pints', name: 'blueberries' },
      { amount: '3', measurement: 'half-pints', name: 'raspberries' }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/flag-cake/_entryTopPhotoMobile/IMG_1153.jpeg?mtime=20200521120223',
    directions: [
      'Heat the oven to 350 degrees. Butter and flour an 18 x 12 x 1-1/2-inch sheet pan (see note).',
      'Cream the butter and sugar in the bowl of an electric mixer fitted with the paddle attachment for 3 minutes on medium speed, until light and fluffy. (If the butter is too cool to be light and fluffy, add a teaspoon or two of warm water,) On medium-low speed, add the eggs, 2 at a time, then add the sour cream and vanilla. Scrape down the sides and stir until smooth.',
      'Sift together the flour, cornstarch, salt, and baking soda in a bowl. With the mixer on low, add the flour mixture and mix until just combined. Stir the batter with a rubber spatula and pour into the prepared pan. Smooth the top and bake in the center of the oven for 20 to 30 minutes, until a toothpick comes out clean. Cool to room temperature.',
      'For the icing, combine the butter, cream cheese, and vanilla in the bowl of an electric mixer fitted with the paddle attachment and mix on medium speed until very smooth. Add the confectioners’ sugar and mix on low speed. Stir with a rubber spatula to be sure the icing is well mixed.',
      'Spread three quarters of the icing on the cake. Using a toothpick, outline a flag on the cake. Fill in the upper left corner with blueberries. Place 2 rows of raspberries across the top of the cake like the red stripes. Put the remaining icing in a pastry bag fitted with a star tip and pipe two rows of white stripes below the raspberries. Alternately add 2 rows of raspberries and 2 rows of icing until the flag is completed. Pipe stars on top of the blueberries.',
      'Note: If you don’t want to serve your cake from the pan, line the pan with parchment paper and turn it out into a board before you ice and decorate it.'
    ],
    tags: [
      'dessert',      'dessert ',
      'summer',       'entertaining',
      'make ahead ',  'vegetarian',
      'baking',       'kids',
      'cake',         'berries',
      'raspberries',  'blueberries',
      'strawberries'
    ],
    source: 'barefootcontessa.com'
  }
  ,
  {
    name: "Beatty's Chocolate Cake (updated)",
    servingSize: '8',
    ingredients: [
      { amount: '1¾', measurement: 'cups', name: 'all-purpose flour' },
      { amount: '2', measurement: 'cups', name: 'sugar' },
      {
        amount: '¾',
        measurement: 'cups',
        name: 'good cocoa powder, such as Valrhona'
      },
      { amount: '2', measurement: 'teaspoons', name: 'baking soda' },
      { amount: '1', measurement: 'teaspoon', name: 'baking powder' },
      { amount: '1', measurement: 'teaspoon', name: 'kosher salt' },
      { amount: '1', measurement: 'cup', name: 'buttermilk, shaken' },
      { amount: '½', measurement: 'cup', name: 'vegetable oil' },
      {
        amount: '2',
        measurement: 'extra-large',
        name: 'eggs, at room temperature'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      {
        amount: '1',
        measurement: 'cup',
        name: 'freshly brewed hot coffee'
      },
      {
        amount: 'Chocolate',
        measurement: 'Buttercream',
        name: 'Frosting (recipe follows)'
      },
      {
        amount: '6',
        measurement: 'ounces',
        name: 'good semisweet chocolate, such as Valrhona (see note)'
      },
      {
        amount: '½',
        measurement: 'pound',
        name: '(2 sticks) unsalted butter, at room temperature'
      },
      {
        amount: '1',
        measurement: 'extra-large',
        name: 'egg yolk, at room temperature'
      },
      {
        amount: '1',
        measurement: 'teaspoon',
        name: 'pure vanilla extract'
      },
      {
        amount: '1¼',
        measurement: 'cups',
        name: 'sifted confectioners’ sugar'
      },
      {
        amount: '1',
        measurement: 'tablespoon',
        name: 'instant coffee granules, such as Nescafe'
      }
    ],
    photo: 'https://d213sdapb08052.cloudfront.net/assets/recipes/beattys-chocolate-cake/_entryTopPhotoMobile/IMG_0822.jpeg?mtime=20200424102250',
    directions: [
      'Preheat the oven to 350 degrees. Butter two 8-inch round cake pans.  Line with parchment paper, then butter and flour the pans.',
      'Sift the flour, sugar, cocoa, baking soda, baking powder, and salt into the bowl of an electric mixer fitted with the paddle attachment and mix on low speed until combined. In another bowl, combine the buttermilk, oil, eggs, and vanilla. With the mixer on low speed, slowly add the wet ingredients to the dry ones.  With mixer still on low, add the coffee and stir just to combine, scraping the bottom of the bowl with a rubber spatula. Pour the batter evenly into the prepared pans and bake for 35 to 40 minutes, until a cake tester comes out clean. Cool in the pans for 30 minutes, then turn them out onto a cooling rack and cool completely. (Not to worry;  the top will sink a little in the center.)',
      'Place one layer, flat side up, on a flat plate or cake pedestal. With a knife or offset spatula, spread a thin layer of buttercream on the top only. Place the second layer on top, flat side up, and spread the frosting evenly first on the sides and then on the top of the cake. Cut in wedges and serve at room temperature.',
      'Chop the chocolate and place it in a heatproof bowl over a pan over simmering water. Stir until just melted and set aside until cooled to room temperature.',
      'Beat the butter in the bowl of an electric mixer fitted with the paddle attachment on medium-high speed until light yellow and fluffy, about 3 minutes. Add the egg yolk and vanilla and continue beating for 3 minutes. Turn the mixer to low, gradually add the confectioners’ sugar, then beat at medium speed, scraping down the bowl as necessary, until smooth and creamy. Dissolve the coffee in 2 teaspoons of the hottest tap water. On low speed, add the chocolate and coffee to the butter mixture and mix until blended. Don’t whip!  Spread immediately on the cooled cake.',
      'Note: I use Valrhona Le Noir 56% Cacao Semisweet Chocolate. You can use also use a good bittersweet chocolate but don’t use chocolate chips because they have stabilizers in them.'
    ],
    tags: [
      'dessert',
      'dessert',
      "ina's favorite desserts",
      'entertaining',
      'make ahead ',
      'vegetarian',
      'miserable and alone',
      'birthday',
      'baking',
      'kids',
      'cake',
      'chocolate',
      'anniversary'
    ],
    source: 'barefootcontessa.com'
  }
]

export default Recipes;