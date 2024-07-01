const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://darksungaming:darksungaming@cluster0.lllmsog.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log("Server is running on port 8000");
});

const User = require("./models/user");
const Order = require("./models/order");

//function to send verification mail to user
const sendVerificationEmail = async (email, verificationToken) => {
  //create a nodemailer transport

  const transporter = nodemailer.createTransport({
    auth: {
      user: "darksungaming9@gmail.com",
      pass: "okikydmfpbqsqfzi",
    },
  });

  //compose the email message
  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: "Plese click the following link for verification of uour email :http://localhost:8000/verify/${verificationToken}",
  };

  //send the email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error sending verification mail", error);
  }
};

//endpoint to register in the app
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if the mail is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    //create a new user
    const newUser = new User({ name, email, password });

    //generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the user to the database
    await newUser.save();

    //send verification email to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "Registration Failed" });
  }
});

//endpoint to verify the email

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    //find the user within th given verification token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    //mark th euser as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.Status(500).json({ message: "Email verification failed" });
  }
});
