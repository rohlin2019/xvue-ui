<template>
    <div class="xvue-menu-sub-con">
        <div class="xvue-menu-title citn-clear xvue-menu-hover-acitve" @click.stop="menuFun">
            <div class="xvue-menu-title-div">
                <slot name="title"></slot>
            </div>
            <span
                :class="[{'citn-rotateZ-deg':rotateZ}]"
                class="citnfont citn-arrow-right xvue-icon-right"
            ></span>
        </div>
        <div class="xvue-menu-sub" style="display:none;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      rotateZ: false
    };
  },
  methods: {
    menuFun(event) {
      this.$emit('click')
      if (!event.currentTarget) {
        return;
      }

      let nextEle = event.currentTarget.nextElementSibling;
      let className = nextEle.className.split(' ')

      for(var i =0;i<className.length;i++){
        if (className[i] == "xvue-menu-sub") {
          if (this.rotateZ) {
            nextEle.style.display = "none";
            this.rotateZ = false;
            this.$emit('close-menu')
          } else {
            nextEle.style.display = "block";
            this.rotateZ = true;
            this.$emit('open-menu')
          }
        }
      }
    }
  }
};
</script>
<style lang="scss">
.xvue-menu-title {
  padding: 15px 10px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  .xvue-menu-title-div{
      display:inline-block;
  }
  .xvue-icon-right {
    float: right;
    transition: all 0.1s;
    font-size: 12px;
  }
}
.xvue-menu-sub{
    padding-left:10px;
}
</style>
