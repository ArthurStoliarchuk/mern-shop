import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
   try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
   } catch (error) {
      console.error("Error in Get Products: ", error);
      res.status(500).json({ success: false, message: 'Server Error' });
   }
};

export const createProduct = async (req, res) => {
   const { name, price, image } = req.body;

   if (!name || !price || !image) {
      return res.status(400).json({ success: false, message: 'Please enter all fields' });
   }

   const newProduct = new Product({
      name,
      price,
      image
   });

   try {
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct });
   } catch (error) {
      console.error("Error in Create Product: ", error);
      res.status(500).json({ success: false, message: 'Server Error' });
   }
};

export const updateProduct = async (req, res) => {
   const { id } = req.params;
   const { name, price, image } = req.body;

   if (!name || !price || !image) {
      return res.status(400).json({ success: false, message: 'Please enter all fields' });
   }

   try {
      const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, image }, { new: true });
      res.status(200).json({ success: true, data: updatedProduct });
   } catch (error) {
      console.error("Error in Update Product: ", error);
      res.status(500).json({ success: false, message: 'Server Error' });
   }
};

export const deleteProduct = async (req, res) => {

   
   const { id } = req.params;
   
   if (!moongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: 'Invalid Product ID' });
   }

   try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'Product deleted successfully' });
   } catch (error) {
      console.error("Error in Delete Product: ", error);
      res.status(500).json({ success: false, message: 'Server error' });
   }
};