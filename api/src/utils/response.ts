export interface ApiResponse<T> {
  code: number;
  data: T;
  msg: string;
}

export const createResponse = <T>(
  code: number,
  data: T,
  msg: string,
): ApiResponse<T> => {
  return { code, data, msg };
};
