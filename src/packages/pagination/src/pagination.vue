<style lang="scss" scoped>
.xvue-ui-pagination{
    display:inline-block;
    .xvue-ui-pagination-item{
        min-width:30px;
        min-height:30px;
        background:#fff;
        display:inline-block;
        display:inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color:rgb(121, 117, 117);
        border-radius:4px;
        margin:10px 2px;
        user-select: none;
        border:1px solid #d8dee5;
        padding:0px 5px;
        span{
            font-size:12px;
        }
    }
    .xvue-ui-pagination-item-disabled{
        color:#ccc;
        cursor:not-allowed;
    }
    .xvue-ui-pagination-custom{
        padding:0px 8px;
    }
    .xvue-ui-pagination-content-block{
        display:inline-block;
    }
    .xvue-ui-pagination-simple{
        color:rgb(121, 117, 117);
        font-size:14px;
        padding:0px 10px;
    }
    .xvue-ui-pagination-elevator{
        display:inline-block;
        margin:10px;
        .xvue-ui-pagination-elevator-text{
            color:#797575;
            font-size:12px;
        }
        .xvue-ui-pagination-elevator-input{
            outline: none;
            border:1px solid #ccc;
            width:50px;
            height:30px;
            padding-left:5px;
            caret-color: #ccc;
            box-sizing: border-box;
            color:#797575;
        }
    }
    .xvue-ui-pagination-select{
        min-height:32px;
        border:1px solid #d8dee5;
        color:rgb(121, 117, 117);
        border-radius:4px;
        box-sizing:border-box;
        margin:10px 2px;
        padding:0px 5px;
        position:relative;
        top:1px;
        outline: none;
        .xvue-ui-pagination-select-option{
            padding:10px;
            outline: none;
        }
    }
}
#hidden-add-styles{
    display:none;
}
</style>


<template>
    <div class="xvue-ui-pagination">

        <div id="hidden-add-styles"></div>
        
        <select v-if="pageSize.length > 0" class="xvue-ui-pagination-select" @change="selectChange">
            <option class="xvue-ui-pagination-select-option" v-for="(pageSizeItem,index) of pageSize" :key="index" :value="pageSizeItem">{{pageSizeItem}}条/页</option>
        </select>

        <div class="xvue-ui-pagination-item" @click="prev"
        :class="[computedCurrentPage <= 1?'xvue-ui-pagination-item-disabled':'xvue-ui-pagination-item-hover']"
        ref="xvueUiPaginationPrevHover"
        >
            <span v-if="$slots.prevSlot" class="xvue-ui-pagination-custom"><slot name="prevSlot"></slot></span>
            <span v-else class="citnfont citn-arrow-left"></span>
        </div>

        <!-- multi -->
        <div v-if="model == 'multi'" class="xvue-ui-pagination-content-block">

            <div ref="xvueUiPaginationPrevMoreHover" class="xvue-ui-pagination-item xvue-ui-pagination-item-hover" :title="'向前跳转'+ellipsisToPageNum+'页'" v-if="prevEllipsis && isEllipsis" @click="prevEllipsisBtn">
                <span class="citnfont citn-more"></span>
            </div>

            <div v-for="(totalPageItem,index) of totalPage"
            :key="index"
            :title="totalPageItem"
            ref="xvueUiPaginationItemHover"
            class="xvue-ui-pagination-item xvue-ui-pagination-item-hover"
            :style="[computedCurrentPage == totalPageItem?computedSelectedColor:'']"
            @click="currentClick(totalPageItem)"
            v-if="showPageCount(totalPageItem)"
            >
                <span>{{totalPageItem}}</span>
            </div>

            <div ref="xvueUiPaginationNextMoreHover" class="xvue-ui-pagination-item xvue-ui-pagination-item-hover" :title="'向后跳转'+ellipsisToPageNum+'页'" v-if="nextEllipsis && isEllipsis" @click="nextEllipsisBtn">
                <span class="citnfont citn-more"></span>
            </div>

        </div>

        <!-- simple -->
        <div v-else-if="model == 'simple'" class="xvue-ui-pagination-content-block">
            <span class="xvue-ui-pagination-simple">{{computedCurrentPage}} / {{totalPage}}</span>
        </div>
        
        <div class="xvue-ui-pagination-item" @click="next"
        :class="[computedCurrentPage >= totalPage?'xvue-ui-pagination-item-disabled':'xvue-ui-pagination-item-hover']"
        ref="xvueUiPaginationNextHover"
        >
            <span v-if="$slots.nextSlot" class="xvue-ui-pagination-custom"><slot name="nextSlot"></slot></span>
            <span v-else class="citnfont citn-arrow-right"></span>
        </div>
        
        <div v-if="showElevator"
        class="xvue-ui-pagination-elevator"
        >
            <span class="xvue-ui-pagination-elevator-text">跳到</span>
            <input class="xvue-ui-pagination-elevator-input" type="text" @keydown.enter="keydown">
            <span class="xvue-ui-pagination-elevator-text">页</span>
        </div>

    </div>
