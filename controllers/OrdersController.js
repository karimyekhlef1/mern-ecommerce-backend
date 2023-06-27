const Order = require("../models/OrderModel");
// const product = require('../models/ProductModel')

const CreatOrder = async (req, res) => {
  try {
    const { nameUser, phoneUser, addressUser, productId } = req.body;

    const order = new Order({ nameUser, phoneUser, addressUser, productId });
    await order.save();

    res.status(400).json({ data: order, res: "hiih" });
    console.log("ceart Orders SUCCESSFULLY");
  } catch (error) {
    res.send(error);
  }
};

const GetOrders = async (req, res) => {
  try {
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: "products", // Assuming 'products' is the collection name for the Product model
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product", // Unwind the 'product' array
      },
    ]);
 
    res.send({ data: orders, res: "hih" });
  } catch (error) {
    res.send({ error });
  }
};

const DeletOrder = async (req, res) => {
  try {
    const { orderid } = req.headers;
    // Delete the order by ID
    const deletedOrder = await Order.findByIdAndDelete(orderid);
    console.log("===>",deletedOrder)

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    else{
      res.status(200).json({ message: 'Order deleted successfully', data: deletedOrder });
    }

  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the order', error });
  }
};

module.exports = { GetOrders, CreatOrder, DeletOrder };

