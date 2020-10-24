<template>
  <div class="home">
    首页
    <el-button @click="num++">{{ num }}</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      num: 0
    };
  }
};
</script>
<style scoped></style>
