const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../../config/keys");

const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

const ERRORS = {
  userNoExist: () => new Error("User doesn't exist!"),
  wrongPassword: () => new Errors("YOU'RE WRONG AND I'M TELLING EVERYBODY (invalid password)")
};

const register = async data => {
  try {
    const { message, isValid } = validateRegisterInput(data);

    if (!isValid) throw new Error(message);

    const { first_name, last_name, email, password } = data;
    const existingUser = await User.findOne({ email });

    if (existingUser) throw new Error("This user already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hashedPassword
      },
      err => { if (err) throw err }
    );

    user.save();
    const token = jwt.sign({ id: user._id }, keys.secretOrKey);

    return { 
      token: token, 
      loggedIn: true, 
      ...user._doc, 
      password: null
    };
  } catch (err) { throw err }
};

const logout = async data => {
  try {
    const user = await User.findById(data._id);
    if (!user) throw ERRORS.userNoExist;
    return {
      token: "",
      loggedIn: false,
      ...user._doc,
      password: null
    };
  } catch (err) { throw err }
};

const login = async data => {
  try {
    const { message, isValid } = validateLoginInput(data);
    if (!isValid) throw new Error(message);

    const { email, password } = data;

    const user = await User.findOne({ email: email });
    if (!user) throw ERRORS.userNoExist;

    const isPassword = await bcrypt.compareSync(password, user.password);
    if (!isPassword) throw ERRORS.wrongPassword;

    const token = jwt.sign({ id: user._id }, keys.secretOrKey);

    return {
      token: token,
      loggedIn: true,
      ...user._doc,
      password: null
    }
  } catch (err) { throw err }
};

const verifyUser = async data => {

  try {
  
    const { token } = data;
    const { id } = await jwt.verify(token, keys.secretOrKey);
    let loggedIn; 
    const user = await User
      .findById(id)
      .then(user => {
        (user ? loggedIn = true : loggedIn = false);
        return user;
      });

    return { loggedIn, currentUser: { __typename: UserType, first_name: user.first_name, last_name: user.last_name, _id: user._id } }
  } catch (err) { return { currentUser: null, loggedIn: false } }
};


module.exports = { register, logout, login, verifyUser };