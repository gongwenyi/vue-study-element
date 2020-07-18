import request from "../request";

/**
 * 登录
 *
 * @export
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns
 */
export function login(username, password) {
  return request.post("/login", {
    username,
    password
  });
}
