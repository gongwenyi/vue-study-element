<template>
  <div class="i18n">
    <p>{{ $t("route.home") }}</p>
    <p v-t="'route.home'"></p>
  </div>
</template>

<script>
export default {
  name: "I18n",
  components: {},
  data() {
    return {};
  }
};
</script>
<style scoped></style>
