const dotenv = require("dotenv");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


dotenv.config();



const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {

            return res.status(400).json({ success: false, error: "All fields are required !!" });
        }

        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(password, saltRounds);


        const result = await db.query("INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4)", [name, email, phone, hashedPass]);

        res.status(200).json(result.rows[0]);
    }
    catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }



}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ success: false, error: "User not found" });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, error: "Invalid password" });
        }

        // Return user data (excluding password) and token in a single response
        const { password: _, ...userWithoutPassword } = user;
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            success: true,
            user: userWithoutPassword,
            token
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}


module.exports = {
    register,
    login
}



