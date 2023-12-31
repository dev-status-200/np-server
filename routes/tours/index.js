// Importing the Express Router module
const routes = require('express').Router();

// Importing the admin controller for handling admin-related actions
const tourController = require("../../controllers/tours.controllers");

// Route to get all clients
routes.post("/createTour", tourController.createTour);

// Route to get all clients
routes.get("/mostPopulartrips", tourController.mostPopulartrips);

module.exports = routes;
