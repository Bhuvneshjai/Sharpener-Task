// routes/signup.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // For password hashing
const db = require("../models/db");

/* GET signup page. */
router.get("/", function (req, res, next) {
  res.render("signup", { title: "Sign Up", message: req.flash("message") }); // Pass flash message to signup.ejs
});

/* POST signup form submission. */
router.post("/", async function (req, res, next) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validate form data
    if (!name || !email || !password || !confirmPassword) {
      req.flash("message", "All fields are required"); // Flash error message
      res.redirect("/signup");
      return;
    }

    if (password !== confirmPassword) {
      req.flash("message", "Passwords do not match"); // Flash error message
      res.redirect("/signup");
      return;
    }

    // Check if the user with the given email already exists
    const [existingUsers] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      req.flash("message", "User with this email already exists"); // Flash error message
      res.redirect("/signup");
      return;
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user data to the database
    await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    // Send a success response
    // res.status(200).send('Sign Up successful! Redirecting to login page...');

    // Flash success message
    req.flash("success", "Sign Up successful! Please log in.");

    // Redirect to the login page after a delay
    setTimeout(() => {
      res.redirect("/login");
    }, 2000); // Delay of 2 seconds (2000 milliseconds)
  } catch (err) {
    console.error("Error during signup:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
