<template>
  <div class="wrap-container">
    <div class="sidebar" :class="{ isCollapse: collapse }">
      <Sidebar />
    </div>
    <div class="main" :class="{ isCollapse: collapse }">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="tagsbar">
        <Tagsbar />
      </div>
      <div class="content">
        <keep-alive :include="keepAliveList">
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Tagsbar from "./tagsbar";
export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    Tagsbar
  },
  computed: {
    ...mapGetters(["collapse", "keepAliveList"])
  },
  created() {}
};
</script>
<style lang="less" scoped>
.wrap-container {
  width: 100%;
  height: 100%;
}
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 210px;
  background-color: #304156;
  .el-scrollbar {
    height: 100%;
  }
}
.sidebar.isCollapse {
  width: 54px;
}
.main {
  margin-left: 210px;
  height: 100%;
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
