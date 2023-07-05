const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const verificationTokenSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    token: {
        type: String,
        require: true
    },
    unhashedToken: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        expires: 3600,          // 1hr
        default: Date.now()
    }
});

verificationTokenSchema.pre("save", async function (next) {
    if (this.isModified("token")) {
        this.unhashedToken = this.token;
        const hash = await bcrypt.hash(this.token, 8);
        this.token = hash;
    }
    next();
});

verificationTokenSchema.methods.comparePassword = async function (token) {
    if (!token) throw new Error("Token is mission, cannot compare!");

    try {
        const result = await bcrypt.compareSync(token, this.token);
        return result;
    } catch (error) {
        console.log("Error while comparing token!", error.message);
    }
};

module.exports = mongoose.model("VerificationToken", verificationTokenSchema);
