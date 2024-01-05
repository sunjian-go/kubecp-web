<template>
  <div>
    <button @click="downloadFiles">下载文件</button>
  </div>
</template>

<script>
import { downloadFile } from "@/api/pod/pod";
export default {
  methods: {
    
    downloadFiles() {
      localStorage.setItem("req","download");
      console.log("ccccccccccccccccccc",localStorage.getItem("req"))
      this.$message.success({
        message:"开始下载，请稍后。。。"
      })
      // 构造请求参数
      const podinfo = {
        podName: "nginx",
        namespace: "sjtest",
        containerName: "nginx",
        filePath:"/tmp/test.mp4",
      };

      // 发起下载文件请求
      downloadFile(podinfo)
        .then((response) => {
          console.log("eeeeeeeeeeeeeeeeee", response);
          // 创建下载链接          
          const url = window.URL.createObjectURL(
            new Blob([response], { type: "application/octet-stream" })
          );
          const link = document.createElement("a");
          link.href = url;
          link.download = "test.tar";
    
          document.body.appendChild(link);
          
          // 模拟点击下载链接
          link.click();

          // 清理资源
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("下载文件失败：", error);
          this.$message.error({
            message:"下载失败，请检查是否文件过大或资源不足导致"
          })
        });
    },
  },
};
</script>
