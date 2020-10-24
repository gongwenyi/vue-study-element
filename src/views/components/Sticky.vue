<template>
  <div>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <sticky :z-index="10">
      <el-button type="primary">sticky top=0</el-button>
    </sticky>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <sticky :sticky-top="100">
      <el-button type="primary">sticky top=100</el-button>
    </sticky>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <el-button type="primary" @click="goTop">go top</el-button>
    <p>placeholder</p>
    <p>placeholder</p>
  </div>
</template>
<script>
import Sticky from "./../../components/Sticky";
import scrollTo from "./../../utils/scrollTo";
export default {
  name: "StickyPage",
  components: {
    Sticky
  },
  methods: {
    goTop() {
      scrollTo(0);
    }
  }
};
</script>
