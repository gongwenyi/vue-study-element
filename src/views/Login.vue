<template>
  <div class="login-page">
    <el-form ref="login-form" :model="form" size="middle">
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          :loading="loading"
          @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from "./../api/user";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      loading: false
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      try {
        const res = await login(this.form.username, this.form.password);
        const { token, role } = res.data;
        if (token && role) {
          this.$store.commit("user/SET_USERINFO", res.data);
          this.$store.dispatch("user/permissionRoutes", role);
          this.$router.replace("/");
        }
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    }
  }
};
</script>
<style lang="less" scoped>
.login-page {
  width: 300px;
  margin: 200px auto 0;
}
.login-btn {
  width: 100%;
}
</style>
