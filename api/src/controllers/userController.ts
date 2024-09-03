import { Context } from "koa";
import * as userService from "../services/userService";
import * as response from "../utils/response";

/**
 * @author Peng
 * @date 2024/8/30
 * @description：scan result submit
 */
export const scanJson = async (ctx: Context) => {
  // read and process a JSON file using an asynchronous,
  // and then respond to an HTTP request
  await userService.scanJson(ctx.request.body as userService.Result);
  ctx.body = response.createResponse(
    200,
    ctx.params.id,
    "scanJson successfully",
  );
};
/**
 * @author Peng
 * @date 2024/8/30
 * @description：get specific list based on input
 */
export const getList = async (ctx: Context) => {
  const results = await userService.getList();
  ctx.body = response.createResponse(
    200,
    results,
    "Result retrieved successfully",
  );
};
/**
 * @author Peng
 * @date 2024/8/30
 * @description：check it out in detailed
 */
export const userInfo = async (ctx: Context) => {
  // retrieves user information based on an ID
  const user = await userService.userInfo(ctx.query.id as string);
  // if get related ID, display all of them
  if (user) {
    ctx.body = response.createResponse(
      200,
      user,
      "Result retrieved successfully",
    );
  } else {
    ctx.body = response.createResponse(500, null, "Result not found");
  }
};
