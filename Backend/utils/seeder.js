const Product=require('../models/product');
const dotenv=require('dotenv');
const connectDatabase=require('../config/database');
const products=require('../data/products.json');
// setting doteenv file
dotenv.config({path: 'Backend/config/config.env'})
connectDatabase();
const seedProducts= async () => {
    try{
        await Product.deleteMany();
        console.log('Products are deleted');
        await Product.insertMany(products)
        console.log('ALL Products are added.')
        process.exit();

    }catch(error){
        console.log(error.message);
        process.exit();
        
    }
}

seedProducts()
