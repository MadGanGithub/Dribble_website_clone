import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { comparePassword, hashed } from "../utils/authUtils.js";
import axios from "axios";

const signUp = async (req, res) => {
  try {
    const hashedPassword = await hashed(req.body.password, 10);

    const user = await User.create({
      name:req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      imageUrl:req.body.imageUrl,
      location:req.body.location,
      roles:req.body.options
    });

    const emailData = {
      sender: { email: 'test@gmail.com' },
      to: [{ email: req.body.email }],
      subject: `Message`,
      textContent: `<p>Thank you <strong>${req.body.name}</strong> for creating an account</p>`,
  };

  const response = await axios.post(`${process.env.EMAIL_LINK}`, emailData, {
      headers: {
        'api-key': `${process.env.EMAIL_API_KEY}`,
        'Content-Type': 'application/json',
      },
  });

    res.json({ status: true, message: "Signed up successfully" });
  } catch (err) {
    console.log(err)
    res.json({
      success: false,
      message: "Error has occurred",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const found = await User.findOne({
      email: req.body.email,
    });

    if (!found) {
      return res.status(400).send({
        status: false,
        message: "Invalid email",
      });
    }

    //password check
    const passwordUser = await User.findOne({
      password: found.password,
    });

    //post password
    const pass = req.body.password;
    //saved password
    const match = await comparePassword(pass, found.password);

    if (!match) {
      return res.status(200).send({
        status: false,
        message: "Invalid password",
      });
    }

    //Token creation
    const token = jwt.sign(
      {
        username: found.username,
        password: found.password,
      },
      process.env.JWT_SECRET
    );

    //Sends cookie
    res.cookie("jwt", token, {
      path: "/",
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(200).send({
      status: true,
      message: "Loggedin successfully",
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Error",
    });
  }
};

const check = (req, res) => {
  res.json({ message: "Welcome" });
};

export {
  signUp,
  signIn,
  check,
};
