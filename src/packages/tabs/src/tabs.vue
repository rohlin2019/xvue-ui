<style lang="scss" scoped>
.xvue-ui-tabs-all{
    overflow: hidden;
}
.xvue-ui-tabs{
    border-bottom:2px solid #efefef;
    height:40px;
    line-height: 40px;
    width:100%;
    &::-webkit-scrollbar {
        display: none;
    }
}
.xvue-ui-tabs-scroll{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
.xvue-ui-tab-transform-con{
    transition:transform .3s ease-in-out;
    display:flex;
}
.xvue-ui-tab-item{
    background:#fff;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    color:#636569;
    font-size:14px;
    cursor: pointer;
    text-align: center;
    .xvue-ui-closable{
        font-size:16px;
        font-weight: bold;
        display: inline-block;
        margin-left:10px;
        // color:#c3c3c3;
    }
}
.xvue-ui-tabs-disabled{
    color:#c5c5c5!important;
    cursor: not-allowed;
}
.xvue-ui-tab-after{
    display:inline-flex;
    text-align: center;
}
</style>

<template>
    <div class="xvue-ui-tabs-all" v-show="labelArr.length >0">
        <div class="xvue-ui-tabs" :style="[consoleResize == false ?computedFlex:'',computedTabsBottom]"
            ref="xvueuitabs"
            :class="[consoleResize ?'xvue-ui-tabs-scroll':'']"
        > 
                <div class="xvue-ui-tab-item"
                ref="xvueuitabitem"
                v-for="(labelItem,index) of labelArr" 
                :key="index" 
                :style="[computedPadding,currentLabel == labelItem.label ? computedCurrentLabelColor:'',currentLabel == labelItem.label ? computedHeight:'',computedWidth,computedType,index != labelArr.length -1 ?computedMargin:'']"
                :class="[{'xvue-ui-tabs-disabled':labelItem.disabled}]"
                @click="toogleLabel(labelItem,index)"
                >   
                    <div><span v-if="labelItem.icon" :class="[labelItem.icon]"></span> <span>{{labelItem.label}}</span><span @click.stop="closeCard(index)" v-if="closable" class="xvue-ui-closable citnfont citn-close-circle"></span></div>
                </div>
        </div>
        <div class="xvue-ui-tab-transform-con" :style="[animated?transform:'']">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      label: '',
      color:{
          type:String,
          default:'#19b5fe'
      },
      flex:{
          type:String,
          default:'flex-start'
      },
      type:{
          type:String,
          default:'line'
      },
      tabsBottom:{
          type:Number,
          default:15
      },
      animated:{
          type:Boolean,
          default:false
      },
      closable:{
          type:Boolean,
          default:false
      }
    },
    model: {
      prop: 'label'
    },
    data(){
        return {
            labelArr:[],
            currentLabel:this.label,
            transform:{
                'transform':'translateX(0%) translateZ(0px)'
            },
            consoleResize:true
        }
    },
    mounted(){
        this.getLabel()
        this.computedShowPane()
        this.watchWindowSize()
    },
    computed:{
        computedTabsBottom(){
            return {
                marginBottom:`${this.tabsBottom}px`
            }
        },
        computedPadding(){
            return{
                padding:'0px 15px'
            }
        },
        computedFlex(){
            // if(this.flex == 'none'){
            //     return
            // }else{
                return {
                    display:'flex',
                    justifyContent:this.flex
                }
            // }
        },
        computedMarginRight(){
            return {
                marginRight:'15px'
            }
        },
        computedWidth(){
            
        },
        computedMargin(){
            if(this.type == 'card'){
                return {
                    marginRight:'15px'
                }
            }
           
        },
        computedType(){
            if(this.type == 'line'){
                return
            }else if(this.type == 'card'){
                return {
                    borderTop:'2px solid #efefef',
                    borderLeft:'2px solid #efefef',
                    borderRight:'2px solid #efefef',
                    borderTopLeftRadius:'5px',
                    borderTopRightRadius:'5px',
                    overflow:'hidden',
                    marginLeft:'-1px'
                }   
            }
        },
        computedHeight(){
            return {
                height:'100%'
            }
        },
        computedCurrentLabelColor(){
            if(this.type == 'card'){
                return {
                    color:this.color
                }
            }else{
                return {
                    color:this.color,
                    borderBottom:`2px solid ${this.color}`
                }
            }
        },
        computedCurrentLabel:{
            set(newVal){
              this.currentLabel = newVal 
            },
            get(){
                return this.label
            }
            
        }
    },
    methods:{
        closeCard(index){
            let _children = this.getTabPane()
            this.labelArr.splice(index,1)
            _children[index].closeCard = false
            for(let i in this.$children){
                if(this.$children[i].closeCard == false){
                    // 如果删掉了当前选中的页面，处理最后一个页面显示
                    if(_children[index].label == this.currentLabel){
                        if(i == _children.length-1){
                            this.currentLabel = _children[_children.length-2]?_children[_children.length-2].label:''
                        }else{
                            this.currentLabel = _children[_children.length-1]?_children[_children.length-1].label:''
                        }
                    }
                    this.$children.splice(i,1)
                    this.$emit('on-close',_children[index].label,index)
                }
            }
            this.computedShowPane()
            this.watchWindowSize()
        },
        watchWindowSize(){
            let that = this
            
            that.$nextTick(()=>{
                let xvueuitabitem = that.$refs.xvueuitabitem
                
                let clientWidth = 0
                for(let i in xvueuitabitem){
                    clientWidth += (parseInt(window.getComputedStyle(xvueuitabitem[i], null).marginRight) + xvueuitabitem[i].clientWidth)+4-1
                }
                if(this.$refs.xvueuitabs.clientWidth > clientWidth){
                    that.consoleResize = false
                }else{
                    that.consoleResize = true
                }
                window.addEventListener('resize',()=>{
                    if(that.consoleResize){
                        if(this.$refs.xvueuitabs.clientWidth >= clientWidth){
                            that.consoleResize = false
                        }
                    }else{
                        if(this.$refs.xvueuitabs.clientWidth <= clientWidth){
                            that.consoleResize = true
                        }
                    }
                })
            })
        },
        computedShowPane(){
            let that = this
            this.$nextTick(()=>{
                const index = this.computedTransformIndex()
                if(that.animated){
                    if(index == 0){
                        that.transform = {
                            transform:`translateX(0%) translateZ(0px)`
                        }
                    }else{
                        that.transform = {
                            transform:`translateX(-${index}00%) translateZ(0px)`
                        }
                    }
                }else{
                    let _children = that.getTabPane()
                    for(let i in _children){
                        _children[i].show = 'none'
                    }
                    if(_children[index]){
                        _children[index].show = 'block'
                    }
                }
            })
        },
        getTabPane(){
            return this.$children.filter(obj => obj.$options.componentName === 'xvuetabpane')
        },
        getLabel(){
            let xvuetabpaneArr =  this.getTabPane()
            this.labelArr = []
            for(let i in xvuetabpaneArr){
                this.labelArr.push({
                    label:xvuetabpaneArr[i].label,
                    disabled:xvuetabpaneArr[i].disabled,
                    icon:xvuetabpaneArr[i].icon
                })
            }
        },
        computedTransformIndex(){
            let xvuetabpaneArr =  this.getTabPane()
            for(let i in xvuetabpaneArr){
                if(xvuetabpaneArr[i].label == this.currentLabel){
                    return i
                }
            }
        },
        toogleLabel(item,index){
            this.$emit('on-change',item.label,index,item.disabled)
            if(item.disabled){
                return
            }
            this.computedCurrentLabel = item.label
            this.computedShowPane()
        }
    }
}
</script>