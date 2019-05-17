<template>
    <div class="x-row-con" :class="[type,newalign]" :style="[styles,newjustify]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'x-row',
    data(){
        return{
            
        }
    },
    props:{
        gutter:{
            type:[Number,String],
            default:0
        },
        type:{
            type:String,
            default:''
        },
        justify:{
            type:String,
            default:''
        },
        align:{
            type:String,
            default:''
        }
    },
    mounted() {
        this.updateGutter(this.gutter);
    },
    watch: {
        gutter (newVal) {
            this.updateGutter(newVal);
        },
        newjustify(){
            this.newjustify = {
                justifyContent:this.justify
            }
        },
        newalign(newVal){
            switch(newVal){
                case 'top':
                    this.newalign = 'xvue-row-flex-top';
                    break;
                case 'middle':
                    this.newalign =  'xvue-row-flex-middle';
                    break;
                case 'bottom':
                    this.newalign =  'xvue-row-flex-bottom';
                    break;
            }
        }
    },
    methods:{
        updateGutter (val) {
            this.$children.forEach((child) => {
                if (val !== 0) {
                    child.gutter = val;
                }
            });
        }
    },
    computed:{
        styles () {
            let that = this
            let gutter = parseInt(that.gutter)
            let style = {};
            if (gutter !== 0) {
                style = {
                    marginLeft: gutter / -2 + 'px',
                    marginRight: gutter / -2 + 'px'
                };
            }

            return style;
        },
        newjustify(){
            return  {
                justifyContent:this.justify
            }
        },
        newalign(){
            switch(this.align){
                case 'top':
                    return 'xvue-row-flex-top';
                case 'middle':
                    return 'xvue-row-flex-middle';
                case 'bottom':
                    return 'xvue-row-flex-bottom';
            }
        }
    }
}
</script>
<style lang="scss">
.x-row-con:after{
    content:"";
    display:block;
    clear:both;
}
.flex{
    display: flex;
}
.xvue-row-flex-top{
    align-items: flex-start;
    -ms-flex-align: start;
    -webkit-box-align: start;
}
.xvue-row-flex-middle {
    align-items: center;
    -ms-flex-align: center;
    -webkit-box-align: center;
}
.xvue-row-flex-bottom {
    align-items: flex-end;
    -ms-flex-align: end;
    -webkit-box-align: end;
}
</style>