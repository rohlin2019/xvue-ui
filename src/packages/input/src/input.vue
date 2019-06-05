<style lang="scss" scoped>
.xvue-ui-input-div{
    position:relative;
    display:inline-block;
    .xvue-ui-input{
        width:100%;
        height:35px;
        border:1px solid rgb(190,190,190);
        outline: none;
        padding:8px;
        caret-color: rgb(190,190,190);
        border-radius:5px;
        transition: all .2s;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        box-sizing:border-box;
    }
    .xvue-ui-input-password-padding{
        padding-right:45px;
    }
    .xvue-ui-input-textarea{
        line-height:1.5;
        width:100%;
        border:1px solid rgb(190,190,190);
        outline: none;
        padding-left:8px;
        caret-color: rgb(190,190,190);
        border-radius:5px;
        transition: all .2s;
        position:absolute;
        word-break:break-all;
        top:0;
        left:0;
        // bottom:0;
        right:0;
        // height:200px;
        padding:10px;
        box-sizing:border-box;
    }
    .xvue-ui-input-show-hide{
        position:absolute;
        top:0;
        bottom:0;
        right:0;
        width:25px;
        height:100%;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding:0px 10px;
        .xvue-ui-input-password-icon{
            font-size:18px;
        }
    }
    .xvue-ui-input-disabled{
        background:#efefef;
        cursor: not-allowed;
    }
    .xvue-ui-input-show-hide-disabled{
        cursor:not-allowed;
    }
    .xvue-ui-input-isCloseBtn{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0px 10px;
        .xvue-ui-input-isCloseBtn-icon{
            display:inline-block;
            text-align: center;
            line-height:15px;
            color:#fff;
            width:16px;
            height:15px;
            background:#bdb8b8;
            border-radius:50%;
            font-size:12px;
            color:#fff;
        }
    }
    .xvue-ui-input-isCloseBtn-right{
        margin-right:18px;
    }
    .xvue-ui-input-left{
        position:absolute;
        left:0;
        top:0;
        bottom:0;
        width:30px;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        color:#a59999;
    }
    .xvue-ui-input-right{
        position:absolute;
        right:0;
        top:0;
        bottom:0;
        width:30px;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        color:#a59999;
    }
    .xvue-ui-input-suffix{
        padding-right:30px;
    }
    .xvue-ui-input-isCloseBtn-suffix{
        padding-right:50px;
    }
    .xvue-ui-input-prefix{
        padding-left:30px;
    }
    .xvue-ui-textarea-noResize{
        resize:none;
    }
}
</style>

