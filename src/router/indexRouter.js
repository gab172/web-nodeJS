const router = require("express").Router();

router.get("/", (req, res) => res.render("index"));

router.get("/contacto", (req, res) => res.render("contacto"));

router.get("/proyecto", (req, res) => res.render("proyecto"));

module.exports = router;
