import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Email Sending Logic
const sendEmail = async (name, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "venkatsaipallapu@gmail.com", // Your receiving email
      subject: "New Contact Form Submission",
      text: `You have a new message from:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send email" };
  }
};

// Handle contact form submissions
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const emailResponse = await sendEmail(name, email, message);

  if (emailResponse.success) {
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } else {
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
