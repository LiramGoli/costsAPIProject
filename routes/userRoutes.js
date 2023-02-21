const express= require("express");
const userController=require("../controllers/usersController");
const router= express.Router();

router.get('/',userController.user_index);
router.get('/:id',userController.user_details);
router.post('/add-user',userController.user_create_post);

module.exports=router;