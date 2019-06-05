<style lang="scss" scoped>
.xvue-ui-tag{
    display:inline-block;
    overflow: hidden;
    .xvue-ui-tag-close-btn{
        font-size:14px;
        margin-left: 6px;
        margin-right: -4px;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>

<template>
    <div class="xvue-ui-tag animated" :class="[closeClass]" :name='name' @click="click(name)" :style="[computedType,computedIsRound,computedSize,computedColor,computedBackgroundColor]">
        <slot></slot><span v-if="closable" @click.stop="clickClose(name)" class="xvue-ui-tag-close-btn citnfont citn-close-circle"></span>
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'default'
        },
        size:{
            type:String,
            default:'normal'
        },
        color:{
            type:String,
            default:'#5d5e61'
        },
        backgroundColor:{
            type:String,
            default:'#fff'
        },
        isRound:{
            type:Boolean,
            default:true
        },
        closable:{
            type:Boolean,
            default:false
        },
        closableAnimated:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            closeClass:''
        }
    },
    computed:{
        computedType(){
            if(this.type == 'default'){
                return {
                    backgroundColor:'#fff',
                    color:'#5d5e61',
                    border:'1px solid #cfd1d4'
                }
            }else if(this.type == 'primary'){
                return {
                    backgroundColor:'#e1ecf7',
                    color:'#4ba3fd',
                    border:'1px solid #4ba3fd'
                }
            }else if(this.type == 'success'){
                return {
                    backgroundColor:'#eaf5e5',
                    color:'#73ce45',
                    border:'1px solid #73ce45'
                }
            }else if(this.type == 'info'){
                return {
                    backgroundColor:'#eeefef',
                    color:'#8c9096',
                    border:'1px solid #8c9096'
                }
            }else if(this.type == 'warning'){
                return {
                    backgroundColor:'#f7eee2',
                    color:'#e6ab52',
                    border:'1px solid #e6ab52'
                }
            }else if(this.type == 'danger'){
                return {
                    backgroundColor:'#fbeded',
                    color:'#f77373',
                    border:'1px solid #f77373'
                }
            }
        },
        computedIsRound(){
            if(this.isRound){
                return {
                    borderRadius:'5px'
                }
            }
        },
        computedSize(){
            if(this.size == 'normal'){
                return {
                    fontSize:'14px',
                    padding:'6px 10px'
                }
            }else if(this.size == 'small'){
                return {
                    fontSize:'12px',
                    padding:'4px 8px'
                }
            }
        },
        computedColor(){
            // is not default
            if(this.color != '#5d5e61'){
                return {
                    color:this.color
                }
            }
        },
        computedBackgroundColor(){
            // is not default
            if(this.backgroundColor != '#fff'){
                return {
                    backgroundColor:this.backgroundColor
                }
            }
        }
    },
    methods:{
        clickClose(name){
            this.closeClass = this.closableAnimated
            setTimeout(()=>{
                this.closeClass = ''
            },2000)
            this.$emit('close',name)
        },
        click(name){
            this.$emit('click',name)
        }
    }
}
</script>