<template>
  <div>
    <template v-for="item in routes">
      <el-submenu
        v-if="item.children && item.children.length"
        :index="item.path"
        :key="item.path"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">
            {{ (item.meta && item.meta.title) || "" }}
          </span>
        </template>
        <template v-for="innerItem in item.children">
          <el-submenu
            v-if="innerItem.children && innerItem.children.length"
            :index="innerItem.path"
            :key="innerItem.path"
          >
            <template slot="title">
              <i :class="innerItem.icon"></i>
              <span slot="title">
                {{ (innerItem.meta && innerItem.meta.title) || "" }}
              </span>
            </template>
            <Submenu :routes="innerItem.children" />
          </el-submenu>
          <router-link
            v-else
            :key="innerItem.path"
            :to="{ path: innerItem.path }"
          >
            <el-menu-item :index="innerItem.path">
              <i :class="innerItem.icon"></i>
              {{ (innerItem.meta && innerItem.meta.title) || "" }}
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
      <router-link v-else :key="item.path" :to="{ path: item.path }">
        <el-menu-item :index="item.path">
          <i :class="item.icon"></i>
          {{ (item.meta && item.meta.title) || "" }}
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: "Submenu",
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  created() {
    // console.log(this.routes);
  }
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo {
  border-right: 0;
}
</style>
