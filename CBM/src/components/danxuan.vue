<template>
<div>
  <el-radio-group v-model="radio2">
    <el-radio :label="1">A</el-radio>
    <el-radio :label="2">B</el-radio>
    <el-radio :label="3">C</el-radio>
    <el-radio :label="4">D</el-radio>
  </el-radio-group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>