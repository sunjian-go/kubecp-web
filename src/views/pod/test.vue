<template>
    <el-upload
      ref="upload"
      :action="uploadUrl"
      :on-change="handleChange"
      :before-upload="beforeUpload"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
      >上传文件</el-button>
    </el-upload>
  </template>
  
  <script>
  export default {
    data() {
      return {
        uploadUrl: 'http://127.0.0.1:8081/api/upload?podName=nginx&namespace=sjtest&containerName=nginx&path=/tmp',
        fileList: [],
        currentUploadIndex: 0,
      };
    },
    methods: {
      handleChange(file, fileList) {
        // 更新文件列表
        this.fileList = fileList;
      },
      beforeUpload() {
        // 阻止自动上传
        return false;
      },
      submitUpload() {
        if (this.fileList.length > 0) {
          this.uploadNext();
        }
      },
      uploadNext() {
        if (this.currentUploadIndex < this.fileList.length) {
          const fileItem = this.fileList[this.currentUploadIndex];
          this.$refs.upload.submit(fileItem); // 上传当前文件
        }
      },
      handleSuccess(response, file, fileList) {
        this.currentUploadIndex++;
        if (this.currentUploadIndex < this.fileList.length) {
          this.uploadNext(); // 继续上传下一个文件
        } else {
          this.currentUploadIndex = 0; // 重置索引
          this.fileList = []; // 清空文件列表
        }
      },
      handleError(err, file, fileList) {
        // 处理上传错误
        console.error('Upload error:', err);
        this.currentUploadIndex++;
        this.uploadNext(); // 即使出错也继续上传下一个文件
      },
    },
  };
  </script>
  