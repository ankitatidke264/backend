const Company = require('../models/company.model');

// Add a new company
exports.addCompany = async (req, res) => {
  try {
    console.log("====>",req.body)
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Company added successfully', company });
  } catch (error) {
    res.status(400).json({ message: 'Error adding company', error });
  }
};

// List all companies
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching companies', error });
  }
};

// Add review to a company
exports.addReview = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.reviews.push(req.body);
    await company.save();
    res.status(201).json({ message: 'Review added successfully', company });
  } catch (error) {
    res.status(400).json({ message: 'Error adding review', error });
  }
};

// Get company reviews
exports.getReviews = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(company.reviews);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching reviews', error });
  }
};
