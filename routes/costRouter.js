const express= require("express");
const costController= require("../controllers/costsController");
const router= express.Router();

router.get('/',costController.cost_index);
router.get('/:id/:year/:month',costController.cost_by_params);
router.post('/add-cost',costController.cost_create_post);

module.exports = router