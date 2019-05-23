<template>
    <div  ref="xvueuilazyimg" class="xvue-ui-lazyimg">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        defaultSrc:{
            type:String,
            default:'https://xvue.cn/empty.png'
        }
    },
    data(){
        return{
            clientHeight:0,
            imgArrTop:[],
            isScroll:true,
            
        }
    },
    mounted(){
        let that = this
        let ary = []
        that.$nextTick(()=>{
            that.isScroll = true
            that.clientHeight = document.documentElement.clientHeight
            let childs = that.$refs.xvueuilazyimg
            let imgArr = that.getChildNodes(childs)
            for(let i = 0; i<imgArr.length;i++){
                if(imgArr[i].tagName == 'IMG' || imgArr[i].tagName == 'img'){
                    imgArr[i].src = that.defaultSrc
                    that.imgArrTop.push({
                        top:imgArr[i].offsetTop,
                        el:imgArr[i]
                    })
                }
            }
            that.lazyImg();
            window.addEventListener("scroll",function(e){
                if(!that.isScroll){
                    return;
                }
                that.isScroll = false;
                setTimeout(function () {
                    that.lazyImg();
                    that.isScroll= true;
                },1000);
                
            });
        })
    },
    methods:{
        lazyImg(){
            let that = this
            var top = document.documentElement.scrollTop||document.body.scrollTop;
            for(let i=0; i<that.imgArrTop.length; i++){
                if(that.clientHeight + top > that.imgArrTop[i].top){
                    that.imgArrTop[i].el.src = that.imgArrTop[i].el.getAttribute('lazy-src');
                }
            }
        },
        getChildNodes(node){
            var nodes = node.childNodes;
            var arr = [];
            for (var i = 0; i < nodes.length; i++) {
                var childNode = nodes[i];
                if(childNode.nodeType == 1){
                    arr.push(childNode);
                    var temp = this.getChildNodes(childNode);
                    arr = arr.concat(temp);
                }
             }
             return arr;
        }
    }
}
</script>