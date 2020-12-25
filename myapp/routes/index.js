var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
let main = require('../controllers/main');

/* GET home page. */
router.get('/', index.index);

/* GET main pages. */
router.get('/projects', main.projects);
router.get('/about', main.about);
router.get('/contact', main.contact);

/* Get documents. */
router.get('/documents/resume', index.resume);

module.exports = router;
