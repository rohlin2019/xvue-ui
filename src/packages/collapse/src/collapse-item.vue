<style lang="scss" scoped>
.xvue-collapse{
    .xvue-collapse-item{
        border-bottom:1px solid rgb(240,240,240);
        .xvue-collapse-item-content{
            padding:15px;
            font-size:14px;
            background:#fff;
            line-height:18px;
        }
        .xvue-collapse-item-title{
            cursor:pointer;
            user-select: none;
            padding:10px;
            background:#f9f9f9;
            .font-zhankai-90deg{
                transform:rotateZ(90deg)
            }
            .font-zhankai{
                font-size:16px;
                transition: all .2s;
                margin:0px 5px;
            }
            .xvue-collapse-item-title-text{
                font-size:14px;
                margin-top:1px;
                padding-left:5px;
                display:contents;
            }
        }
    }
}

</style>

<template>
    <div class="xvue-collapse-item">
        <div class="xvue-collapse-item-title citn-clear" @click="collapseFun">
            <span class="citnfont citn-jiantou font-zhankai citn-left" :class="[{'font-zhankai-90deg':isOpen}]"></span>
            <span class="xvue-collapse-item-title-text citn-left citn-clear"><slot name="title"></slot></span>
        </div>
        <div class="xvue-collapse-item-content" ref="collapseContent" style="display:none;"><slot name="content"></slot></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isOpen:false
        }
    },
    methods:{
        collapseFun(){
            let collapseContent = this.$refs.collapseContent.style

            if(collapseContent.display == 'none'){
                collapseContent.display = 'block'
                this.isOpen = true
            }else{
                collapseContent.display = 'none'
                this.isOpen = false
            }
        }
    }
}
</script>