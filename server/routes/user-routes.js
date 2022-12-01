const express = require("express");
const router = express.Router();

const usersController = require("../controllers/user-controller");

router.get("/", usersController.getAllUser);
router.post("/", usersController.addUser);
router.get("/:id", usersController.getByIdUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
