const User = require("../model/user");

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "No User found" });
  }
  return res.status(200).json({ users });
};

const getByIdUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }
  return res.status(200).json({ user });
};

const addUser = async (req, res, next) => {
  const { name, email, password  } = req.body;
  let user;
  try {
    user = new User({
      name,
      email,
      password,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Unable To Add User" });
  }
  return res.status(201).json({ user });
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password,
    });
    user = await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ user });
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.getByIdUser = getByIdUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
