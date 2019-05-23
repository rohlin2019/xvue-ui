<style lang="scss" scoped>
.xvue-tab-pane-con{
    width:100%;
    flex-shrink:0;
}
</style>

<template>
    <div v-if="closeCard" class="xvue-tab-pane-con" :style="[copmutedShow]"><slot></slot></div>
</template>

<script>
export default {
    componentName:'xvuetabpane',
    props:{
        label:'',
        disabled:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            show:'block',
            closeCard:true
        }
    },
    computed:{
        copmutedShow(){
            return {
                display:this.show
            }
        }
    }
}
</script>