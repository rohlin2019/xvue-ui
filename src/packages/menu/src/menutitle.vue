<template>
    <div class="xvue-title-text" @click.stop="toClick"><slot></slot></div>
</template>
<script>
export default {
    methods:{
        toClick(){
            this.$emit('click')
        }
    }
}
</script>
<style lang="scss" scoped>
.xvue-title-text{
    font-size:12px;
    color:#ccc;
    height:20px;
    line-height:20px;
    padding:10px 0px;
    text-align: left;
}
</style>
