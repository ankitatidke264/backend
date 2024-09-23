const express = require('express');
const companyController = require('../controllers/company.controller');
const router = express.Router();

// Add a company
router.post('/add/company', companyController.addCompany);

// Get all companies
router.get('/companies', companyController.getCompanies);

// Add review for a company
router.post('/companies/:id/reviews', companyController.addReview);

// Get reviews for a company
router.get('/companies/:id/reviews', companyController.getReviews);

module.exports = router;
