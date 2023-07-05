const express = require("express");
const router = express.Router();

const {
    createUser,
    userSignIn,
    uploadProfile,
    signOut,
    verifyEmail,
    forgetPassword,
    resetPassword,
    getProfile,
} = require("../controllers/user");
const {
    validateUserSignUp,
    userVlidation,
    validateUserSignIn,
    isResetTokenValid,
} = require("../middlewares/validation/user");
const { isAuth } = require("../middlewares/auth");

const multer = require("multer");

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("invalid image file!", false);
    }
};
const uploads = multer({ storage, fileFilter });

router.post("/create-user", validateUserSignUp, userVlidation, createUser);
router.post("/sign-in", validateUserSignIn, userVlidation, userSignIn);
router.get("/sign-out", isAuth, signOut);
router.post("/verify-email", verifyEmail);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", isResetTokenValid ,resetPassword);
router.get("/verify-token", isResetTokenValid ,(req, res) => {
    res.json({success: true});
} );
router.get("/profile", isAuth, getProfile);
router.post(
    "/upload-profile",
    isAuth,
    uploads.single("profile"),
    uploadProfile
);

module.exports = router;
