const express = require("express");

const {getAllProducts, getAllProductsTesting, getAboutUsData } = require("../controllers/products")

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/aboutus").get(getAboutUsData);

module.exports = router;