const router = require("express").Router();
const jwt = require("jsonwebtoken");

const SECRET = "zukk";

function isAuth(req, res, next) {
  const token = req.headers["x-access-token"];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}

router.get("/", (req, res) => {
  res.send("Home");
});

router.post("/login", (req, res) => {
  const { login, password } = req.body;

  if (login === "admin" && password === 1234) {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: '30m' });
    res.json({ auth: "You are logged!", token });
  } else res.status(401).send("Invalid login or password!");
});

router.get("/clients", isAuth, (req, res) => {
  res.json({ name: "Neumir", UF: "SP" });
});

module.exports = router;
