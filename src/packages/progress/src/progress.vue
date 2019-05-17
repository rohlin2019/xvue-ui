<template>
    <div>
        <div :class="[{'xvue-progress-flex':showPercent}]">
            <div class="xvue-progress"
                :class="[{'xvue-progress-radius':isRadius}]"
                :style="[computedHeight,computedUnselectedColor]">
                <div class="xvue-progress-percent"
                    :class="[{'xvue-progress-radius':isRadius}]"
                    :style="[computedPercent,computedColor]"
                ></div>
            </div>
            <span class="xvue-progress-text" v-if="showPercent">{{isShowPercent?dataPercent:percent}}</span>
        </div>
    </div>
</template>
<script>
import utils from "../../../utils/index.js";
export default {
    props:{
        strokeWidth:{
            type:Number,
            default:15
        },
        color:{
            type:String,
            default:'#19b5fe'
        },
        isRadius:{
            type:Boolean,
            default:true
        },
        percent:{
            type:Number,
            default:0
        },
        maxPercent:{
            type:Number,
            default:100
        },
        direction:{
            type:String,
            default:'right'
        },
        showPercent:{
            type:Boolean,
            default:true
        },
        isShowPercent:{
            type:Boolean,
            default:false
        },
        unselectedColor:{
            type:String,
            default:'#f1f1f1'
        },
        fullColor:{
            type:String,
            default:'#73ce45'
        },
        isFullColor:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            dataPercent:0
        }
    },
    computed:{
        computedUnselectedColor(){
            return {
                backgroundColor:this.unselectedColor
            }
        },
        computedHeight(){
            return {
                height:this.strokeWidth+'px'
            }
        },
        computedColor(){
            if(this.isFullColor && this.percent >= this.maxPercent){
                return {
                    background:this.fullColor
                }
            }
            let arrColor = this.color.split(',')
            if(arrColor.length>1){
                return {
                    background:`linear-gradient(to ${this.direction},${arrColor.toString()})`
                }
            }else{
                return {
                    background:`${arrColor.toString()}`
                }
            }
        },
        computedPercent(){
            let getPercent =utils.getPercent(this.percent,this.maxPercent,true)
            this.dataPercent = getPercent
            return {
                width:getPercent,
                minWidth:getPercent,
                maxWidth:getPercent
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.xvue-progress{
    width:100%;
    overflow: hidden;
}
.xvue-progress-percent{
    height:100%;
    transition:all .2s linear;
}
.xvue-progress-radius{
    border-radius:20px;
}
.xvue-progress-flex{
    display: flex;
    align-items: center;
    color:#6e7682;
    font-size:1em;
}
.xvue-progress-text{
    padding-left:10px;
}
</style>
