const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("points");
});
router.get("/:id", (req, res) => {
  res.send(`${req.params.id}`);
});
/*router.get("/activities", (req, res) => {
  res.send("activities");
});
router.get("/check", (req, res) => {
  res.send("check");
});
router.get("/last", (req, res) => {
  res.send("last");
});
*/
router.post("/", (req, res) => {
  res.send("create product");
});
module.exports = router;
