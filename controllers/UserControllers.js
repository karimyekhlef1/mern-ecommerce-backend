const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWTSEC = "QASCXBGFS";


const SingIn = async (req, res) => {
  try {
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    const cryptedPass = await bcrypt.hash(data.password, salt);
    const user = new User({
      email: data.email,
      name: data.name,
      password: cryptedPass,
      admin: data.admin || false
    });
    const savedUser = await user.save();
    res.status(200).send('Signed in successfully');
  } catch(error) {
    console.error(error.message);
    res.status(400).send('Error while signing in')
  }
}


const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log ({ email, password })
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).send({msg:' Email not found '});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(200).send({msg:'the password incorrect '});
    }
        const accessToken = jwt.sign({
          id:user._id,
          username:user.username
        }, JWTSEC)
        const {Password , ...other} = user._doc

    // Login successful, send back token or redirect to home page
    res.status(200).json({other , accessToken}); 
    console.log('Login successful')
   } catch(error) {
    console.error(error.message);
    res.status(500).send(false);
  }
}



module.exports = { SingIn ,logIn };



// const logIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(200).send('User not found. Please sign up.');
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(200).send('the password incorrect ');
//     }
//     // Login successful, send back token or redirect to home page
//     const accessToken = jwt.sign({
//       id:user._id,
//       username:user.username
// }, JWTSEC);
// res.status(200).json({other , accessToken});
// } catch(error) {
//     console.error(error.message);
//     res.status(500).send(false);
//   }
// }
