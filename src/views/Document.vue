<template>
  <div class="home">
    <p>文档</p>
    <el-button @click="num++">{{ num }}</el-button>
  </div>
</template>

<script>
export default {
  name: "Document",
  components: {},
  data() {
    return {
      num: 0
    };
  }
};
</script>
<style scoped></style>
