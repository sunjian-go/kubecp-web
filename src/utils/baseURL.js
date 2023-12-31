let baseURL = "";
// 线上环境打包URL
if (process.env.NODE_ENV == "production") {
  baseURL = "/api";
} else {
  // 测试环境URL
  baseURL = "http://127.0.0.1:8081/api";
}
export default baseURL; //将该变量暴露出去
