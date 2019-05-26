<template>
    <transition :name="position">
        <div v-if="visible" class="x-toast" :style="[computedPositionDistance]">
            <div class="x-toast-notify animated" :class="[computedAnimate,type]" :style="{'background':backgroundColor!='' && backgroundColor,'color':textColor!='' && textColor}">
                <div v-if=" slots &&  slots != 'undefined' && slots!='' " v-html="slots"></div>
                <div v-else>
                    <span v-if="type!='x-default'" class="citnfont" :class="type=='x-info'?'citn-info':type=='x-success'?'citn-success-':type=='x-error'?'citn-error':type=='x-warning'?'citn-warning-':''"></span> <span>{{content}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  name: "x-toast",
  props:{
      content:{
          type:String,
          default:"提示"
      },
      duration:{
          type:Number,
          default:2
      },
      slots:{
          type:String,
          default:''
      },
      backgroundColor:{
          type:String,
          default:''
      },
      textColor:{
          type:String,
          default:''
      },
      type:String,
      onClose:{
          type:Function,
          default:function(){
            this.$emit("closeToastGroup",false)
          }
      },
      toastStatus:Boolean,
      position:{
          type:String,
          default:'top'
      },
      positionDistance:{
          type:String,
          default:'5%'
      }
  },
  data(){
      return{
        visible: true,
        animate:'fadeInDown'
      }
  },
  computed:{
      computedAnimate(){
          if(this.position == 'top'){
              return 'fadeInDown'
          }else if(this.position == 'bottom'){
              return 'fadeInUp'
          }
      },
      computedPositionDistance(){
          console.log({
              [this.position] : this.positionDistance
          })
          return {
              [this.position] : this.positionDistance
          }
      }
  },
  mounted(){
    
    let startDate = new Date().getTime()
    let duration = parseInt(this.duration + '000')
    let stop = setInterval(()=>{
        console.log('this.position',this.position)
        if(this.position == 'top'){
            let endDate = new Date().getTime()
            if((endDate-startDate)>duration){
                this.visible = false
                this.onClose()
                clearInterval(stop)
            }
        }else if(this.position == 'bottom'){
            let endDate = new Date().getTime()
            if((endDate-startDate)>duration){
                this.visible = false
                this.onClose()
                clearInterval(stop)
            }
        }
        
    },100)
  },
  
  watch: {
      content(val){
          this.content = val
      }
  },
};
</script>
<style lang="scss" scoped>
@import "../../config/css/scss.scss";

.top-leave-active{
    animation:topTransform 2s!important;
}
@keyframes topTransform{
    0%{
        opacity:1;
        transform:translate3d(0, 0, 0);
    }
    100%{
        opacity:0;
        transform:translate3d(0, -400%, 0);
    }
}

.bottom-leave-active{
    animation:bottomTransform 2s!important;
}
@keyframes bottomTransform{
    0%{
        opacity:1;
        transform:translate3d(0, 0, 0);
    }
    100%{
        opacity:0;
        transform:translate3d(0, 400%, 0);
        
    }
}

.x-toast{
    max-width:200px;
    position:fixed;
    left:0;
    right:0;
    margin:auto;
    display:inline-table;
    text-align:center;
    width:200px;
    z-index:99999;
}
.x-toast-notify{
    box-shadow:0px 0px 10px rgb(230,230,230);
    padding:10px;
    border-radius:5px;
    display: inline-block;
    font-size:16px;
    line-height:20px;
    text-align: left;
}
.x-info{
    background:$backgroundSuccess;
    color:$colorSuccess;
}
.x-success{
    background:$backgroundInfo;
    color:$colorInfo;
}
.x-warning{
    background:$backgroundWarning;
    color:$colorWarning;
}
.x-error{
    background:$backgroundError;
    color:$colorError;
}
.x-default{
    background:$backgroundLoading;
    color:$colorLoading;
}
</style>