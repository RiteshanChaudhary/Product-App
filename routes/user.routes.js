const express = require("express");

const {
  getAllProduct,
  create,
  getById,
  updateById,
  deleteById,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllProduct);

router.post("/", create);

// get users by id
router.get("/:id", getById);

router.put("/:id", updateById);

router.delete("/:id", deleteById);
module.exports = router;
