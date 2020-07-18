<template>
  <div class="navbar-content">
    <div class="navbar-content-left">
      <div class="toggle-collapse" @click="toggleCollapse">
        <svg
          :class="{ isCollapse: collapse }"
          class="hamburger"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
        >
          <path
            d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
          />
        </svg>
      </div>
      <el-breadcrumb separator="/">
        <template v-for="item in breadcrumbRoutes">
          <el-breadcrumb-item :key="item.path">
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="navbar-dropdown">
      <el-dropdown @command="handleCommand">
        <div class="navbar-avatar">
          <div class="avatar">
            <img src="./../../assets/logo.png" />
          </div>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      breadcrumbRoutes: []
    };
  },
  computed: {
    ...mapGetters(["collapse"])
  },
  watch: {
    $route() {
      this.getMatchedRoutes();
    }
  },
  created() {
    this.getMatchedRoutes();
  },
  methods: {
    getMatchedRoutes() {
      this.breadcrumbRoutes = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
    },
    toggleCollapse() {
      this.$store.dispatch("sidebar/toggleCollapse");
    },
    handleCommand(command) {
      if (command === "logout") {
        this.handleLogout();
      }
    },
    handleLogout() {
      this.$confirm("确定要退出系统吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.commit("user/CLEAR_USERINFO");
        this.$router.push("/login");
      });
    }
  }
};
</script>
<style lang="less" scoped>
.navbar-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-content-left {
  display: flex;
  align-items: center;
}
.toggle-collapse {
  cursor: pointer;
  padding: 14px 15px 10px;
}
.hamburger {
  transform: rotateY(180deg);
}
.hamburger.isCollapse {
  transform: rotateY(0deg);
}
.navbar-dropdown {
  margin-right: 30px;
}
.navbar-avatar {
  display: flex;
  align-items: flex-end;
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    overflow: hidden;
    // background-color: #eee;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
