const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup controller function
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate the inputs
  if (!name || name.length < 2) {
    return res
      .status(400)
      .json({ error: "Name is required and should be at least 2 characters." });
  }
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }
  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({
        error: "Password is required and should be at least 6 characters.",
      });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    user = await User.create({ name, email, password: hashedPassword });

    // Generate a token
    const token = jwt.sign({ id: user.id }, "your-secret-key", {
      expiresIn: "1h",
    });

    // Remove password from the user object
    user.password = undefined;

    return res.status(201).json({ meta: { access_token: token }, data: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Signin controller function
exports.signin = async (req, res) => {
const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate a token
    const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });

    // Remove password from the user object
    user.password = undefined;

    return res.status(200).json({ meta: { access_token: token }, data: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get the authenticated user
exports.getMe = async (req, res) => {
    try {
      // Get token from the headers
      const token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, "your-secret-key");

      // Get user details
      const user = await User.findOne({ where: { id: decoded.id } });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Remove password from the user object
      user.password = undefined;

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
};
