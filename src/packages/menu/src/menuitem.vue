<template>
    <div class="xvue-sub-menu xvue-sub-menu-get-height-no-change xvue-menu-hover-acitve" @click.stop="submenuFun">
        <slot></slot>
    </div>
</template>
<script>
export default {
    inject:['selectedColor'],
    methods:{
        submenuFun(e){
            let xvueSubMenu = document.querySelectorAll('.xvue-sub-menu')
            for(var i = 0;i<xvueSubMenu.length;i++){
                xvueSubMenu[i].style.color = ''
            }
            e.currentTarget.style.color = this.selectedColor
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.xvue-sub-menu{
    cursor: pointer;
    font-size:14px;
    padding:15px 10px;
    height:16px;
    line-height:16px;
}
</style>
