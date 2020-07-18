<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :class="{ isCollapse: collapse }"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#409EFF"
    :collapse="collapse"
  >
    <Submenu :routes="permissionRoutes" />
  </el-menu>
</template>
<script>
import { mapGetters } from "vuex";
import { routes } from "./../../router";
import { filterRoutes } from "./../../utils";
import Submenu from "./submenu";
export default {
  name: "Sidebar",
  components: {
    Submenu
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["collapse", "permissionRoutes"]),
    routes() {
      console.log(routes);
      const tmp = filterRoutes(routes);
      return tmp;
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo {
  border-right: 0;
}
</style>
<style lang="less">
.el-menu-vertical-demo .el-menu .el-menu-item {
  background-color: #1f2d3d !important;
}
.el-menu-vertical-demo.isCollapse {
  .el-submenu__icon-arrow {
    display: none;
  }
  // .el-submenu__title span {
  //   width: 54px;
  //   display: inline-block;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  //   overflow: hidden;
  // }
}
</style>
