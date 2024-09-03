import Router from "koa-router";
import * as userController from "../controllers/userController";

const router = new Router();
// defining routes for a server using a routing system
router.get("/users", userController.getList);
router.get("/userInfo", userController.userInfo);
router.post("/users/scanJson", userController.scanJson);
export default router;
