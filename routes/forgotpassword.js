// routes/forgotpassword.js
const express = require("express");
const router = express.Router();
const axios = require("axios");
const SibApiV3Sdk = require("sib-api-v3-sdk");
const dotenv = require("dotenv");
const Swal = require('sweetalert2');

dotenv.config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

// POST route for forgot password
router.post("/forgotpassword", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).send("Email is required");
    }

    // Send email using Sendinblue API
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sender = { email: "aniketkumar13255@gmail.com" };
    const receivers = [{ email }];

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = sender;
    sendSmtpEmail.to = receivers;
    sendSmtpEmail.subject = "Forgot Password";
    sendSmtpEmail.textContent = "Please click here to resend the link";

    // Use async/await instead of promises for cleaner code
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", data);
    return res.status(200).send("Reset password link has been sent to your email");
  } catch (error) {
    console.error("Error sending email:", error);
    // Display error message using SweetAlert2
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to send reset password link!",
    });
    return res.status(500).send("Failed to send reset password link");
  }
});

module.exports = router;
