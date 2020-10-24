<template>
  <transition :name="transitionName">
    <div v-show="visible" class="back-to-top" @click="goTop">
      <svg class="icon icon-rising" aria-hidden="true">
        <use xlink:href="#icon-rising"></use>
      </svg>
    </div>
  </transition>
</template>
<script>
import scrollTo from "./../../utils/scrollTo";

export default {
  name: "BackToTop",
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    transitionName: {
      type: String,
      default: "fade"
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight;
    },
    goTop() {
      scrollTo(this.backPosition);
    }
  }
};
</script>
<style lang="less" scoped>
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7eaf1;
  border-radius: 4px;
  cursor: pointer;
}
.icon-rising {
  fill: #666;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
