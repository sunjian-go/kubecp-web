import Cookies from "js-cookie";
export default {
  // k8sTerminalWs: "ws://" + Cookies.get("wshost") + ":8082/ws",
  // K8sGetLogs: "ws://" + Cookies.get("wshost") + ":8081/api/getlogs",
  k8sTerminalWs: "ws://127.0.0.1:8082/ws",
  K8sGetLogs: "ws://127.0.0.1:8081/api/corev1/getlog",
  //编辑器配置
  cmOptions: {
    mode: "text/yaml", //编辑器的内容格式
    theme: "idea", //编辑器主题
    lineNumbers: true, //显示行数
    smartIndent: true, //智能缩进
    indentUnit: 4, // 智能缩进单元长度为 4 个空格
    styleActiveLine: true, // 显示选中行的样式
    matchBrackets: true, //每当光标位于匹配的方括号旁边时，都会使其高亮显示
    readonly: false,
    linewrapping: true, //自动换行
  },
};
