const jwt = require("jsonwebtoken");

module.exports = {
  isAuth(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(401)
        .json({ auth: false, message: "No token provided." });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err)
        return res
          .status(500)
          .json({ auth: false, message: "Failed to authenticate token." });

      req.id = decoded.id;
      next();
    });
  },

  create(req, res) {
    const { login, password } = req.body;

    if (login === "admin" && password === 1234) {
      const token = jwt.sign({ id: 1 }, process.env.SECRET, {
        expiresIn: "30m",
      });
      res.json({ auth: "You are logged!", token });
    } else res.status(401).send("Invalid login or password!");
  },
};
