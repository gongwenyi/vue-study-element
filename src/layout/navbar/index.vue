<template>
  <div class="navbar-content">
    <div class="navbar-content-left">
      <div class="toggle-collapse" @click="toggleCollapse">
        <i
          :class="{ isCollapse: collapse }"
          class="el-icon-s-unfold hamburger"
        />
      </div>
      <el-breadcrumb separator="/">
        <template v-for="item in breadcrumbRoutes">
          <el-breadcrumb-item :key="item.path">
            {{ getPageTitle(item.meta.title) }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="navbar-dropdown">
      <el-dropdown @command="handleLang">
        <div class="navbar-lang">
          <svg class="icon icon-zyw" aria-hidden="true">
            <use xlink:href="#icon-zhongyingwen"></use>
          </svg>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh" :disabled="lang === 'zh'"
            >中文</el-dropdown-item
          >
          <el-dropdown-item command="en" :disabled="lang === 'en'"
            >English</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
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
import getPageTitle from "./../../utils/getPageTitle";
export default {
  name: "Navbar",
  data() {
    return {
      breadcrumbRoutes: []
    };
  },
  computed: {
    ...mapGetters(["collapse"]),
    lang() {
      return this.$i18n.locale;
    }
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
    handleLang(command) {
      if (command !== this.lang) {
        this.lang = command;
        localStorage.setItem("lang", command);
        this.$i18n.locale = command;
      }
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
    },
    getPageTitle
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
  font-size: 22px;
  color: #333333;
  transform: rotateY(180deg);
}
.hamburger.isCollapse {
  transform: rotateY(0deg);
}
.navbar-dropdown {
  margin-right: 30px;
}
.navbar-lang {
  padding: 0 30px;
  cursor: pointer;
}
.navbar-avatar {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
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
