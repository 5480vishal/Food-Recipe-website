const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

router.get('/contact', recipeController.getContactPage); // Route to render Contact Us page
router.post('/contact', recipeController.submitContactForm); // Route to handle form submission



// About Us Route
router.get('/about', recipeController.getAboutPage);  // Calls the getAboutPage function from the controller


// Add to favorites
router.post('/recipe/:id/favorite', recipeController.addFavorite);
router.get('/favorites', recipeController.viewFavorites);



// Add Favorite Route
router.post('/recipe/:id/add-favorite', recipeController.addFavorite);

// Remove Favorite Route
router.post('/recipe/:id/remove-favorite', recipeController.removeFavorite);
 
module.exports = router;