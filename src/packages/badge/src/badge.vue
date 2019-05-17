<template>
  <div class="x-badge-con citn-clear">
    <slot></slot>
    <span
      class="x-badge"
      :class="[classes,type,computedBold,computedAlign,dot?computedSize:'']"
      :style="[computedBackgroundColor,computedColor]"
    >
      <span v-if="content && content !='' && !dot">{{content}}</span>
      <span v-else>{{dot?'':computedCount}}</span>
    </span>
    
  </div>
</template>
<script>
export default {
  name: "x-badge",
  props: {
    count: {
      type: [String, Number],
      default: 0
    },
    maxCount: {
      type: [String, Number],
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "circle"
    },
    bold: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    },
    size: {
      type: [String,Number],
      default: 'default'
    }
  },
  mounted() {},
  computed: {
    computedSize(){
      if(this.size == 'small'){
        return 'x-badge-size-small'
      }else{
        return 'x-badge-size-default'
      }
    },
    computedBold() {
      return this.bold ? "bold" : "";
    },
    computedBackgroundColor() {
      return { backgroundColor: this.backgroundColor };
    },
    computedColor() {
      return { color: this.color };
    },
    computedCount() {
      if (parseInt(this.count) > parseInt(this.maxCount)) {
        return this.maxCount + "+";
      } else {
        return this.count;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.x-badge {
  display: inline-block;
  text-align: center;
  position: absolute;
  left:100%;
  height: 8px;
  min-width: 8px;
  line-height:8px;
  top: -12px!important;
  bottom:auto;
  width: max-content;
  z-index:1;
}
.x-badge-con {
  display: inline-block;
  position: relative;
}
.x-badge-size-default {
  padding: 0px !important;
  height: 8px;
  min-width: 8px;
  line-height:8px;
}
.x-badge-size-small {
  padding: 0px !important;
  min-width:5px;
  height:5px;
  line-height:5px;
}

.round {
  border-radius: 4px;
  display: inline-block;
  background: red;
  color: #fff;
  font-size: 12px;
  padding: 6px;
}
.circle {
  border-radius: 20px;
  display: inline-block;
  background: red;
  color: #fff;
  font-size: 12px;
  padding: 6px;
}
.bold {
  font-weight: bold;
}
</style>