</template>



<script>
export default {
    props:{
        // 总页数
        totalPage:{
            type:Number,
            default:10
        },
        // 当前页数
        currentPage:{
            type:Number,
            default:1
        },
        // 显示页数
        pageCount:{
            type:Number,
            default:5
        },
        pageSize:{
            type:[Array],
            default:()=>[]
        },
        selectedColor:{
            type:String,
            default:'#fff'
        },
        selectedBackgroundColor:{
            type:String,
            default:'#19b5fe'
        },
        model:{
            type:String,
            default:'multi'
        },
        isEllipsis:{
            type:Boolean,
            default:true
        },
        ellipsisToPageNum:{
            type:Number,
            default:3
        },
        showElevator:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            dataCurrentPage:this.currentPage,
            isCurrentBtn:true
        }
    },
    computed:{
        computedCurrentPage:{
            get(){
                return this.dataCurrentPage
            },
            set(newVal){
                this.dataCurrentPage = newVal
            }
        },
        computedSelectedColor(){
            return {
                color:`${this.selectedColor}`,
                backgroundColor:`${this.selectedBackgroundColor}`,
                border:`1px solid ${this.selectedBackgroundColor}`,
            }
        },
        prevEllipsis(){
            var tempPageCount = Math.ceil(this.pageCount/2)
            if(this.computedCurrentPage > tempPageCount){
                return true
            }
        },
        nextEllipsis(){
            var tempPageCount =this.pageCount/2
            if(this.computedCurrentPage + tempPageCount < this.totalPage){
                return true
            }
        }
    },
    methods:{
        selectChange(e){
            
            this.$emit('on-page-size-change',e.target.value)
        },
        keydown(e){
            let value = parseInt(e.target.value)
            if(value >= 1 && value){
                if(value <= this.totalPage){
                    this.computedCurrentPage = value
                }else{
                    this.computedCurrentPage = this.totalPage
                }
                
            }else{
                this.computedCurrentPage = 1
            }
            this.$emit('on-change',this.computedCurrentPage)
        },
        prevEllipsisBtn(){
            var tempComputedCurrentPage = this.computedCurrentPage - this.ellipsisToPageNum
            if(tempComputedCurrentPage <= 0){
                this.computedCurrentPage = 1
            }else{
                this.computedCurrentPage = tempComputedCurrentPage
            }
            this.$emit('on-change',this.computedCurrentPage)
        },
        nextEllipsisBtn(){
            var tempComputedCurrentPage = this.computedCurrentPage + this.ellipsisToPageNum
            if(tempComputedCurrentPage > this.totalPage){
                this.computedCurrentPage = this.totalPage
            }else{
                this.computedCurrentPage = tempComputedCurrentPage
            }
            this.$emit('on-change',this.computedCurrentPage)
        },
        showPageCount(totalPageItem){
            var valueOne = 0
            var tempPageCount = this.pageCount/2
            

            if(this.computedCurrentPage < tempPageCount){
                valueOne = Math.ceil(tempPageCount - this.computedCurrentPage)
            }else if((this.computedCurrentPage+tempPageCount) > this.totalPage){
                valueOne = Math.floor(this.computedCurrentPage+tempPageCount) - this.totalPage
            }


            return ((this.computedCurrentPage - tempPageCount)-valueOne) < totalPageItem && ((tempPageCount + this.computedCurrentPage)+valueOne) > totalPageItem
        },
        onhover(){
            let that = this
            let xvueUiPaginationItemHover = that.$refs.xvueUiPaginationItemHover
            let color = ''
            let backgroundColor = ''
            let border = ''
            
            if(xvueUiPaginationItemHover){
                for(let i =0;i<xvueUiPaginationItemHover.length;i++){
                    xvueUiPaginationItemHover[i].onmouseover = function(){
                        let getComputedStyle = window.getComputedStyle(xvueUiPaginationItemHover[i])
                        color = getComputedStyle.getPropertyValue('color')
                        backgroundColor = getComputedStyle.getPropertyValue('background-color')
                        border = getComputedStyle.getPropertyValue('border')
                        xvueUiPaginationItemHover[i].style.color = `${that.selectedColor}`
                        xvueUiPaginationItemHover[i].style.backgroundColor = `${that.selectedBackgroundColor}`
                        xvueUiPaginationItemHover[i].style.border = `1px solid ${that.selectedBackgroundColor}`
                    }
                    xvueUiPaginationItemHover[i].onmouseout = function(){
                        if(that.isCurrentBtn){
                            xvueUiPaginationItemHover[i].style.color = color
                            xvueUiPaginationItemHover[i].style.backgroundColor = backgroundColor
                            xvueUiPaginationItemHover[i].style.border = border
                        }
                        that.isCurrentBtn = true
                        that.onhover()
                    }
                }
            }

            // let xvueUiPaginationPrevHover = that.$refs.xvueUiPaginationPrevHover
            // if(xvueUiPaginationPrevHover){
            //     xvueUiPaginationPrevHover.onmouseover = function(){
            //         if(that.computedCurrentPage > 1){
            //             let getComputedStyle = window.getComputedStyle(xvueUiPaginationPrevHover)
            //             color = getComputedStyle.getPropertyValue('color')
            //             backgroundColor = getComputedStyle.getPropertyValue('background-color')
            //             border = getComputedStyle.getPropertyValue('border')
            //             xvueUiPaginationPrevHover.style.color = `${that.selectedColor}`
            //             xvueUiPaginationPrevHover.style.backgroundColor = `${that.selectedBackgroundColor}`
            //             xvueUiPaginationPrevHover.style.border = `1px solid ${that.selectedBackgroundColor}`
            //         }
            //     }
            //     xvueUiPaginationPrevHover.onmouseout = function(){
            //         if(that.isCurrentBtn && that.computedCurrentPage > 1){
            //             xvueUiPaginationPrevHover.style.color = color
            //             xvueUiPaginationPrevHover.style.backgroundColor = backgroundColor
            //             xvueUiPaginationPrevHover.style.border = border
            //         }
            //         that.isCurrentBtn = true
            //         that.onhover()
            //     }
            // }

            // let xvueUiPaginationNextHover = that.$refs.xvueUiPaginationNextHover
            // if(xvueUiPaginationNextHover){
            //     xvueUiPaginationNextHover.onmouseover = function(){
            //         if(that.computedCurrentPage != that.totalPage){
            //             let getComputedStyle = window.getComputedStyle(xvueUiPaginationNextHover)
            //             color = getComputedStyle.getPropertyValue('color')
            //             backgroundColor = getComputedStyle.getPropertyValue('background-color')
            //             border = getComputedStyle.getPropertyValue('border')
            //             xvueUiPaginationNextHover.style.color = `${that.selectedColor}`
            //             xvueUiPaginationNextHover.style.backgroundColor = `${that.selectedBackgroundColor}`
            //             xvueUiPaginationNextHover.style.border = `1px solid ${that.selectedBackgroundColor}`
            //         }
            //     }
            //     xvueUiPaginationNextHover.onmouseout = function(){
            //         if(that.isCurrentBtn){
            //             if(that.computedCurrentPage != that.totalPage){
            //                 xvueUiPaginationNextHover.style.color = color
            //                 xvueUiPaginationNextHover.style.backgroundColor = backgroundColor
            //                 xvueUiPaginationNextHover.style.border = border
            //             }
            //         }
            //         that.isCurrentBtn = true
            //         that.onhover()
            //     }
            // }

            let xvueUiPaginationNextMoreHover = that.$refs.xvueUiPaginationNextMoreHover
            if(xvueUiPaginationNextMoreHover){
                xvueUiPaginationNextMoreHover.onmouseover = function(){
                    let getComputedStyle = window.getComputedStyle(xvueUiPaginationNextMoreHover)
                    color = getComputedStyle.getPropertyValue('color')
                    backgroundColor = getComputedStyle.getPropertyValue('background-color')
                    border = getComputedStyle.getPropertyValue('border')
                    xvueUiPaginationNextMoreHover.style.color = `${that.selectedColor}`
                    xvueUiPaginationNextMoreHover.style.backgroundColor = `${that.selectedBackgroundColor}`
                    xvueUiPaginationNextMoreHover.style.border = `1px solid ${that.selectedBackgroundColor}`
                }
                xvueUiPaginationNextMoreHover.onmouseout = function(){

                    if(that.isCurrentBtn){
                        xvueUiPaginationNextMoreHover.style.color = color
                        xvueUiPaginationNextMoreHover.style.backgroundColor = backgroundColor
                        xvueUiPaginationNextMoreHover.style.border = border
                    }
                    that.isCurrentBtn = true
                    that.onhover()
                }
            }


            let xvueUiPaginationPrevMoreHover = that.$refs.xvueUiPaginationPrevMoreHover
            if(xvueUiPaginationPrevMoreHover){
                xvueUiPaginationPrevMoreHover.onmouseover = function(){
                    let getComputedStyle = window.getComputedStyle(xvueUiPaginationPrevMoreHover)
                    color = getComputedStyle.getPropertyValue('color')
                    backgroundColor = getComputedStyle.getPropertyValue('background-color')
                    border = getComputedStyle.getPropertyValue('border')
                    xvueUiPaginationPrevMoreHover.style.color = `${that.selectedColor}`
                    xvueUiPaginationPrevMoreHover.style.backgroundColor = `${that.selectedBackgroundColor}`
                    xvueUiPaginationPrevMoreHover.style.border = `1px solid ${that.selectedBackgroundColor}`
                }
                xvueUiPaginationPrevMoreHover.onmouseout = function(){
                    if(that.isCurrentBtn){
                        xvueUiPaginationPrevMoreHover.style.color = color
                        xvueUiPaginationPrevMoreHover.style.backgroundColor = backgroundColor
                        xvueUiPaginationPrevMoreHover.style.border = border
                    }
                    that.isCurrentBtn = true
                    that.onhover()
                }
            }

        },
        currentClick(index){
            this.isCurrentBtn = false
            this.computedCurrentPage = index
            this.$emit('on-change',this.computedCurrentPage)
        },
        prev(e){
            if(this.computedCurrentPage > 1){
                this.computedCurrentPage = this.computedCurrentPage - 1
                this.$emit('on-prev',this.computedCurrentPage)
            }
        },
        next(e){
            if(this.computedCurrentPage < this.totalPage){
                this.computedCurrentPage = this.computedCurrentPage + 1
                this.$emit('on-next',this.computedCurrentPage)
            }
        }
    },
    mounted(){
        this.onhover()
    }
}
</script>