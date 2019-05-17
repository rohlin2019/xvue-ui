<style lang="scss" scoped>
.x-counter {
  display: inline-flex;
  border: 1px solid rgb(220, 220, 220);
  .x-rect-btn-minus {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: #797575;
  }
  .x-rect-btn-zengjia {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: #797575;
  }
  .x-count-input {
    outline: none;
    width: 60px;
    text-align: center;
    height: 30px;
    padding: 0;
    border: 1px solid rgb(220, 220, 220);
    margin: 0;
    overflow: hidden;
    caret-color: rgb(220, 220, 220);
    border-top: none;
    border-bottom: none;
    color: #797575;
    font-size: 14px;
  }

  .x-counter-disabled {
    background: #f2f4f7 !important;
    cursor: not-allowed !important;
    user-select: none;
    color:#797575!important;
  }
  .x-counter-input-disabled {
    background: #fff !important;
    user-select: none;
  }
  .x-counter-size-small-span {
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size:12px;
  }
  .x-counter-size-small-input {
    width: 40px;
    font-size: 8px;
    height: 20px;
    line-height: 20px;
  }
  .x-counter-size-large-span {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size:18px;
  }
  .x-counter-size-large-input {
    width: 70;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
  }
}
.x-counter-default-radius {
  border-radius: 0px;
  overflow: hidden;
}
.x-counter-has-radius {
  border-radius: 20px;
  overflow: hidden;
}
</style>

<template>
  <div class="x-counter"
       :class="[{'x-counter-has-radius':isRound}]"
      >
    <span
      class="x-rect-btn-minus citnfont citn-minus"
      :class="[{'x-counter-disabled':disabled || leftIsDisabled,'x-counter-size-small-span':counterSize == 'small','x-counter-size-large-span':counterSize == 'large'}]"
      @click="minus"
      :style="[computedBtnBackgroundColor,computedBtnColor]"
    ></span>
    <input
      :disabled="disabled || inputDisabled"
      v-model="inputValue"
      @input="input"
      class="x-count-input"
      :class="[inputDisabled?inputDisabledClass:'',{'x-counter-disabled':disabled,'x-counter-size-small-input':counterSize == 'small','x-counter-size-large-input':counterSize == 'large'}]"
      type="text"
      @focus="focus"
      @blur="blur"
    >
    <span
      class="x-rect-btn-zengjia citnfont citn-zengjia"
      :class="[{'x-counter-disabled':disabled || rightIsDisabled,'x-counter-size-small-span':counterSize == 'small','x-counter-size-large-span':counterSize == 'large'}]"
      @click="add"
      :style="[computedBtnBackgroundColor,computedBtnColor]"
    ></span>
  </div>
</template>
<script>
import utils from "../../../utils/index.js";
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inputDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    isRound: {
      type: Boolean,
      default: true
    },
    btnBackgroundColor:{
      type: String,
      default: "#fff"
    },
    btnColor:{
      type: String,
      default: "#797575"
    }
  },
  data() {
    return {
      inputValue:
        parseInt(this.value) < parseInt(this.min)
          ? parseInt(this.min)
          : parseInt(this.value),
      inputDisabledClass: this.inputDisabled ? "x-counter-input-disabled" : "",
      counterSize:
        this.size == "small"
          ? "small"
          : this.size == "large"
            ? "large"
            : "default",
      leftIsDisabled:false,
      rightIsDisabled:false
    };
  },
  computed:{
    computedBtnBackgroundColor(){
      return {
        background:this.btnBackgroundColor
      }
    },
    computedBtnColor(){
      return {
        color:this.btnColor
      }
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    },
    inputDisabledClass(newValue) {
      if (this.newValue) {
        this.inputDisabledClass = "x-counter-input-disabled";
      }
    },
    size(newValue) {
      this.counterSize =
        this.size == "small"
          ? "small"
          : this.size == "large"
            ? "large"
            : "default";
    }
  },
  mounted(){
    this.maxormin()
    this.leftRightIsDisabled()
  },
  methods: {
    
    leftRightIsDisabled(){
      if(parseInt(this.inputValue) <= parseInt(this.min)){
        this.leftIsDisabled = true
      }else{
        this.leftIsDisabled = false
      }

      if(parseInt(this.inputValue) >= parseInt(this.max)){
        this.rightIsDisabled = true
      }else{
        this.rightIsDisabled = false
      }
    },
    input(e) {
      if (utils.isNumber(this.inputValue)) {
        this.maxormin();
      } else {
        if (utils.isNumber(this.min)) {
          this.inputValue = this.min;
        } else {
          this.inputValue = 1;
        }
      }
      this.leftRightIsDisabled()

      this.$emit('on-input',parseInt(this.inputValue))
      this.change()
    },
    focus(){
      this.$emit('on-focus',parseInt(this.inputValue))
    },
    blur(){
      this.$emit('on-blur',parseInt(this.inputValue))
    },
    change(){
      this.$emit('on-change',parseInt(this.inputValue))
    },
    minus() {
      if (!this.disabled) {
        this.inputValue = parseInt(
          parseInt(this.inputValue) - parseInt(this.step)
        );
        this.maxormin();
      }
      this.leftRightIsDisabled()

      this.$emit('on-minus',parseInt(this.inputValue))
      this.change()
    },
    add() {
      if (!this.disabled) {
        this.inputValue = parseInt(
          parseInt(this.inputValue) + parseInt(this.step)
        );
        this.maxormin();
      }
      this.leftRightIsDisabled()

      this.$emit('on-add',parseInt(this.inputValue))
      this.change()
    },
    maxormin() {
      if (this.min != "-Infinity" && parseInt(this.inputValue) < parseInt(this.min)) {
        this.inputValue = this.min;
      } else if (this.max != "Infinity" && parseInt(this.inputValue) > parseInt(this.max)) {
        this.inputValue = this.max;
      }
    }
  }
};
</script>
