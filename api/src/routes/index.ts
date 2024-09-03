import Router from "koa-router";
import * as userController from "../controllers/userController";

const router = new Router();

router.get("/users", userController.getList);
router.get("/users/:id", userController.showJson);
router.post("/users/scanJson", userController.scanJson);
export default router;
