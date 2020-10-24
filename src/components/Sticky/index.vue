<template>
  <div :style="{ zIndex: zIndex, height: height + 'px' }">
    <div :style="{ zIndex: zIndex, position: position, top: stickyTop + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sticky",
  props: {
    stickyTop: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      position: "",
      height: "",
      isSticky: false
    };
  },
  mounted() {
    this.height = this.$el.getBoundingClientRect().height; // 设置容器高度，防止子元素 fixed 时，下面的元素跳动上去
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const offsetTop = this.$el.getBoundingClientRect().top;
      if (offsetTop < this.stickyTop) {
        this.sticky();
      } else {
        this.reset();
      }
    },
    sticky() {
      if (!this.isSticky) {
        this.isSticky = true;
        this.position = "fixed";
      }
    },
    reset() {
      if (this.isSticky) {
        this.isSticky = false;
        this.position = "";
      }
    }
  }
};
</script>
