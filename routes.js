const express = require("express");
const { executeQuery } = require("../../db/connection");
const router = express.Router();

router.get("/test", async (req, res) => {
  res.json({ name: "This is a test" });
});
module.exports = router;
