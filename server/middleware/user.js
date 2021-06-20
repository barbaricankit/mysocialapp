const Users = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const newUser = async (req, res, next) => {
  const { firstname, lastname, username, password, email } = req.body;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  const newUser = new Users({
    firstname,
    lastname,
    username,
    email,
    password: hash,
  });

  await newUser.save();
  req.userId = newUser._id;
  req.user = newUser;
  next();
};

const validateCredentials = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username });
  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      req.user = user;
      req.userId = user._id;

      next();
    } else {
      res.json({ success: false, message: "Invalid Password" });
    }
  } else {
    res.json({ success: false, message: "Invalid Username" });
  }
};

const updateUserDetails = async (req, res, next) => {
  const { user } = req;
  const { firstname, lastname, email, bio } = req.body.user;
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.bio = bio;

  await user.save();
  user.password = undefined;
  res.json({ success: true, user });
};
module.exports = { newUser, validateCredentials, updateUserDetails };
