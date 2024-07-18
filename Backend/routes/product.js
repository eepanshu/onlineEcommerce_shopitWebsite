const express =require('express')
const router = express.Router();
const { getProducts, newProduct, getSingleProduct,updateProduct,deleteProduct,createProductReview,getProductReviews} =require('../controllers/productController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
router.route('/products').get(isAuthenticatedUser, authorizeRoles('admin'),getProducts);
router.route('/product/:id').get(getSingleProduct);


router.route('/admin/product/new').post(isAuthenticatedUser,newProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser,updateProduct);
router.route('/admin/product/:id').delete(isAuthenticatedUser,deleteProduct);

router.route('/review').put(isAuthenticatedUser,createProductReview);
router.route('/reviews').get(isAuthenticatedUser,getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser,deleteProduct);

module.exports=router;