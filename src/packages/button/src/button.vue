<template>
  <button
    @click="handleClickLink"
    class="x-button"
    :class="[type,size,{'simple':simple,'disabled':disabled,'round':round,'circle':circle,'long':long}]"
    :disabled="disabled"
    :type="nativeType"
    :style="{'opacity':opacity}"
  >
    <i v-if="loading" class="citnfont citn-loading"></i>
    <i v-if="iconPosition == 'left'" :class="icon?'citnfont '+icon:''"></i>
    <span><slot></slot></span>
    <i v-if="iconPosition == 'right'" :class="icon?'citnfont '+icon:''"></i>
  </button>
</template>
<script>
export default {
  name: "x-button",
  props: {
    disabled: {
      type: Boolean,
      default: this.disabled && this.disabled != false ? true : false
    },
    type: {
      type: String,
      default: "default"
    },
    simple: {
      type: Boolean,
      default: this.simple && this.simple != false ? true : false
    },
    round: {
      type: Boolean,
      default: this.round && this.round != false ? true : false
    },
    circle: {
      type: Boolean,
      default: this.circle && this.circle != false ? true : false
    },
    long: {
      type: Boolean,
      default: this.long && this.long != false ? true : false
    },
    icon: {
      type: String,
      default: ""
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    size: {
      type: String,
      default: "normal"
    },
    nativeType:{
      type: String,
      default: "button"
    },
    opacity:{
      type: String,
      default: "1"
    },
    loading:{
      type: Boolean,
      default: false
    },
    to:String,
    target:{
      type:String,
      default:'_blank'
    }
  },
  data(){
    return{
      toFlag:false
    }
  },
  methods:{
    handleClickLink (event) {
      if(this.to){
        window.open(this.to,this.target)
      }
      this.$emit('click', event);
    }
  },
  watch:{
    
  }
};
</script>
<style lang="scss" scoped>
@import "../../../config/css/scss.scss";

.x-button {
  display: inline-block;
  margin:5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  line-height: 1;
  transition: 0.1s;
  user-select: none;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.round {
    border-radius: 20px;
  }
  &.circle {
    border-radius: 50%;
    padding: 10px;
  }
  &.long{
    width:100%;
  }
}
.normal {
  font-size: 14px;
  padding: 10px 18px;
}
.small {
  font-size: 12px;
  padding: 8px 15px;
}
.large {
  font-size: 18px;
  padding: 14px 22px;
}

.default {
  color: $citnDefaultColor;
  background: $citnSimpleDefaultColor;
  border: $citnBorderDefaultColor;
  &:active:not(.disabled) {
    color: $citnPrimaryColor;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.primary {
  color: #fff;
  background: $citnPrimaryColor;
  border: $citnBorderPrimaryColor;
  &:active:not(.disabled) {
    opacity: 0.9!important;
  }
  &.simple {
    background: $citnSimplePrimaryColor;
    color: $citnPrimaryColor;
    &:active:not(.disabled) {
      background: $citnPrimaryColor;
      color: #fff;
    }
  }
}

.success {
  color: #fff;
  background: $citnSuccessColor;
  border: $citnBorderSuccessColor;
  &:active:not(.disabled) {
    opacity: 0.9!important;
  }
  &.simple {
    background: $citnSimpleSuccessColor;
    color: $citnSuccessColor;
    &:active:not(.disabled) {
      background: $citnSuccessColor;
      color: #fff;
    }
  }
}

.info {
  color: #fff;
  background: $citnInfoColor;
  border: $citnBorderInfoColor;
  &:active:not(.disabled) {
    opacity: 0.9!important;
  }
  &.simple {
    background: $citnSimpleInfoColor;
    color: $citnInfoColor;
    &:active:not(.disabled) {
      background: $citnInfoColor;
      color: #fff;
    }
  }
}

.warning {
  color: #fff;
  background: $citnWarningColor;
  border: $citnBorderWarningColor;
  &:active:not(.disabled) {
    opacity: 0.9!important;
  }
  &.simple {
    background: $citnSimpleWarningColor;
    color: $citnWarningColor;
    &:active:not(.disabled) {
      background: $citnWarningColor;
      color: #fff;
    }
  }
}

.danger {
  color: #fff;
  background: $citnDangerColor;
  border: $citnBorderDangerColor;
  &:active:not(.disabled) {
    opacity: 0.9!important;
  }
  &.simple {
    background: $citnSimpleDangerColor;
    color: $citnDangerColor;
    &:active:not(.disabled) {
      background: $citnDangerColor;
      color: #fff;
    }
  }
}
</style>