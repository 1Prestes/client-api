const router = require("express").Router();

const Client = require('../controllers/clientController')
const AuthController = require('../controllers/authController')

router.get("/", (req, res) => {
  res.send("Home");
});

router.post("/login", AuthController.create);

router.post("/client", AuthController.isAuth, Client.create);

module.exports = router;
