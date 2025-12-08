const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory users array (no database)
let users = [
  {
    name: "vasanth",
    password: "123456",
  },
];

// ---------------- SIGN UP ----------------
app.post("/signup", (req, res) => {
  const { name, password } = req.body;

  // Check if user exists
  const exists = users.find((u) => u.name === name);
  if (exists) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  // Add user using spread operator
  users = [...users, { name, password }];

  return res.json({ success: true, message: "Signup Successful" });
});

// ---------------- LOGIN ----------------
app.post("/login", (req, res) => {
  const { name, password } = req.body;

  const user = users.find((u) => u.name === name && u.password === password);

  if (user) {
    return res.json({ success: true, message: "Login Successful" });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
});

// ---------------- Server Start ----------------
app.listen(5000, () => console.log("Backend running on port 5000"));
