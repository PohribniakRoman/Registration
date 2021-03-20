const { Router } = require("express");
const PasswordHandler = require("../handlers/PasswordHandler");
const AuthSchema = require("../schema/auth")

const router = Router();

router.post("/isAuthenticated", (req, res) => {
  const { token } = req.body;
  res.send(JSON.stringify({ isAuthenticated: false }));
});

router.post("/login", (req, res) => {
  const { login, password } = req.body;
  console.log(login,password);
  res.send(JSON.stringify({ exist: false, entered: false }));
});

router.post("/register", (req, res) => {
  const { login, password } = req.body;

  new PasswordHandler(password).hashPassword().then((hashedPassword) => {
    const user = AuthSchema({
      login:login,
      password:hashedPassword
    })
    user.save();
  });
  res.send(JSON.stringify({ registrated: true }));
});

module.exports = router;
