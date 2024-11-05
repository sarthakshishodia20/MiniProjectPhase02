const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();

router.get("/signup", (req, res) => {
    res.render("users/signup"); 
});

router.post("/signup", async (req, res) => {
    const { username, email, password, type } = req.body; 
    try {
        const newUser = new User({ username, email, type });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "Welcome to Zaika Zunction");
        res.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});


router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
})

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true ,
}), async (req, res) => {
    req.flash("success", "Welcome to Zaika Junction");
    res.redirect("/listings");
});
module.exports = router;
