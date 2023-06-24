const Product =require('../models/ProductModel')
const multer = require('multer')



const filename = ''; 

const mystorage = multer.diskStorage({
  destination:'./uploads/products/images',
  filename:(req,file,redirect)=>{
    let date= Date.now();
    let fl = date + '.'+ file.mimetype.split('/')[1]
    redirect(null , fl );
    filename = fl 
  }
})

const upload = ()=>{
  multer({storage:mystorage})
} 

const CreatProduct=  async(req, res) => {
    try{
      const {titel,description} = req.body
      const  product = new Product({titel,description,userId:req.user.id})
      sevedproduct = await product.save()
      res.send(`${sevedproduct} creat is successfully`)
console.log(" creat is successfully")
    }catch(error){
      res.send(error)
    }
   
    
  }

const GetProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({data:products, res:"ok"});
      console.log("GET PRODUCTS SUCCESSFULLY")
    } catch (error) {
      res.send({ error });
    }
  };



const GetProductById= async (req, res) => {
    try {
      const id = req.params.id;
      const products = await Product.findById(id);
      res.status(200).json(products);
    } catch (err) {
      res.send(err);
    }
  };


  const GetProductByUser= async (req, res) => {

    try {
      const UserId = req.params.id;
      console.log(UserId)
      const products = await Product.find({userId:UserId});
      res.status(200).json(products);
    } catch (err) {
      res.send(err);

    }

  };


  const UpdateProduct = async (req, res) => {
    const ID = req.params.id;
    const newdata = req.body;
  
    try {
      await Product.findByIdAndUpdate(ID, newdata);
      res.status(200).send("Update Successful");
    } catch (err) {
      res.status(500).send(err);
    }
  };


  const DeleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
      await Product.findByIdAndDelete(id);
      return res.status(200).send('Delete complete');

      // const test =
      // if (!test) {
      //   return res.status(400).json({ msg: "This ID does not exist" });
      // }
      // return res.status(200).send('Delete complete');
    } catch (error) {
      return res.status(500).send("Failed to delete the product");
    }
  };
  

module.exports = {upload, CreatProduct,GetProducts ,GetProductById,GetProductByUser,UpdateProduct,DeleteProduct} 
  