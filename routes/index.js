const controller=require('../controllers/index');
const router = require("express").Router();
const translate = require('../controllers/thirdpart');
router.post("/create", controller.create);

router.post('/translate', translate);

router.get("/findAll", controller.findAll);

router.get("/find/:RollNo", controller.findOne);

router.put("/update/:RollNo", controller.update);
  
router.delete("/delete/:RollNo", controller.Delete);


module.exports = {
  router
};
