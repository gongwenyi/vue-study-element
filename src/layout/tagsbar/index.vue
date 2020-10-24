<template>
  <el-scrollbar :vertical="false" class="scroll-bar">
    <div class="tagsbar-list">
      <router-link
        v-for="tag in tagsList"
        class="tagsbar-link"
        active-class="active"
        :key="tag.path"
        :to="{
          path: tag.path,
          params: tag.params,
          query: tag.query,
          fullPath: tag.fullPath
        }"
      >
        <span>{{ tag.meta && tag.meta.title }}</span>
        <span @click.prevent.stop="closeTag(tag)" class="icon-close">
          <i class="el-icon-close" />
        </span>
      </router-link>
    </div>
  </el-scrollbar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Tagsbar",
  computed: {
    ...mapGetters(["tagsList"])
  },
  watch: {
    $route() {
      this.addTag();
    }
  },
  mounted() {
    this.addTag();
  },
  methods: {
    isActive(tag) {
      return tag.path === this.$route.path;
    },
    addTag() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsbar/addTag", this.$route);
      }
    },
    closeTag(tag) {
      console.log(tag);
      this.$store.dispatch("tagsbar/closeTag", tag).then(tagsList => {
        // 如果关闭当前路由，跳转到路由列表的最后一个
        if (this.isActive(tag)) {
          if (tagsList.length) {
            const lastTag = tagsList.slice(-1)[0];
            this.$router.push(lastTag.fullPath);
          } else {
            this.$router.push({ path: "/", query: { t: Date.now() } });
          }
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.scroll-bar {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
.tagsbar-list {
  display: flex;
  padding: 3px 0;
  border-bottom: 1px solid #eee;
}
.tagsbar-link {
  height: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  padding: 0 8px 0 12px;
  color: #666;
  font-size: 12px;
  border: 1px solid #ddd;
  &.active {
    background-color: #42b983;
    color: #fff;
    border: 1px solid #42b983;
  }
  .icon-close {
    margin-left: 4px;
    padding: 4px;
    &:hover {
      color: #f00;
    }
  }
}
</style>
