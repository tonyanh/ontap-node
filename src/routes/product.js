import express from 'express';
import { get, getDetail, create, update, remove } from "../controllers/product"
const routerProduct = express.Router();

routerProduct.get("/", get);
routerProduct.get("/:id", getDetail);
routerProduct.post("/", create)
routerProduct.put("/:id", update);
routerProduct.delete("/:id", remove)

export default routerProduct


// import express from 'express';
// import {get, create, getDetail, update, remove} from "../controllers/product"
// const routerProduct = express.Router();

// routerProduct.get("/", get);
// routerProduct.get("/:id", getDetail);
// routerProduct.post("/", create);
// routerProduct.put("/:id", update);
// routerProduct.delete("/:id", remove);
// export default routerProduct 