import * as express from 'express';
import AuthController from '../controllers/AuthController';
import ProductController from '../controllers/ProductController';
import CategoryController from '../controllers/CategoryController';

const router = express.Router();

router.post("/auth/register" ,  AuthController.register)
router.post("/product" ,  ProductController.createProduct)
router.post("/category" ,  CategoryController.createCategory)

export default router;