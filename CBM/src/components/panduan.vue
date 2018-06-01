<template>
<div>
  <el-radio-group v-model="radio2">
    <el-radio :label="1">正确</el-radio>
    <el-radio :label="2">错误</el-radio>
  </el-radio-group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio2: 2
      };
    }
  }
</script>