<style lang="scss" scoped>
.xvue-collapse{
    width:100%;
    border-radius:5px;
    overflow:hidden;
    border:1px solid #d3d9e0;
    color:#5a5959;
}
.xvue-collapse-top{
    margin-top:15px;
}
</style>

<template>
    <div class="xvue-collapse" :class="[{'xvue-collapse-top':isParent}]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    componentName:'xvueCollapse',
    data(){
        return{
            isParent:false
        }
    },
    mounted(){
        if(this.$parent.$parent.$options.componentName == 'xvueCollapse'){
            this.isParent = true
        }else{
            this.isParent = false
        }
    }
}
</script>