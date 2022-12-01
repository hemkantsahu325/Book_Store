const Order = require("../model/order");

const getAllOrder = async (req, res, next) => {
  let users;
  try {
    users = await Order.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "No User found" });
  }
  return res.status(200).json({ users });
};


const addOrder = async (req, res, next) => {
  const { name, bookname, number, address  } = req.body;
  let user;
  try {
    user = new Order({
      name,
      bookname,
      number,
      address,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Unable To Add Order" });
  }
  return res.status(201).json({ user });
};


exports.getAllOrder = getAllOrder;
exports.addOrder = addOrder;

