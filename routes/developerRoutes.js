const express= require("express");
const developerController= require("../controllers/developerController");
const router= express.Router();

router.get('/',developerController.developer_index);
router.post('/add-developer',developerController.developer_create_post);

module.exports = router