<template>
    <div class="xvue-ui-input-div citn-clear"
    :style="[computedWidthHeight]"
    >
        <input
        v-model="computedValue"
        v-if="computedType != 'textarea'" 
        :id="id"
        ref="xvueUiInput"
        class="xvue-ui-input"
        :type="computedType"
        :number="true"
        :placeholder="placeholder" 
        :name="name"
        :readonly="readonly"
        :disabled="disabled"
        :maxlength="maxlength"
        @keyup.enter="enter"
        @input="input"
        @focus="focus"
        @blur="blur"
        :class="[{'xvue-ui-input-hover-class':isDataHover,'xvue-ui-input-password-padding':isPassword,'xvue-ui-input-disabled':disabled,'xvue-ui-input-suffix':$slots.suffix,'xvue-ui-input-prefix':$slots.prefix,'xvue-ui-input-isCloseBtn-suffix':$slots.suffix && isClearBtn}]"
        :style="[computedTextColor,computedFontSize,computedWidthHeight]"
        >
        
        <textarea 
        ref="xvueUiTextarea"
        :placeholder="placeholder" 
        class="xvue-ui-input-textarea" 
        v-else 
        :name="name"
        :readonly="readonly"
        v-model="computedValue"
        :disabled="disabled"
        :id="id"
        :rows="computedRows"
        :maxlength="maxlength"
        @keyup.enter="enter"
        @input="input"
        @focus="focus"
        @blur="blur"
        :class="[{'xvue-ui-input-hover-class':isDataHover,'xvue-ui-input-disabled':disabled,'xvue-ui-textarea-noResize':noResize}]"
        :style="[computedTextColor,computedFontSize]"
        ></textarea>
        <div class="xvue-ui-input-isCloseBtn" v-if="computedType == 'text' && computedValue && computedValue != '' && isClearBtn" :class="[{'xvue-ui-input-isCloseBtn-right':$slots.suffix}]">
            <span class="citnfont citn-close1 xvue-ui-input-isCloseBtn-icon" @click="clearComputedValue"></span>
        </div>
        <div v-if="computedType == 'password' || isPassword" class="xvue-ui-input-show-hide" :class="[{'xvue-ui-input-show-hide-disabled':disabled}]" @click="changeShowPassword">
            <span class="citnfont citn-yincangmima xvue-ui-input-password-icon" v-if="isShowPassword"></span>
            <span class="citnfont citn-xianshimima xvue-ui-input-password-icon" v-else></span>
        </div>
        
        <div class="xvue-ui-input-left" v-if="$slots.prefix && computedType != 'textarea'">
            <slot name="prefix"></slot>
        </div>

        <div class="xvue-ui-input-right" v-if="$slots.suffix && computedType != 'textarea'">
            <slot name="suffix"></slot>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        id:{
            type:String,
            default:''
        },
        width:{
            type:String,
            default:'180px'
        },
        height:{
            type:String,
            default:''
        },
        value:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'text'
        },
        name:{
            type:String,
            default:''
        },
        placeholder:{
            type:String,
            default:''
        },
        isHover:{
            type:Boolean,
            default:true
        },
        hoverColor:{
            type:String,
            default:'#19b5fe'
        },
        noResize:{
            type:Boolean,
            default:false
        },
        textColor:{
            type:String,
            default:'#687382'
        },
        fontSize:{
            type:Number,
            default:14
        },
        readonly:{
            type:Boolean,
            default:false
        },
        maxlength:{
            type:Number
        },
        disabled:{
            type:Boolean,
            default:false
        },
        isClearBtn:{
            type:Boolean,
            default:false
        },
        rows:{
            type:Number,
            default:4
        }
    },
    data(){
        return {
            isFocus:false,
            isShowPassword:false,
            isPassword:false,
            dataType:this.type,
            dataValue:this.value,
            isDataHover:this.isHover,
            dataRows:this.rows
        }
    },
    mounted(){
        this.hover()
        this.load()
    },
    watch:{
        type(newVal){
            this.computedType = newVal
            this.load()
        },
        isHover(newVal){
            this.isDataHover = newVal
            this.hover()
        }
    },
    methods:{
        computedRowsAdd(){
            this.computedRows = this.computedRows+1
        },
        computedRowsMinus(){

        },
        clearComputedValue(){
            this.$emit('onClear',this.computedValue)
            this.computedValue = ''
        },
        load(){
            // record first type
            if(this.computedType == 'password'){
                this.isPassword = true
                this.isShowPassword = true
            }else{
                this.isPassword = false
                this.isShowPassword = false
            }
        },
        changeShowPassword(){
            if(this.disabled){
                return
            }
            this.isShowPassword = !this.isShowPassword
            if(!this.isShowPassword){
                if(this.dataType == 'password'){
                    this.computedType = 'text'
                }else{
                    this.computedType = this.dataType
                }
            }else{
                if(this.computedType != 'password' && this.isPassword){
                    this.computedType = 'password'
                    this.isShowPassword = true
                }
            }
        },
        hover(){
            let that = this
            let xvueUiInput = that.$refs.xvueUiInput
            let xvueUiTextarea = that.$refs.xvueUiTextarea
            
                if(xvueUiInput){
                    xvueUiInput.onmouseover = function(){
                        if(that.isDataHover){
                            xvueUiInput.style.border = `1px solid ${that.hoverColor}`
                            // xvueUiInput.style.boxShadow = `0px 0px 1px ${that.hoverColor}`
                        }
                    }
                    xvueUiInput.onmouseout = function(){
                        if(that.isDataHover && !that.isFocus){
                            xvueUiInput.style.border = `1px solid rgb(190,190,190)`
                            xvueUiInput.style.boxShadow = `none`
                        }
                    }
                }
                if(xvueUiTextarea){
                    xvueUiTextarea.onmouseover = function(){
                        if(that.isDataHover){
                            xvueUiTextarea.style.border = `1px solid ${that.hoverColor}`
                            // xvueUiInput.style.boxShadow = `0px 0px 1px ${that.hoverColor}`
                        }
                    }
                    xvueUiTextarea.onmouseout = function(){
                        if(that.isDataHover && !that.isFocus){
                            xvueUiTextarea.style.border = `1px solid rgb(190,190,190)`
                            xvueUiTextarea.style.boxShadow = `none`
                        }
                    }
               } 
        },
        focus(){
            let that = this
            that.$emit('onFocus',this.computedValue)
            that.isFocus = true
            let xvueUiInput = that.$refs.xvueUiInput
            let xvueUiTextarea = that.$refs.xvueUiTextarea
            
            if(that.isDataHover){
                if(xvueUiInput){
                    xvueUiInput.style.border = `1px solid ${that.hoverColor}`
                }
                if(xvueUiTextarea){
                    xvueUiTextarea.style.border = `1px solid ${that.hoverColor}`
                    // xvueUiInput.style.boxShadow = `0px 0px 1px ${that.hoverColor}`
                }
            }
        },
        blur(){
            let that = this
            that.$emit('onBlur',this.computedValue)
            that.isFocus = false
            let xvueUiInput = that.$refs.xvueUiInput
            let xvueUiTextarea = that.$refs.xvueUiTextarea
            if(that.isDataHover){
                if(xvueUiInput){
                    xvueUiInput.style.border = `1px solid rgb(190,190,190)`
                    xvueUiInput.style.boxShadow = `none`
                }
                if(xvueUiTextarea){
                    xvueUiTextarea.style.border = `1px solid rgb(190,190,190)`
                    xvueUiTextarea.style.boxShadow = `none`
                }
            }
        },
        input(){
            this.$emit('onInput',this.computedValue)
        },
        enter(){
            this.$emit('onEnter',this.computedValue)
        }
    },
    computed:{
        computedRows:{
            get(){
                return this.dataRows
            },
            set(newVal){
                this.dataRows = newVal
            }
        },
        computedValue:{
            get(){
                return this.dataValue
            },
            set(newVal){
                this.dataValue = newVal
            }
        },
        computedWidthHeight(){
            let height = ''
            if(!this.height){
                if(this.computedType == 'textarea'){
                    height = '100px'
                }else{
                    height = '40px'
                }
            }else{
                height = this.height
            }
            return {
                'width':this.width,
                'height': height
            }
        },
        computedFontSize(){
            return {
                'fontSize' : this.fontSize+'px'
            }
        },
        computedType:{
            get(){
                return this.dataType
            },
            set(newVal){
                this.dataType = newVal
            }
        },
        computedTextColor(){
            return {
                'color':this.textColor
            }
        }
    }
}
</script>