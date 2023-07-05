const express = require("express");
require("dotenv").config();
require("./models/db");
const userRouter = require("./routes/user");
var cors = require("cors");

const app = express();

const PORT = 8000 || process.env.PORT;

// app.use((req, res, next) => {
//   req.on('data', chunk => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use(userRouter);

// const test = async (email, password) => {
//   const user = await User.findOne({ email: email });
//   const result = await user.comparePassword(password);
//   console.log(result);
// };

// test('jay@email.com', 'jay1122');

app.get("/test", (req, res) => {
    res.send("Hello world");
});

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: `Welcome to Backend Zone!, listening on port ${PORT}`,
    });
});

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
});
