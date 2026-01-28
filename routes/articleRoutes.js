const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Get all articles
router.get('/', articleController.getAllArticles);

// Get a specific article by ID
router.get('/:id', articleController.getArticleById);

// Create a new article
router.post('/', articleController.createArticle);

// Update an existing article
router.put('/:id', articleController.updateArticle);

// Delete an article
router.delete('/:id', articleController.deleteArticle);

module.exports = router;