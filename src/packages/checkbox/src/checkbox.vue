
<style lang="scss" scoped>
.xvue-ui-checkbox{
  position:relative;
  display: inline-flex;
  align-items: center;
  width: 15px;
  height: 15px;
  border:1px solid rgb(190,190,190);
  overflow: hidden;
  padding:2px;
  border-radius:4px;
  background:#fff;
  .xvue-ui-checkbox-hidden{
      opacity: 0;
      width: 15px;
      height: 15px;
      margin: 0;
      position: absolute;
      font-size: 14px;
      cursor: pointer;
      opacity: 0!important;
  }
  .xvue-ui-checkbox-span{
    cursor: pointer;
    display:inline-block;
    width:15px;
    height:15px;
    position: absolute;
  }
  .xvue-ui-checkbox-span-icon{
    color:#000;
  }
  .xvue-ui-checkbox-disabled{
    opacity: .5;
    cursor:not-allowed;
  }
}
.xvue-ui-checkbox-radius{
  border-radius: 50%;
}
.xvue-ui-checkbox-after{
  display:inline-flex;
  font-size:14px;
  align-items: center;
  margin:0px 5px;
  cursor: pointer;
}
.xvue-ui-checkbox-text{
  display:inline-block;
  margin-left: 5px;
  margin-right: 5px;
  font-size:14px;
}
</style>

<template>
  <label class="xvue-ui-checkbox-after">
    <div v-if="labelPosition == 'left'" class="xvue-ui-checkbox-text"><slot></slot></div>
    <div class="xvue-ui-checkbox"
    :class="[{'xvue-ui-checkbox-radius':isRadius}]"
    :style="[computedChecked?computedCheckedBackgroundColor:'']"
    >
      <div class="xvue-ui-checkbox-span"
      :class="[{'xvue-ui-checkbox-disabled':disabled}]"
      >
        <span class="xvue-ui-checkbox-span-icon citnfont citn-checkbox" 
        v-if="computedChecked && !classes.enabled" 
        :style="[computedCheckedColor]"
        ></span>

        <span class="xvue-ui-checkbox-span-icon" 
        :class="[classes.class?classes.class:'citnfont citn-checkbox']"
        v-else-if="computedChecked && classes.enabled" 
        :style="[computedCheckedColor]"
        ></span>
        
      </div>
      <input
      :disabled="disabled"
      :class="[{'xvue-ui-checkbox-disabled':disabled}]"
      class="xvue-ui-checkbox-hidden"
      aria-hidden="true"
      ref="xvueUiCheckbox"
      type="checkbox"
      :name="name"
      :label="label"
      :checked="computedChecked"
      @change="onChange"
      >
    </div>
    <div v-if="labelPosition == 'right'" class="xvue-ui-checkbox-text"><slot></slot></div>
  </label>
</template>
<script>
export default {
  componentName:'xCheckbox',
  props:{
    checked:{
      type:Boolean,
      default:false
    },
    name:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    label:{
      type:String,
      default:''
    },
    checkedColor:{
      type:String,
      default:'#333'
    },
    checkedBackgroundColor:{
      type:String,
      default:'#fff'
    },
    isRadius:{
      type:Boolean,
      default:false
    },
    labelPosition:{
      type:String,
      default:'right'
    },
    classes:{
      type:[Object],
      default:function () {
        return {
          enabled:false,
          class:''
        }
      }
    }
  },
  data(){
    return {
      dataChecked:this.checked
    }
  },
  watch:{
    checked(newVal){
      this.computedChecked = newVal
    }
  },
  computed:{
    computedCheckedBackgroundColor(){
      return {
        background:this.checkedBackgroundColor
      }
    },
    computedCheckedColor(){
      return {
        color:this.checkedColor
      }
    },
    computedChecked:{
      get(){
        return this.dataChecked
      },
      set(newVal){
        this.dataChecked = newVal
      }
    }
  },
  mounted(){
    this.isChecked()
  },
  methods:{
    isChecked(){
      
    },
    onChange(e){
      this.computedChecked = e.target.checked
      this.$emit('on-change',{label:this.label,checked:e.target.checked})
      
        let parent = this.$parent;
        if (parent && parent.$options.componentName === "xCheckboxGroup") {
          this.$parent.onChange({label:this.label,checked:e.target.checked})
        }
    }
  }
}
</script>

