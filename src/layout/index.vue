<template>
  <div class="wrap-container">
    <div class="sidebar" :class="{ isCollapse: collapse }">
      <Sidebar />
    </div>
    <div class="main" :class="{ isCollapse: collapse }">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Sidebar from "./sidebar/index";
import Navbar from "./navbar/index";
export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar
  },
  computed: {
    ...mapGetters(["collapse"])
  },
  created() {}
};
</script>
<style lang="less" scoped>
.wrap-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 210px;
  background-color: #304156;
  overflow: auto;
}
.sidebar.isCollapse {
  width: 54px;
}
.main {
  margin-left: 210px;
  height: 100%;
  overflow: auto;
  transition: all ease-in-out 0.15s;
}
.main.isCollapse {
  margin-left: 54px;
}
.navbar {
  height: 50px;
  border-bottom: 1px solid #eeeeee;
}
.content {
  padding: 10px;
}
</style>
