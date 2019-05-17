<template>
  <div class="x-rate">
      <div class="x-rate">
          <span
              class="x-rate-span"
              v-for="(count,index) of count"
              :key="index"
          >
              <i
                  @click="addCount(index+1)"
                  :style="[computedSize,computedColor,parseInt(dataCurrentCount)>index?computedSelectColor:'']"
                  class="citnfont x-star"
                  :class="[computedCursor,classes!=''?classes:computedIconType]"
              ></i>
              <i v-if="allowHalf"
                  @click="addCount(index+0.5)"
                  class="citnfont x-star x-active-i"
                  :style="[computedSize,computedColor,dataCurrentCount>index?computedSelectColor:'']"
                  :class="[computedCursor,classes!=''?classes:computedIconType]"
              ></i>
          </span>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    currentCount: {
      type: Number,
      default: 2
    },
    count: {
      type: Number,
      default: 5
    },
    size: {
      type: Number,
      default: 25
    },
    color: {
      type: String,
      default: "#e8e8e8"
    },
    selectColor: {
      type: String,
      default: "red"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "star"
    },
    classes:{
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dataCurrentCount: this.currentCount
    };
  },
  computed: {
    computedIconType() {
      if (this.icon == "star") {
        return "citn-xingxing";
      } else if (this.icon == "love") {
        return "citn-aixin";
      } else {
        return "citn-xingxing";
      }
    },
    computedSize() {
      return {
        fontSize: this.size + "px"
      };
    },
    computedColor() {
      return {
        color: this.color
      };
    },
    computedSelectColor() {
      return {
        color: this.selectColor
      };
    },
    computedCursor() {
      if (!this.readonly) {
        return "x-cursor";
      }
    }
  },
  methods: {
    addCount(index) {
      if (!this.readonly) {
        this.dataCurrentCount = index;
      }
      this.$emit("on-change", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.x-rate-span {
  position: relative;
  overflow: hidden;
  display: inline-flex;
}
.x-active-i {
  width: 0.5em;
  position: absolute;
  left: 0;
  overflow: hidden;
}
.x-rate {
  display: inline-block;
  .x-star {
    display: inline-block;
  }
  .x-cursor {
    cursor: pointer;
  }
}
</style>