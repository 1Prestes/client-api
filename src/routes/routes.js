const router = require("express").Router();

const Client = require("../controllers/clientController");
const AuthController = require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("Home");
});

router.post("/login", AuthController.create);

router.get("/clients", AuthController.isAuth, Client.index);
router.get("/client/:id", AuthController.isAuth, Client.show);
router.get("/client/delete/:id", AuthController.isAuth, Client.destroy);
router.post("/client/update", AuthController.isAuth, Client.update);
router.post("/client", AuthController.isAuth, Client.create);

module.exports = router;
