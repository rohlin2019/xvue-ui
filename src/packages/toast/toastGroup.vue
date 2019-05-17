<template>
    <div v-if="toastStatus">
        <toast v-for="(item,index) of toastList" :key="index"
        :content="item.content"
        :duration="item.duration"
        :slots="item.slots"
        :type="item.type"
        :backgroundColor="item.backgroundColor"
        :textColor="item.textColor"
        :on-close="item.onClose"
        @closeToastGroup="closeToastGroup"
        >
        </toast>
    </div>
</template>
<script>

import toast from './toast.vue'
export default {
    name:'x-toast-group',
    components:{
        toast
    },
    data(){
        return{
            toastList:[],
            toastStatus:false
        }
    },
    methods:{
        add(data){
            this.toastStatus = true
            this.toastList.push(data)
        },
        close(e){
            this.$emit('close',e)
        },
        // 关闭外层div
        closeToastGroup(e){
            var stop = setTimeout(()=>{
                this.toastStatus = e
                clearTimeout(stop)
            },2000)
            if(this.$parent.close){
                this.$parent.close();
            }
        }
    }
}
</script>