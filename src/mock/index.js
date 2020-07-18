import mock, { Random } from "mockjs";

mock.setup({
  timeout: "200-600" // 设置延迟响应
});

const baseUrl = process.env.VUE_APP_BASE_API;

mock.mock(`${baseUrl}/login`, () => {
  return mock.mock({
    code: 200,
    data: {
      token: Random.string(10),
      "role|1": ["admin", "editer"]
    }
  });
});

export default mock;
