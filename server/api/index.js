const router = require("express").Router();
const { Profile } = require("../models");

router.post("/signup", (req, res) => {
  Profile.create(req.body)
    .then((profile) => res.json(profile))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  Profile.findOne({
    userName: req.body.userName,
    password: req.body.password,
  })
    .then((profile) => {
      if (!profile) {
        res.status(404).json({ message: "No user with that username" });
        return;
      }
      req.session.save(() => {
        req.session.userId = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
      });
      res.json(profile);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/:id", (req, res) => {
  Profile.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((profile) =>
      !profile
        ? res.status(404).json({ message: "No user with this id!" })
        : res.json(profile)
    )
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  Profile.findOneAndDelete({ _id: req.params.id })
    .then((profile) =>
      !profile
        ? res.status(404).json({ message: "No user with that ID" })
        : res.json(profile)
    )
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
