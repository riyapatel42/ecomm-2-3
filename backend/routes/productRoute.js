const express = require("express");
const { getAllProducts, getProuctDetails, createProduct, updateProduct, deleteProduct, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


//aa get ane post request postman ma nakhine get ma get kri ane post ma post select kri body ma json ma data nakhvathi mongodb compass ma aai jase
router.route("/products").get(getAllProducts);


//specific 1 product ni details leva mate
router.route("/product/:id").get(getProuctDetails);


//aa post ,put,del vala ma authorizeroles ma admin lakhyu che etle admin vgr e thai nai ske requet approval
// it mean product ne create , update or delete khali admin j kri skse 
router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct)


//aa update vala ma postman ma req moklva mate product/id ma id mate pela get 
//vali mokline id aavse response ma e id copy krine mukvi and body json ma update kaik krine jovu pachi get ma enu joi levu update thai gyu hase 
router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);



router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);



// aa create review ma authorize role ma admin nailakhyu etle user pn review create kri ske
router.route("/review").put(isAuthenticatedUser, createProductReview);


router
    .route("/reviews")
    // aama kai nai lagyu mean game e mans review joi ske 
    .get(getProductReviews)
    // aama isauthenticated lagayu mean jene review lakhyu e j del kri ske 
    .delete(isAuthenticatedUser, deleteReview);
module.exports = router
