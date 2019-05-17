<template>
  <div v-show="visible" @click="close" class="animated x-dialog" :style="[{'animation-duration': duration +'s'},{'animation-delay': delay +'s'}]" :class="openAnimation?'fadeIn':''">
    <div class="animated x-dialog-con" @click.stop="stop" :class="openAnimation?animate:''" :style="[{'animation-duration': duration +'s'},{'animation-delay': delay +'s'}]">
      <div class="x-dialog-middle">
        <span v-if="isCancel" class="citnfont citn-close dialog-close-btn" @click.stop="cancel"></span>
        <div class="x-dialog-top">
          <slot name="header"><span class="top-left-title">{{title}}</span></slot>
        </div>
        <div class="x-dialog-content" v-html="content">
          
        </div>
        <div class="x-dialog-btn">
          <!-- <slot name="footer"> -->
            <x-button v-if="isCancelBtn" @click.native.stop="cancel">{{cancelText}}</x-button>
            <x-button v-if="isOkBtn" @click.native.stop="ok" class="primary">{{confirmText}}</x-button>
          <!-- </slot> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "x-dialog",
  props:{
    content:{
      type:String,
      default:''
    },
    isOkBtn:{
      type:Boolean,
      default:true
    },
    isCancel:{
      type:Boolean,
      default:true
    },
    isCancelBtn:{
      type:Boolean,
      default:true
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    confirmText:{
      type:String,
      default:'确定'
    },
    visible:{
      type:Boolean,
      default:true
    },
    title:{
      type:String,
      default:"标题"
    },
    animate:{
      type:String,
      default:"zoomIn"
    },
    openAnimation:{
      type:Boolean,
      default:true
    },
    // slots:{
    //     type:String,
    //     default:''
    // },
    duration:{
      type:Number,
      default:1
    },
    delay:{
      type:Number,
      default:0
    },
    onCancel:{
        type:Function,
        default:function(){
          this.$emit("onCancel",false)
        }
    },
    onOk:{
        type:Function,
        default:function(){
          this.$emit("onOk",false)
        }
    },
    onCover:{
        type:Function,
        default:function(){
          this.$emit("onCover",false)
        }
    }
  },
  data(){
    return{

    }
  },
  watch:{
    
  },
  methods: {
      cancel(e){
        this.onCancel()
      },
      ok(e){
        this.onOk()
      },
      close(e){
        this.onCover()
      },
      stop(){}
  }
};
</script>
<style lang="scss">
.x-dialog{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(50,50,50,.5);
    z-index:999;
    .x-dialog-con{
      max-width:500px;
      width:90%;
      min-width:200px;
      display: inline-table;
      position:fixed;
      z-index:0;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
      .x-dialog-content{
        padding:10px 20px;
        line-height:20px;
        p{
          margin:5px 0px;
          color:#657180;
        }
      }
      .x-dialog-btn{
        padding:15px;
        text-align: right;
        button{
          margin-right:10px;
        }
      }
      .x-dialog-top{
        padding:15px 40px 15px 20px;
        font-size:15px;
        font-weight: bold;
        min-height: 14px;
      }
  }
  .x-dialog-middle{
    background:#fff;
    border-radius:10px;
    .dialog-close-btn{
      position: absolute;
      top: 10px;
      right: 10px;
      cursor:pointer;
    }
  }
}


</style>