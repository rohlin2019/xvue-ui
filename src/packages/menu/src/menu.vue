<style lang="scss" >
.xvue-menu{
    position: relative;
    user-select: none;
}
</style>

<template>
    <div class="xvue-menu"
         :style="[computedIsFloat,computedBackground,computedColor,computedWidth]"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
  props:{
    isFloat:{
      type:Boolean,
      default:true
    },
    background:{
      type:String,
      default:'#fff'
    },
    color:{
      type:String,
      default:'#40464e'
    },
    selectedColor:{
      type:String,
      default:'#19b5fe'
    },
    width:{
      type:Number,
      default:200
    }
  },
  provide: {
    selectedColor:'#19b5fe'
  },
  data() {
    return {
      
    }
  },
  created(){
    this._provided.selectedColor = this.selectedColor
  },
  computed:{
    computedWidth(){
      return {
        width:this.width+'px'
      }
    },
    computedColor(){
      return {
        color:this.color
      }
    },
    computedBackground(){
      return {
        background:this.background
      }
    },
    computedIsFloat(){
      if(this.isFloat){
        return {
          'box-shadow':'0px 0px 25px #f3eaea'
        }
      }
    }
  }

};
</script>