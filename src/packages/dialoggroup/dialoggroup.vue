<template>
    <div v-if="isShow">
        <x-dialog v-for="(item,index) of dialogList" :key="index"
            :title="item.title"
            :content="item.content"
            :visible="item.visible"
            :duration="item.duration"
            :delay="item.delay"
            :openAnimation="item.openAnimation"
            :cancelText="item.cancelText"
            :confirmText="item.confirmText"
            :animate="item.animate"
            :on-close="item.onClose"
            :on-cancel="item.onCancel"
            :on-ok="item.onOk"
            :isOkBtn="item.isOkBtn"
            :isCancelBtn="item.isCancelBtn"
            :isCancel="item.isCancel"
            @onOk="onOk"
            @onCancel="onCancel"
            @onCover="onCover"
        >
        </x-dialog>
    </div>
</template>
<script>

import xDialog from './dialog.vue'
export default {
    name:'x-dialog-group',
    components:{
        xDialog
    },
    data(){
        return{
            dialogList:[],
            isShow:false
        }
    },
    methods:{
        add(data){
            this.isShow = true
            this.dialogList.push(data)
            console.log(this.dialogList)
        },
        // 关闭外层div
        onCancel(e){
            this.isShow = e
            if(this.$parent.cancel){
                this.$parent.cancel(this)
            }
        },
        onOk(){
            if(this.$parent.ok){
                this.$parent.ok(this)
            }
        },
        onCover(){
            if(this.$parent.cover){
                this.$parent.cover(this)
            }
        }
    }
}
</script>