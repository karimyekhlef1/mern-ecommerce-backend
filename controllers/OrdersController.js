const Order =require('../models/OrderModel')
const product = require('../models/ProductModel')


const CreatOrder =  async (req, res) => {
  try {
    const {nameUser ,phoneUser , addressUser , productId} = req.body

    const  order = new Order({nameUser ,phoneUser , addressUser , productId})
    await order.save()

    res.status(400).json({data:order, res:"hiih"});
    console.log("ceart Orders SUCCESSFULLY")
  } catch (error) {
    res.send(error );
  }
};



const GetOrders = async (req, res) => {
  try {
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'products', // Assuming 'products' is the collection name for the Product model
          localField: 'productId',
          foreignField: '_id',
          as: 'product'
        }
      },
      {
        $unwind: '$product' // Unwind the 'product' array
      }
    ]);

    res.send({ data: orders, res: 'ok' });
  } catch (error) {
    res.send({ error });
  }
};




// const GetProductById= async (req, res) => {
//     try {
//       const id = req.params.id;
//       const products = await Product.findById(id);
//       res.status(200).json(products);
//     } catch (err) {
//       res.send(err);
//     }
//   };


//   const GetProductByUser= async (req, res) => {

//     try {
//       const UserId = req.params.id;
//       console.log(UserId)
//       const products = await Product.find({userId:UserId});
//       res.status(200).json(products);
//     } catch (err) {
//       res.send(err);

//     }

//   };


//   const UpdateProduct = async (req, res) => {
//     const ID = req.params.id;
//     const newdata = req.body;
  
//     try {
//       await Product.findByIdAndUpdate(ID, newdata);
//       res.status(200).send("Update Successful");
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   };


//   const DeleteProduct = async (req, res) => {
//     try {
//       const id = req.params.id;
//       await Product.findByIdAndDelete(id);
//       return res.status(200).send('Delete complete');

//       // const test =
//       // if (!test) {
//       //   return res.status(400).json({ msg: "This ID does not exist" });
//       // }
//       // return res.status(200).send('Delete complete');
//     } catch (error) {
//       return res.status(500).send("Failed to delete the product");
//     }
//   };
  
module.exports = {GetOrders ,CreatOrder} 
  