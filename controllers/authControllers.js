// const bcrypt = require("bcrypt");
// const User = require("../models/user");

// const registerUser = async (req, res) => {
//     const { name, username, password, cpassword } = req.body;

//     if (!name || !username || !password || !cpassword) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//         return res.status(400).json({ message: "Username already exists" });
//     }

//     if (password !== cpassword) {
//         return res.status(400).json({ message: "Passwords don't match" });
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ name, username, password: hashedPassword });
//         await newUser.save();
//         res.status(201).json({ message: "User registered successfully", user: newUser });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating user", error: error.message });
//     }
// };

// const loginUser = async (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ message: "Username and password are required" });
//     }

//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(400).json({ message: "Invalid username or password" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid username or password" });
//         }

//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//             expiresIn: "1h",
//         });
        
//         res.json({ token });

//         res.status(200).json({ message: "Login successful", user });



//     } catch (error) {
//         res.status(500).json({ message: "Login failed", error: error.message });
//     }


// };

// module.exports = { registerUser, loginUser };