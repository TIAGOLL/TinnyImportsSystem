import { Router } from "express";

import productController from "./controllers/productController";
import categoryController from "./controllers/categoryController";
import requestsController from "./controllers/requestsController";
import platformController from "./controllers/platformController";
import accountController from "./controllers/accountController";

const router = Router();

//products
router.get("/products", productController.findAllProducts);
router.get("/products/:id", productController.findProductById);
router.post("/products", productController.createProduct)
router.put("/products/:id", productController.updateProduct)
router.delete("/products/:id", productController.deleteProduct);

//requests
router.get("/requests", requestsController.findAllRequests)
router.get("/requests/:id", requestsController.findRequestsById)
router.put("/requests/:id", requestsController.updateRequest)
router.post("/requests", requestsController.createRequest)
router.delete("/requests/:id", requestsController.deleteRequest);

//categorys
router.get("/categorys", categoryController.findAllCategorys);
router.get("/categorys/:id", categoryController.findCategorysById);

//platforms
router.get("/platforms", platformController.findAllPlatforms);

//accounts
router.get("/accounts", accountController.findAllAccounts);

export { router };