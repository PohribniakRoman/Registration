const { Router } = require("express");
const PasswordHandler = require("../handlers/PasswordHandler");

const router = Router();

router.post("/isAuthenticated", (req, res) => {
  const { token } = req.body;
  console.log(token);
  res.send(JSON.stringify({ isAuthenticated: false }));
});

router.post("/login", (req, res) => {
  const { login, password } = req.body;

  res.send(JSON.stringify({ exist: false, entered: false }));
});

router.post("/registrar", (req, res) => {
  const { login, password } = req.body;
  new PasswordHandler(password).hashPassword().then((hashedPassword) => {
      
  });
  res.send(JSON.stringify({ registrated: true }));
});

module.exports = router;
