<template>
    <div class="x-col" :class="[offsetStyls,mediaStyls,puStyls]" :style="paddingLeftRight">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'x-col',
    data(){
        return{
            gutter:0
        }
    },
    props:{
        span:[Number,String],
        offset:[Number,String],
        xs:[Number,String],
        sm:[Number,String],
        md:[Number,String],
        lg:[Number,String],
        xl:[Number,String],
        pull:[Number,String],
        push:[Number,String]
    },
    watch:{
        span(newVal,oldVal){
            this.span = `x-col-size-span-${newVal}` 
        }
    },
    computed:{
        mediaStyls(){
            let styls = []
            
            if(this.xl){
                styls.push(`x-col-size-xl-${this.xl}`)
                if(this.pull){
                    styls.push(`x-col-size-xl-pull-${this.pull}`)
                }
                if(this.push){
                    styls.push(`x-col-size-xl-push-${this.push}`)
                }
                
            }
            if(this.lg){
                styls.push(`x-col-size-lg-${this.lg}`)
                if(this.pull){
                    styls.push(`x-col-size-lg-pull-${this.pull}`)
                }
                if(this.push){
                    styls.push(`x-col-size-lg-push-${this.push}`)
                }
            }
            if(this.md){
                styls.push(`x-col-size-md-${this.md}`)
                if(this.pull){
                    styls.push(`x-col-size-md-pull-${this.pull}`)
                }
                if(this.push){
                    styls.push(`x-col-size-md-push-${this.push}`)
                }
            }
            if(this.sm){
                styls.push(`x-col-size-sm-${this.sm}`)
                if(this.pull){
                    styls.push(`x-col-size-sm-pull-${this.pull}`)
                }
                if(this.push){
                    styls.push(`x-col-size-sm-push-${this.push}`)
                }
            }
            if(this.xs){
                styls.push(`x-col-size-xs-${this.xs}`)
                if(this.pull){
                    styls.push(`x-col-size-xs-pull-${this.pull}`)
                }
                if(this.push){
                    styls.push(`x-col-size-xs-push-${this.push}`)
                }
            }

            return styls
        },
        paddingLeftRight () {
            let that = this
            let gutter = parseInt(that.gutter)
            let style = {};
            if (gutter != 0) {
                style = {
                    paddingLeft: parseInt(gutter) / 2 + 'px',
                    paddingRight: parseInt(gutter) / 2 + 'px'
                };
            }

            return style;
        },
        offsetStyls(){
            return {
                [`x-col-size-span-${this.span}`]: this.span,
                [`x-col-size-offset-${this.offset}`]: this.offset
            }  
        },
        puStyls(){
            return {
                [`x-col-size-pull-${this.pull}`]: this.pull,
                [`x-col-size-push-${this.push}`]: this.push
            }  
        }
    }
}
</script>
<style lang="scss">
.x-col{
    float:left;
    box-sizing:border-box;
}

// span
.x-col-size-span-1{
    display:block;
    width:4.16666667%;
}
.x-col-size-span-2{
    display:block;
    width:8.33333333%;
}
.x-col-size-span-3{
    display:block;
    width:12.5%;
}
.x-col-size-span-4{
    display:block;
    width:16.66666667%;
}
.x-col-size-span-5{
    display:block;
    width:20.83333333%;
}
.x-col-size-span-6{
    display:block;
    width:25%;
}
.x-col-size-span-7{
    display:block;
    width:29.16666667%;
}
.x-col-size-span-8{
    display:block;
    width:33.33333333%;
}
.x-col-size-span-9{
    display:block;
    width:37.5%;
}
.x-col-size-span-10{
    display:block;
    width:41.66666667%;
}
.x-col-size-span-11{
    display:block;
    width:45.83333333%;
}
.x-col-size-span-12{
    display:block;
    width:50%;
}
.x-col-size-span-13{
    display:block;
    width:54.16666667%;
}
.x-col-size-span-14{
    display:block;
    width:58.33333333%;
}
.x-col-size-span-15{
    display:block;
    width:62.5%;
}
.x-col-size-span-16{
    display:block;
    width:66.66666667%;
}
.x-col-size-span-17{
    display:block;
    width:70.83333333%;
}
.x-col-size-span-18{
    display:block;
    width:75%;
}
.x-col-size-span-19{
    display:block;
    width:79.16666667%;
}
.x-col-size-span-20{
    display:block;
    width:83.33333333%;
}
.x-col-size-span-21{
    display:block;
    width:87.5%;
}
.x-col-size-span-22{
    display:block;
    width:91.66666667%;
}
.x-col-size-span-23{
    display:block;
    width:95.83333333%;
}
.x-col-size-span-24{
    display:block;
    width:100%;
}


// offset
.x-col-size-offset-1{
    margin-left:4.16666667%;
}
.x-col-size-offset-2{
    margin-left:8.33333333%;
}
.x-col-size-offset-3{
    margin-left:12.5%;
}
.x-col-size-offset-4{
    margin-left:16.66666667%;
}
.x-col-size-offset-5{
    margin-left:20.83333333%;
}
.x-col-size-offset-6{
    margin-left:25%;
}
.x-col-size-offset-7{
    margin-left:29.16666667%;
}
.x-col-size-offset-8{
    margin-left:33.33333333%;
}
.x-col-size-offset-9{
    margin-left:37.5%;
}
.x-col-size-offset-10{
    margin-left:41.66666667%;
}
.x-col-size-offset-11{
    margin-left:45.83333333%;
}
.x-col-size-offset-12{
    margin-left:50%;
}
.x-col-size-offset-13{
    margin-left:54.16666667%;
}
.x-col-size-offset-14{
    margin-left:58.33333333%;
}
.x-col-size-offset-15{
    margin-left:62.5%;
}
.x-col-size-offset-16{
    margin-left:66.66666667%;
}
.x-col-size-offset-17{
    margin-left:70.83333333%;
}
.x-col-size-offset-18{
    margin-left:75%;
}
.x-col-size-offset-19{
    margin-left:79.16666667%;
}
.x-col-size-offset-20{
    margin-left:83.33333333%;
}
.x-col-size-offset-21{
    margin-left:87.5%;
}
.x-col-size-offset-22{
    margin-left:91.66666667%;
}
.x-col-size-offset-23{
    margin-left:95.83333333%;
}
.x-col-size-offset-24{
    margin-left:100%;
}


// pull
.x-col-size-pull-1{
    position: relative;
    right:4.16666667%;
}
.x-col-size-pull-2{
    position: relative;
    right:8.33333333%;
}
.x-col-size-pull-3{
    position: relative;
    right:12.5%;
}
.x-col-size-pull-4{
    position: relative;
    right:16.66666667%;
}
.x-col-size-pull-5{
    position: relative;
    right:20.83333333%;
}
.x-col-size-pull-6{
    position: relative;
    right:25%;
}
.x-col-size-pull-7{
    position: relative;
    right:29.16666667%;
}
.x-col-size-pull-8{
    position: relative;
    right:33.33333333%;
}
.x-col-size-pull-9{
    position: relative;
    right:37.5%;
}
.x-col-size-pull-10{
    position: relative;
    right:41.66666667%;
}
.x-col-size-pull-11{
    position: relative;
    right:45.83333333%;
}
.x-col-size-pull-12{
    position: relative;
    right:50%;
}
.x-col-size-pull-13{
    position: relative;
    right:54.16666667%;
}
.x-col-size-pull-14{
    position: relative;
    right:58.33333333%;
}
.x-col-size-pull-15{
    position: relative;
    right:62.5%;
}
.x-col-size-pull-16{
    position: relative;
    right:66.66666667%;
}
.x-col-size-pull-17{
    position: relative;
    right:70.83333333%;
}
.x-col-size-pull-18{
    position: relative;
    right:75%;
}
.x-col-size-pull-19{
    position: relative;
    right:79.16666667%;
}
.x-col-size-pull-20{
    position: relative;
    right:83.33333333%;
}
.x-col-size-pull-21{
    position: relative;
    right:87.5%;
}
.x-col-size-pull-22{
    position: relative;
    right:91.66666667%;
}
.x-col-size-pull-23{
    position: relative;
    right:95.83333333%;
}
.x-col-size-pull-24{
    position: relative;
    right:100%;
}


// push
.x-col-size-push-1{
    position: relative;
    left:4.16666667%;
}
.x-col-size-push-2{
    position: relative;
    left:8.33333333%;
}
.x-col-size-push-3{
    position: relative;
    left:12.5%;
}
.x-col-size-push-4{
    position: relative;
    left:16.66666667%;
}
.x-col-size-push-5{
    position: relative;
    left:20.83333333%;
}
.x-col-size-push-6{
    position: relative;
    left:25%;
}
.x-col-size-push-7{
    position: relative;
    left:29.16666667%;
}
.x-col-size-push-8{
    position: relative;
    left:33.33333333%;
}
.x-col-size-push-9{
    position: relative;
    left:37.5%;
}
.x-col-size-push-10{
    position: relative;
    left:41.66666667%;
}
.x-col-size-push-11{
    position: relative;
    left:45.83333333%;
}
.x-col-size-push-12{
    position: relative;
    left:50%;
}
.x-col-size-push-13{
    position: relative;
    left:54.16666667%;
}
.x-col-size-push-14{
    position: relative;
    left:58.33333333%;
}
.x-col-size-push-15{
    position: relative;
    left:62.5%;
}
.x-col-size-push-16{
    position: relative;
    left:66.66666667%;
}
.x-col-size-push-17{
    position: relative;
    left:70.83333333%;
}
.x-col-size-push-18{
    position: relative;
    left:75%;
}
.x-col-size-push-19{
    position: relative;
    left:79.16666667%;
}
.x-col-size-push-20{
    position: relative;
    left:83.33333333%;
}
.x-col-size-push-21{
    position: relative;
    left:87.5%;
}
.x-col-size-push-22{
    position: relative;
    left:91.66666667%;
}
.x-col-size-push-23{
    position: relative;
    left:95.83333333%;
}
.x-col-size-push-24{
    position: relative;
    left:100%;
}


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



@media only screen and (max-width: 767px) {
    .x-col-size-xs-0 {
        display: none;
        width: 0%
    }

    .x-col-size-xs-offset-0 {
        margin-left: 0
    }

    .x-col-size-xs-pull-0 {
        position: relative;
        right: 0
    }

    .x-col-size-xs-push-0 {
        position: relative;
        left: 0
    }

    .x-col-size-xs-1 {
        width: 4.16667%
    }

    .x-col-size-xs-offset-1 {
        margin-left: 4.16667%
    }

    .x-col-size-xs-pull-1 {
        position: relative;
        right: 4.16667%
    }

    .x-col-size-xs-push-1 {
        position: relative;
        left: 4.16667%
    }

    .x-col-size-xs-2 {
        width: 8.33333%
    }

    .x-col-size-xs-offset-2 {
        margin-left: 8.33333%
    }

    .x-col-size-xs-pull-2 {
        position: relative;
        right: 8.33333%
    }

    .x-col-size-xs-push-2 {
        position: relative;
        left: 8.33333%
    }

    .x-col-size-xs-3 {
        width: 12.5%
    }

    .x-col-size-xs-offset-3 {
        margin-left: 12.5%
    }

    .x-col-size-xs-pull-3 {
        position: relative;
        right: 12.5%
    }

    .x-col-size-xs-push-3 {
        position: relative;
        left: 12.5%
    }

    .x-col-size-xs-4 {
        width: 16.66667%
    }

    .x-col-size-xs-offset-4 {
        margin-left: 16.66667%
    }

    .x-col-size-xs-pull-4 {
        position: relative;
        right: 16.66667%
    }

    .x-col-size-xs-push-4 {
        position: relative;
        left: 16.66667%
    }

    .x-col-size-xs-5 {
        width: 20.83333%
    }

    .x-col-size-xs-offset-5 {
        margin-left: 20.83333%
    }

    .x-col-size-xs-pull-5 {
        position: relative;
        right: 20.83333%
    }

    .x-col-size-xs-push-5 {
        position: relative;
        left: 20.83333%
    }

    .x-col-size-xs-6 {
        width: 25%
    }

    .x-col-size-xs-offset-6 {
        margin-left: 25%
    }

    .x-col-size-xs-pull-6 {
        position: relative;
        right: 25%
    }

    .x-col-size-xs-push-6 {
        position: relative;
        left: 25%
    }

    .x-col-size-xs-7 {
        width: 29.16667%
    }

    .x-col-size-xs-offset-7 {
        margin-left: 29.16667%
    }

    .x-col-size-xs-pull-7 {
        position: relative;
        right: 29.16667%
    }

    .x-col-size-xs-push-7 {
        position: relative;
        left: 29.16667%
    }

    .x-col-size-xs-8 {
        width: 33.33333%
    }

    .x-col-size-xs-offset-8 {
        margin-left: 33.33333%
    }

    .x-col-size-xs-pull-8 {
        position: relative;
        right: 33.33333%
    }

    .x-col-size-xs-push-8 {
        position: relative;
        left: 33.33333%
    }

    .x-col-size-xs-9 {
        width: 37.5%
    }

    .x-col-size-xs-offset-9 {
        margin-left: 37.5%
    }

    .x-col-size-xs-pull-9 {
        position: relative;
        right: 37.5%
    }

    .x-col-size-xs-push-9 {
        position: relative;
        left: 37.5%
    }

    .x-col-size-xs-10 {
        width: 41.66667%
    }

    .x-col-size-xs-offset-10 {
        margin-left: 41.66667%
    }

    .x-col-size-xs-pull-10 {
        position: relative;
        right: 41.66667%
    }

    .x-col-size-xs-push-10 {
        position: relative;
        left: 41.66667%
    }

    .x-col-size-xs-11 {
        width: 45.83333%
    }

    .x-col-size-xs-offset-11 {
        margin-left: 45.83333%
    }

    .x-col-size-xs-pull-11 {
        position: relative;
        right: 45.83333%
    }

    .x-col-size-xs-push-11 {
        position: relative;
        left: 45.83333%
    }

    .x-col-size-xs-12 {
        width: 50%
    }

    .x-col-size-xs-offset-12 {
        margin-left: 50%
    }

    .x-col-size-xs-pull-12 {
        position: relative;
        right: 50%
    }

    .x-col-size-xs-push-12 {
        position: relative;
        left: 50%
    }

    .x-col-size-xs-13 {
        width: 54.16667%
    }

    .x-col-size-xs-offset-13 {
        margin-left: 54.16667%
    }

    .x-col-size-xs-pull-13 {
        position: relative;
        right: 54.16667%
    }

    .x-col-size-xs-push-13 {
        position: relative;
        left: 54.16667%
    }

    .x-col-size-xs-14 {
        width: 58.33333%
    }

    .x-col-size-xs-offset-14 {
        margin-left: 58.33333%
    }

    .x-col-size-xs-pull-14 {
        position: relative;
        right: 58.33333%
    }

    .x-col-size-xs-push-14 {
        position: relative;
        left: 58.33333%
    }

    .x-col-size-xs-15 {
        width: 62.5%
    }

    .x-col-size-xs-offset-15 {
        margin-left: 62.5%
    }

    .x-col-size-xs-pull-15 {
        position: relative;
        right: 62.5%
    }

    .x-col-size-xs-push-15 {
        position: relative;
        left: 62.5%
    }

    .x-col-size-xs-16 {
        width: 66.66667%
    }

    .x-col-size-xs-offset-16 {
        margin-left: 66.66667%
    }

    .x-col-size-xs-pull-16 {
        position: relative;
        right: 66.66667%
    }

    .x-col-size-xs-push-16 {
        position: relative;
        left: 66.66667%
    }

    .x-col-size-xs-17 {
        width: 70.83333%
    }

    .x-col-size-xs-offset-17 {
        margin-left: 70.83333%
    }

    .x-col-size-xs-pull-17 {
        position: relative;
        right: 70.83333%
    }

    .x-col-size-xs-push-17 {
        position: relative;
        left: 70.83333%
    }

    .x-col-size-xs-18 {
        width: 75%
    }

    .x-col-size-xs-offset-18 {
        margin-left: 75%
    }

    .x-col-size-xs-pull-18 {
        position: relative;
        right: 75%
    }

    .x-col-size-xs-push-18 {
        position: relative;
        left: 75%
    }

    .x-col-size-xs-19 {
        width: 79.16667%
    }

    .x-col-size-xs-offset-19 {
        margin-left: 79.16667%
    }

    .x-col-size-xs-pull-19 {
        position: relative;
        right: 79.16667%
    }

    .x-col-size-xs-push-19 {
        position: relative;
        left: 79.16667%
    }

    .x-col-size-xs-20 {
        width: 83.33333%
    }

    .x-col-size-xs-offset-20 {
        margin-left: 83.33333%
    }

    .x-col-size-xs-pull-20 {
        position: relative;
        right: 83.33333%
    }

    .x-col-size-xs-push-20 {
        position: relative;
        left: 83.33333%
    }

    .x-col-size-xs-21 {
        width: 87.5%
    }

    .x-col-size-xs-offset-21 {
        margin-left: 87.5%
    }

    .x-col-size-xs-pull-21 {
        position: relative;
        right: 87.5%
    }

    .x-col-size-xs-push-21 {
        position: relative;
        left: 87.5%
    }

    .x-col-size-xs-22 {
        width: 91.66667%
    }

    .x-col-size-xs-offset-22 {
        margin-left: 91.66667%
    }

    .x-col-size-xs-pull-22 {
        position: relative;
        right: 91.66667%
    }

    .x-col-size-xs-push-22 {
        position: relative;
        left: 91.66667%
    }

    .x-col-size-xs-23 {
        width: 95.83333%
    }

    .x-col-size-xs-offset-23 {
        margin-left: 95.83333%
    }

    .x-col-size-xs-pull-23 {
        position: relative;
        right: 95.83333%
    }

    .x-col-size-xs-push-23 {
        position: relative;
        left: 95.83333%
    }

    .x-col-size-xs-24 {
        width: 100%
    }

    .x-col-size-xs-offset-24 {
        margin-left: 100%
    }

    .x-col-size-xs-pull-24 {
        position: relative;
        right: 100%
    }

    .x-col-size-xs-push-24 {
        position: relative;
        left: 100%
    }
}

@media only screen and (min-width: 768px) {
    .x-col-size-sm-0 {
        display: none;
        width: 0%
    }

    .x-col-size-sm-offset-0 {
        margin-left: 0
    }

    .x-col-size-sm-pull-0 {
        position: relative;
        right: 0
    }

    .x-col-size-sm-push-0 {
        position: relative;
        left: 0
    }

    .x-col-size-sm-1 {
        width: 4.16667%
    }

    .x-col-size-sm-offset-1 {
        margin-left: 4.16667%
    }

    .x-col-size-sm-pull-1 {
        position: relative;
        right: 4.16667%
    }

    .x-col-size-sm-push-1 {
        position: relative;
        left: 4.16667%
    }

    .x-col-size-sm-2 {
        width: 8.33333%
    }

    .x-col-size-sm-offset-2 {
        margin-left: 8.33333%
    }

    .x-col-size-sm-pull-2 {
        position: relative;
        right: 8.33333%
    }

    .x-col-size-sm-push-2 {
        position: relative;
        left: 8.33333%
    }

    .x-col-size-sm-3 {
        width: 12.5%
    }

    .x-col-size-sm-offset-3 {
        margin-left: 12.5%
    }

    .x-col-size-sm-pull-3 {
        position: relative;
        right: 12.5%
    }

    .x-col-size-sm-push-3 {
        position: relative;
        left: 12.5%
    }

    .x-col-size-sm-4 {
        width: 16.66667%
    }

    .x-col-size-sm-offset-4 {
        margin-left: 16.66667%
    }

    .x-col-size-sm-pull-4 {
        position: relative;
        right: 16.66667%
    }

    .x-col-size-sm-push-4 {
        position: relative;
        left: 16.66667%
    }

    .x-col-size-sm-5 {
        width: 20.83333%
    }

    .x-col-size-sm-offset-5 {
        margin-left: 20.83333%
    }

    .x-col-size-sm-pull-5 {
        position: relative;
        right: 20.83333%
    }

    .x-col-size-sm-push-5 {
        position: relative;
        left: 20.83333%
    }

    .x-col-size-sm-6 {
        width: 25%
    }

    .x-col-size-sm-offset-6 {
        margin-left: 25%
    }

    .x-col-size-sm-pull-6 {
        position: relative;
        right: 25%
    }

    .x-col-size-sm-push-6 {
        position: relative;
        left: 25%
    }

    .x-col-size-sm-7 {
        width: 29.16667%
    }

    .x-col-size-sm-offset-7 {
        margin-left: 29.16667%
    }

    .x-col-size-sm-pull-7 {
        position: relative;
        right: 29.16667%
    }

    .x-col-size-sm-push-7 {
        position: relative;
        left: 29.16667%
    }

    .x-col-size-sm-8 {
        width: 33.33333%
    }

    .x-col-size-sm-offset-8 {
        margin-left: 33.33333%
    }

    .x-col-size-sm-pull-8 {
        position: relative;
        right: 33.33333%
    }

    .x-col-size-sm-push-8 {
        position: relative;
        left: 33.33333%
    }

    .x-col-size-sm-9 {
        width: 37.5%
    }

    .x-col-size-sm-offset-9 {
        margin-left: 37.5%
    }

    .x-col-size-sm-pull-9 {
        position: relative;
        right: 37.5%
    }

    .x-col-size-sm-push-9 {
        position: relative;
        left: 37.5%
    }

    .x-col-size-sm-10 {
        width: 41.66667%
    }

    .x-col-size-sm-offset-10 {
        margin-left: 41.66667%
    }

    .x-col-size-sm-pull-10 {
        position: relative;
        right: 41.66667%
    }

    .x-col-size-sm-push-10 {
        position: relative;
        left: 41.66667%
    }

    .x-col-size-sm-11 {
        width: 45.83333%
    }

    .x-col-size-sm-offset-11 {
        margin-left: 45.83333%
    }

    .x-col-size-sm-pull-11 {
        position: relative;
        right: 45.83333%
    }

    .x-col-size-sm-push-11 {
        position: relative;
        left: 45.83333%
    }

    .x-col-size-sm-12 {
        width: 50%
    }

    .x-col-size-sm-offset-12 {
        margin-left: 50%
    }

    .x-col-size-sm-pull-12 {
        position: relative;
        right: 50%
    }

    .x-col-size-sm-push-12 {
        position: relative;
        left: 50%
    }

    .x-col-size-sm-13 {
        width: 54.16667%
    }

    .x-col-size-sm-offset-13 {
        margin-left: 54.16667%
    }

    .x-col-size-sm-pull-13 {
        position: relative;
        right: 54.16667%
    }

    .x-col-size-sm-push-13 {
        position: relative;
        left: 54.16667%
    }

    .x-col-size-sm-14 {
        width: 58.33333%
    }

    .x-col-size-sm-offset-14 {
        margin-left: 58.33333%
    }

    .x-col-size-sm-pull-14 {
        position: relative;
        right: 58.33333%
    }

    .x-col-size-sm-push-14 {
        position: relative;
        left: 58.33333%
    }

    .x-col-size-sm-15 {
        width: 62.5%
    }

    .x-col-size-sm-offset-15 {
        margin-left: 62.5%
    }

    .x-col-size-sm-pull-15 {
        position: relative;
        right: 62.5%
    }

    .x-col-size-sm-push-15 {
        position: relative;
        left: 62.5%
    }

    .x-col-size-sm-16 {
        width: 66.66667%
    }

    .x-col-size-sm-offset-16 {
        margin-left: 66.66667%
    }

    .x-col-size-sm-pull-16 {
        position: relative;
        right: 66.66667%
    }

    .x-col-size-sm-push-16 {
        position: relative;
        left: 66.66667%
    }

    .x-col-size-sm-17 {
        width: 70.83333%
    }

    .x-col-size-sm-offset-17 {
        margin-left: 70.83333%
    }

    .x-col-size-sm-pull-17 {
        position: relative;
        right: 70.83333%
    }

    .x-col-size-sm-push-17 {
        position: relative;
        left: 70.83333%
    }

    .x-col-size-sm-18 {
        width: 75%
    }

    .x-col-size-sm-offset-18 {
        margin-left: 75%
    }

    .x-col-size-sm-pull-18 {
        position: relative;
        right: 75%
    }

    .x-col-size-sm-push-18 {
        position: relative;
        left: 75%
    }

    .x-col-size-sm-19 {
        width: 79.16667%
    }

    .x-col-size-sm-offset-19 {
        margin-left: 79.16667%
    }

    .x-col-size-sm-pull-19 {
        position: relative;
        right: 79.16667%
    }

    .x-col-size-sm-push-19 {
        position: relative;
        left: 79.16667%
    }

    .x-col-size-sm-20 {
        width: 83.33333%
    }

    .x-col-size-sm-offset-20 {
        margin-left: 83.33333%
    }

    .x-col-size-sm-pull-20 {
        position: relative;
        right: 83.33333%
    }

    .x-col-size-sm-push-20 {
        position: relative;
        left: 83.33333%
    }

    .x-col-size-sm-21 {
        width: 87.5%
    }

    .x-col-size-sm-offset-21 {
        margin-left: 87.5%
    }

    .x-col-size-sm-pull-21 {
        position: relative;
        right: 87.5%
    }

    .x-col-size-sm-push-21 {
        position: relative;
        left: 87.5%
    }

    .x-col-size-sm-22 {
        width: 91.66667%
    }

    .x-col-size-sm-offset-22 {
        margin-left: 91.66667%
    }

    .x-col-size-sm-pull-22 {
        position: relative;
        right: 91.66667%
    }

    .x-col-size-sm-push-22 {
        position: relative;
        left: 91.66667%
    }

    .x-col-size-sm-23 {
        width: 95.83333%
    }

    .x-col-size-sm-offset-23 {
        margin-left: 95.83333%
    }

    .x-col-size-sm-pull-23 {
        position: relative;
        right: 95.83333%
    }

    .x-col-size-sm-push-23 {
        position: relative;
        left: 95.83333%
    }

    .x-col-size-sm-24 {
        width: 100%
    }

    .x-col-size-sm-offset-24 {
        margin-left: 100%
    }

    .x-col-size-sm-pull-24 {
        position: relative;
        right: 100%
    }

    .x-col-size-sm-push-24 {
        position: relative;
        left: 100%
    }
}

@media only screen and (min-width: 992px) {
    .x-col-size-md-0 {
        display: none;
        width: 0%
    }

    .x-col-size-md-offset-0 {
        margin-left: 0
    }

    .x-col-size-md-pull-0 {
        position: relative;
        right: 0
    }

    .x-col-size-md-push-0 {
        position: relative;
        left: 0
    }

    .x-col-size-md-1 {
        width: 4.16667%
    }

    .x-col-size-md-offset-1 {
        margin-left: 4.16667%
    }

    .x-col-size-md-pull-1 {
        position: relative;
        right: 4.16667%
    }

    .x-col-size-md-push-1 {
        position: relative;
        left: 4.16667%
    }

    .x-col-size-md-2 {
        width: 8.33333%
    }

    .x-col-size-md-offset-2 {
        margin-left: 8.33333%
    }

    .x-col-size-md-pull-2 {
        position: relative;
        right: 8.33333%
    }

    .x-col-size-md-push-2 {
        position: relative;
        left: 8.33333%
    }

    .x-col-size-md-3 {
        width: 12.5%
    }

    .x-col-size-md-offset-3 {
        margin-left: 12.5%
    }

    .x-col-size-md-pull-3 {
        position: relative;
        right: 12.5%
    }

    .x-col-size-md-push-3 {
        position: relative;
        left: 12.5%
    }

    .x-col-size-md-4 {
        width: 16.66667%
    }

    .x-col-size-md-offset-4 {
        margin-left: 16.66667%
    }

    .x-col-size-md-pull-4 {
        position: relative;
        right: 16.66667%
    }

    .x-col-size-md-push-4 {
        position: relative;
        left: 16.66667%
    }

    .x-col-size-md-5 {
        width: 20.83333%
    }

    .x-col-size-md-offset-5 {
        margin-left: 20.83333%
    }

    .x-col-size-md-pull-5 {
        position: relative;
        right: 20.83333%
    }

    .x-col-size-md-push-5 {
        position: relative;
        left: 20.83333%
    }

    .x-col-size-md-6 {
        width: 25%
    }

    .x-col-size-md-offset-6 {
        margin-left: 25%
    }

    .x-col-size-md-pull-6 {
        position: relative;
        right: 25%
    }

    .x-col-size-md-push-6 {
        position: relative;
        left: 25%
    }

    .x-col-size-md-7 {
        width: 29.16667%
    }

    .x-col-size-md-offset-7 {
        margin-left: 29.16667%
    }

    .x-col-size-md-pull-7 {
        position: relative;
        right: 29.16667%
    }

    .x-col-size-md-push-7 {
        position: relative;
        left: 29.16667%
    }

    .x-col-size-md-8 {
        width: 33.33333%
    }

    .x-col-size-md-offset-8 {
        margin-left: 33.33333%
    }

    .x-col-size-md-pull-8 {
        position: relative;
        right: 33.33333%
    }

    .x-col-size-md-push-8 {
        position: relative;
        left: 33.33333%
    }

    .x-col-size-md-9 {
        width: 37.5%
    }

    .x-col-size-md-offset-9 {
        margin-left: 37.5%
    }

    .x-col-size-md-pull-9 {
        position: relative;
        right: 37.5%
    }

    .x-col-size-md-push-9 {
        position: relative;
        left: 37.5%
    }

    .x-col-size-md-10 {
        width: 41.66667%
    }

    .x-col-size-md-offset-10 {
        margin-left: 41.66667%
    }

    .x-col-size-md-pull-10 {
        position: relative;
        right: 41.66667%
    }

    .x-col-size-md-push-10 {
        position: relative;
        left: 41.66667%
    }

    .x-col-size-md-11 {
        width: 45.83333%
    }

    .x-col-size-md-offset-11 {
        margin-left: 45.83333%
    }

    .x-col-size-md-pull-11 {
        position: relative;
        right: 45.83333%
    }

    .x-col-size-md-push-11 {
        position: relative;
        left: 45.83333%
    }

    .x-col-size-md-12 {
        width: 50%
    }

    .x-col-size-md-offset-12 {
        margin-left: 50%
    }

    .x-col-size-md-pull-12 {
        position: relative;
        right: 50%
    }

    .x-col-size-md-push-12 {
        position: relative;
        left: 50%
    }

    .x-col-size-md-13 {
        width: 54.16667%
    }

    .x-col-size-md-offset-13 {
        margin-left: 54.16667%
    }

    .x-col-size-md-pull-13 {
        position: relative;
        right: 54.16667%
    }

    .x-col-size-md-push-13 {
        position: relative;
        left: 54.16667%
    }

    .x-col-size-md-14 {
        width: 58.33333%
    }

    .x-col-size-md-offset-14 {
        margin-left: 58.33333%
    }

    .x-col-size-md-pull-14 {
        position: relative;
        right: 58.33333%
    }

    .x-col-size-md-push-14 {
        position: relative;
        left: 58.33333%
    }

    .x-col-size-md-15 {
        width: 62.5%
    }

    .x-col-size-md-offset-15 {
        margin-left: 62.5%
    }

    .x-col-size-md-pull-15 {
        position: relative;
        right: 62.5%
    }

    .x-col-size-md-push-15 {
        position: relative;
        left: 62.5%
    }

    .x-col-size-md-16 {
        width: 66.66667%
    }

    .x-col-size-md-offset-16 {
        margin-left: 66.66667%
    }

    .x-col-size-md-pull-16 {
        position: relative;
        right: 66.66667%
    }

    .x-col-size-md-push-16 {
        position: relative;
        left: 66.66667%
    }

    .x-col-size-md-17 {
        width: 70.83333%
    }

    .x-col-size-md-offset-17 {
        margin-left: 70.83333%
    }

    .x-col-size-md-pull-17 {
        position: relative;
        right: 70.83333%
    }

    .x-col-size-md-push-17 {
        position: relative;
        left: 70.83333%
    }

    .x-col-size-md-18 {
        width: 75%
    }

    .x-col-size-md-offset-18 {
        margin-left: 75%
    }

    .x-col-size-md-pull-18 {
        position: relative;
        right: 75%
    }

    .x-col-size-md-push-18 {
        position: relative;
        left: 75%
    }

    .x-col-size-md-19 {
        width: 79.16667%
    }

    .x-col-size-md-offset-19 {
        margin-left: 79.16667%
    }

    .x-col-size-md-pull-19 {
        position: relative;
        right: 79.16667%
    }

    .x-col-size-md-push-19 {
        position: relative;
        left: 79.16667%
    }

    .x-col-size-md-20 {
        width: 83.33333%
    }

    .x-col-size-md-offset-20 {
        margin-left: 83.33333%
    }

    .x-col-size-md-pull-20 {
        position: relative;
        right: 83.33333%
    }

    .x-col-size-md-push-20 {
        position: relative;
        left: 83.33333%
    }

    .x-col-size-md-21 {
        width: 87.5%
    }

    .x-col-size-md-offset-21 {
        margin-left: 87.5%
    }

    .x-col-size-md-pull-21 {
        position: relative;
        right: 87.5%
    }

    .x-col-size-md-push-21 {
        position: relative;
        left: 87.5%
    }

    .x-col-size-md-22 {
        width: 91.66667%
    }

    .x-col-size-md-offset-22 {
        margin-left: 91.66667%
    }

    .x-col-size-md-pull-22 {
        position: relative;
        right: 91.66667%
    }

    .x-col-size-md-push-22 {
        position: relative;
        left: 91.66667%
    }

    .x-col-size-md-23 {
        width: 95.83333%
    }

    .x-col-size-md-offset-23 {
        margin-left: 95.83333%
    }

    .x-col-size-md-pull-23 {
        position: relative;
        right: 95.83333%
    }

    .x-col-size-md-push-23 {
        position: relative;
        left: 95.83333%
    }

    .x-col-size-md-24 {
        width: 100%
    }

    .x-col-size-md-offset-24 {
        margin-left: 100%
    }

    .x-col-size-md-pull-24 {
        position: relative;
        right: 100%
    }

    .x-col-size-md-push-24 {
        position: relative;
        left: 100%
    }
}

@media only screen and (min-width: 1200px) {
    .x-col-size-lg-0 {
        display: none;
        width: 0%
    }

    .x-col-size-lg-offset-0 {
        margin-left: 0
    }

    .x-col-size-lg-pull-0 {
        position: relative;
        right: 0
    }

    .x-col-size-lg-push-0 {
        position: relative;
        left: 0
    }

    .x-col-size-lg-1 {
        width: 4.16667%
    }

    .x-col-size-lg-offset-1 {
        margin-left: 4.16667%
    }

    .x-col-size-lg-pull-1 {
        position: relative;
        right: 4.16667%
    }

    .x-col-size-lg-push-1 {
        position: relative;
        left: 4.16667%
    }

    .x-col-size-lg-2 {
        width: 8.33333%
    }

    .x-col-size-lg-offset-2 {
        margin-left: 8.33333%
    }

    .x-col-size-lg-pull-2 {
        position: relative;
        right: 8.33333%
    }

    .x-col-size-lg-push-2 {
        position: relative;
        left: 8.33333%
    }

    .x-col-size-lg-3 {
        width: 12.5%
    }

    .x-col-size-lg-offset-3 {
        margin-left: 12.5%
    }

    .x-col-size-lg-pull-3 {
        position: relative;
        right: 12.5%
    }

    .x-col-size-lg-push-3 {
        position: relative;
        left: 12.5%
    }

    .x-col-size-lg-4 {
        width: 16.66667%
    }

    .x-col-size-lg-offset-4 {
        margin-left: 16.66667%
    }

    .x-col-size-lg-pull-4 {
        position: relative;
        right: 16.66667%
    }

    .x-col-size-lg-push-4 {
        position: relative;
        left: 16.66667%
    }

    .x-col-size-lg-5 {
        width: 20.83333%
    }

    .x-col-size-lg-offset-5 {
        margin-left: 20.83333%
    }

    .x-col-size-lg-pull-5 {
        position: relative;
        right: 20.83333%
    }

    .x-col-size-lg-push-5 {
        position: relative;
        left: 20.83333%
    }

    .x-col-size-lg-6 {
        width: 25%
    }

    .x-col-size-lg-offset-6 {
        margin-left: 25%
    }

    .x-col-size-lg-pull-6 {
        position: relative;
        right: 25%
    }

    .x-col-size-lg-push-6 {
        position: relative;
        left: 25%
    }

    .x-col-size-lg-7 {
        width: 29.16667%
    }

    .x-col-size-lg-offset-7 {
        margin-left: 29.16667%
    }

    .x-col-size-lg-pull-7 {
        position: relative;
        right: 29.16667%
    }

    .x-col-size-lg-push-7 {
        position: relative;
        left: 29.16667%
    }

    .x-col-size-lg-8 {
        width: 33.33333%
    }

    .x-col-size-lg-offset-8 {
        margin-left: 33.33333%
    }

    .x-col-size-lg-pull-8 {
        position: relative;
        right: 33.33333%
    }

    .x-col-size-lg-push-8 {
        position: relative;
        left: 33.33333%
    }

    .x-col-size-lg-9 {
        width: 37.5%
    }

    .x-col-size-lg-offset-9 {
        margin-left: 37.5%
    }

    .x-col-size-lg-pull-9 {
        position: relative;
        right: 37.5%
    }

    .x-col-size-lg-push-9 {
        position: relative;
        left: 37.5%
    }

    .x-col-size-lg-10 {
        width: 41.66667%
    }

    .x-col-size-lg-offset-10 {
        margin-left: 41.66667%
    }

    .x-col-size-lg-pull-10 {
        position: relative;
        right: 41.66667%
    }

    .x-col-size-lg-push-10 {
        position: relative;
        left: 41.66667%
    }

    .x-col-size-lg-11 {
        width: 45.83333%
    }

    .x-col-size-lg-offset-11 {
        margin-left: 45.83333%
    }

    .x-col-size-lg-pull-11 {
        position: relative;
        right: 45.83333%
    }

    .x-col-size-lg-push-11 {
        position: relative;
        left: 45.83333%
    }

    .x-col-size-lg-12 {
        width: 50%
    }

    .x-col-size-lg-offset-12 {
        margin-left: 50%
    }

    .x-col-size-lg-pull-12 {
        position: relative;
        right: 50%
    }

    .x-col-size-lg-push-12 {
        position: relative;
        left: 50%
    }

    .x-col-size-lg-13 {
        width: 54.16667%
    }

    .x-col-size-lg-offset-13 {
        margin-left: 54.16667%
    }

    .x-col-size-lg-pull-13 {
        position: relative;
        right: 54.16667%
    }

    .x-col-size-lg-push-13 {
        position: relative;
        left: 54.16667%
    }

    .x-col-size-lg-14 {
        width: 58.33333%
    }

    .x-col-size-lg-offset-14 {
        margin-left: 58.33333%
    }

    .x-col-size-lg-pull-14 {
        position: relative;
        right: 58.33333%
    }

    .x-col-size-lg-push-14 {
        position: relative;
        left: 58.33333%
    }

    .x-col-size-lg-15 {
        width: 62.5%
    }

    .x-col-size-lg-offset-15 {
        margin-left: 62.5%
    }

    .x-col-size-lg-pull-15 {
        position: relative;
        right: 62.5%
    }

    .x-col-size-lg-push-15 {
        position: relative;
        left: 62.5%
    }

    .x-col-size-lg-16 {
        width: 66.66667%
    }

    .x-col-size-lg-offset-16 {
        margin-left: 66.66667%
    }

    .x-col-size-lg-pull-16 {
        position: relative;
        right: 66.66667%
    }

    .x-col-size-lg-push-16 {
        position: relative;
        left: 66.66667%
    }

    .x-col-size-lg-17 {
        width: 70.83333%
    }

    .x-col-size-lg-offset-17 {
        margin-left: 70.83333%
    }

    .x-col-size-lg-pull-17 {
        position: relative;
        right: 70.83333%
    }

    .x-col-size-lg-push-17 {
        position: relative;
        left: 70.83333%
    }

    .x-col-size-lg-18 {
        width: 75%
    }

    .x-col-size-lg-offset-18 {
        margin-left: 75%
    }

    .x-col-size-lg-pull-18 {
        position: relative;
        right: 75%
    }

    .x-col-size-lg-push-18 {
        position: relative;
        left: 75%
    }

    .x-col-size-lg-19 {
        width: 79.16667%
    }

    .x-col-size-lg-offset-19 {
        margin-left: 79.16667%
    }

    .x-col-size-lg-pull-19 {
        position: relative;
        right: 79.16667%
    }

    .x-col-size-lg-push-19 {
        position: relative;
        left: 79.16667%
    }

    .x-col-size-lg-20 {
        width: 83.33333%
    }

    .x-col-size-lg-offset-20 {
        margin-left: 83.33333%
    }

    .x-col-size-lg-pull-20 {
        position: relative;
        right: 83.33333%
    }

    .x-col-size-lg-push-20 {
        position: relative;
        left: 83.33333%
    }

    .x-col-size-lg-21 {
        width: 87.5%
    }

    .x-col-size-lg-offset-21 {
        margin-left: 87.5%
    }

    .x-col-size-lg-pull-21 {
        position: relative;
        right: 87.5%
    }

    .x-col-size-lg-push-21 {
        position: relative;
        left: 87.5%
    }

    .x-col-size-lg-22 {
        width: 91.66667%
    }

    .x-col-size-lg-offset-22 {
        margin-left: 91.66667%
    }

    .x-col-size-lg-pull-22 {
        position: relative;
        right: 91.66667%
    }

    .x-col-size-lg-push-22 {
        position: relative;
        left: 91.66667%
    }

    .x-col-size-lg-23 {
        width: 95.83333%
    }

    .x-col-size-lg-offset-23 {
        margin-left: 95.83333%
    }

    .x-col-size-lg-pull-23 {
        position: relative;
        right: 95.83333%
    }

    .x-col-size-lg-push-23 {
        position: relative;
        left: 95.83333%
    }

    .x-col-size-lg-24 {
        width: 100%
    }

    .x-col-size-lg-offset-24 {
        margin-left: 100%
    }

    .x-col-size-lg-pull-24 {
        position: relative;
        right: 100%
    }

    .x-col-size-lg-push-24 {
        position: relative;
        left: 100%
    }
}

@media only screen and (min-width: 1920px) {
    .x-col-size-xl-0 {
        display: none;
        width: 0%
    }

    .x-col-size-xl-offset-0 {
        margin-left: 0
    }

    .x-col-size-xl-pull-0 {
        position: relative;
        right: 0
    }

    .x-col-size-xl-push-0 {
        position: relative;
        left: 0
    }

    .x-col-size-xl-1 {
        width: 4.16667%
    }

    .x-col-size-xl-offset-1 {
        margin-left: 4.16667%
    }

    .x-col-size-xl-pull-1 {
        position: relative;
        right: 4.16667%
    }

    .x-col-size-xl-push-1 {
        position: relative;
        left: 4.16667%
    }

    .x-col-size-xl-2 {
        width: 8.33333%
    }

    .x-col-size-xl-offset-2 {
        margin-left: 8.33333%
    }

    .x-col-size-xl-pull-2 {
        position: relative;
        right: 8.33333%
    }

    .x-col-size-xl-push-2 {
        position: relative;
        left: 8.33333%
    }

    .x-col-size-xl-3 {
        width: 12.5%
    }

    .x-col-size-xl-offset-3 {
        margin-left: 12.5%
    }

    .x-col-size-xl-pull-3 {
        position: relative;
        right: 12.5%
    }

    .x-col-size-xl-push-3 {
        position: relative;
        left: 12.5%
    }

    .x-col-size-xl-4 {
        width: 16.66667%
    }

    .x-col-size-xl-offset-4 {
        margin-left: 16.66667%
    }

    .x-col-size-xl-pull-4 {
        position: relative;
        right: 16.66667%
    }

    .x-col-size-xl-push-4 {
        position: relative;
        left: 16.66667%
    }

    .x-col-size-xl-5 {
        width: 20.83333%
    }

    .x-col-size-xl-offset-5 {
        margin-left: 20.83333%
    }

    .x-col-size-xl-pull-5 {
        position: relative;
        right: 20.83333%
    }

    .x-col-size-xl-push-5 {
        position: relative;
        left: 20.83333%
    }

    .x-col-size-xl-6 {
        width: 25%
    }

    .x-col-size-xl-offset-6 {
        margin-left: 25%
    }

    .x-col-size-xl-pull-6 {
        position: relative;
        right: 25%
    }

    .x-col-size-xl-push-6 {
        position: relative;
        left: 25%
    }

    .x-col-size-xl-7 {
        width: 29.16667%
    }

    .x-col-size-xl-offset-7 {
        margin-left: 29.16667%
    }

    .x-col-size-xl-pull-7 {
        position: relative;
        right: 29.16667%
    }

    .x-col-size-xl-push-7 {
        position: relative;
        left: 29.16667%
    }

    .x-col-size-xl-8 {
        width: 33.33333%
    }

    .x-col-size-xl-offset-8 {
        margin-left: 33.33333%
    }

    .x-col-size-xl-pull-8 {
        position: relative;
        right: 33.33333%
    }

    .x-col-size-xl-push-8 {
        position: relative;
        left: 33.33333%
    }

    .x-col-size-xl-9 {
        width: 37.5%
    }

    .x-col-size-xl-offset-9 {
        margin-left: 37.5%
    }

    .x-col-size-xl-pull-9 {
        position: relative;
        right: 37.5%
    }

    .x-col-size-xl-push-9 {
        position: relative;
        left: 37.5%
    }

    .x-col-size-xl-10 {
        width: 41.66667%
    }

    .x-col-size-xl-offset-10 {
        margin-left: 41.66667%
    }

    .x-col-size-xl-pull-10 {
        position: relative;
        right: 41.66667%
    }

    .x-col-size-xl-push-10 {
        position: relative;
        left: 41.66667%
    }

    .x-col-size-xl-11 {
        width: 45.83333%
    }

    .x-col-size-xl-offset-11 {
        margin-left: 45.83333%
    }

    .x-col-size-xl-pull-11 {
        position: relative;
        right: 45.83333%
    }

    .x-col-size-xl-push-11 {
        position: relative;
        left: 45.83333%
    }

    .x-col-size-xl-12 {
        width: 50%
    }

    .x-col-size-xl-offset-12 {
        margin-left: 50%
    }

    .x-col-size-xl-pull-12 {
        position: relative;
        right: 50%
    }

    .x-col-size-xl-push-12 {
        position: relative;
        left: 50%
    }

    .x-col-size-xl-13 {
        width: 54.16667%
    }

    .x-col-size-xl-offset-13 {
        margin-left: 54.16667%
    }

    .x-col-size-xl-pull-13 {
        position: relative;
        right: 54.16667%
    }

    .x-col-size-xl-push-13 {
        position: relative;
        left: 54.16667%
    }

    .x-col-size-xl-14 {
        width: 58.33333%
    }

    .x-col-size-xl-offset-14 {
        margin-left: 58.33333%
    }

    .x-col-size-xl-pull-14 {
        position: relative;
        right: 58.33333%
    }

    .x-col-size-xl-push-14 {
        position: relative;
        left: 58.33333%
    }

    .x-col-size-xl-15 {
        width: 62.5%
    }

    .x-col-size-xl-offset-15 {
        margin-left: 62.5%
    }

    .x-col-size-xl-pull-15 {
        position: relative;
        right: 62.5%
    }

    .x-col-size-xl-push-15 {
        position: relative;
        left: 62.5%
    }

    .x-col-size-xl-16 {
        width: 66.66667%
    }

    .x-col-size-xl-offset-16 {
        margin-left: 66.66667%
    }

    .x-col-size-xl-pull-16 {
        position: relative;
        right: 66.66667%
    }

    .x-col-size-xl-push-16 {
        position: relative;
        left: 66.66667%
    }

    .x-col-size-xl-17 {
        width: 70.83333%
    }

    .x-col-size-xl-offset-17 {
        margin-left: 70.83333%
    }

    .x-col-size-xl-pull-17 {
        position: relative;
        right: 70.83333%
    }

    .x-col-size-xl-push-17 {
        position: relative;
        left: 70.83333%
    }

    .x-col-size-xl-18 {
        width: 75%
    }

    .x-col-size-xl-offset-18 {
        margin-left: 75%
    }

    .x-col-size-xl-pull-18 {
        position: relative;
        right: 75%
    }

    .x-col-size-xl-push-18 {
        position: relative;
        left: 75%
    }

    .x-col-size-xl-19 {
        width: 79.16667%
    }

    .x-col-size-xl-offset-19 {
        margin-left: 79.16667%
    }

    .x-col-size-xl-pull-19 {
        position: relative;
        right: 79.16667%
    }

    .x-col-size-xl-push-19 {
        position: relative;
        left: 79.16667%
    }

    .x-col-size-xl-20 {
        width: 83.33333%
    }

    .x-col-size-xl-offset-20 {
        margin-left: 83.33333%
    }

    .x-col-size-xl-pull-20 {
        position: relative;
        right: 83.33333%
    }

    .x-col-size-xl-push-20 {
        position: relative;
        left: 83.33333%
    }

    .x-col-size-xl-21 {
        width: 87.5%
    }

    .x-col-size-xl-offset-21 {
        margin-left: 87.5%
    }

    .x-col-size-xl-pull-21 {
        position: relative;
        right: 87.5%
    }

    .x-col-size-xl-push-21 {
        position: relative;
        left: 87.5%
    }

    .x-col-size-xl-22 {
        width: 91.66667%
    }

    .x-col-size-xl-offset-22 {
        margin-left: 91.66667%
    }

    .x-col-size-xl-pull-22 {
        position: relative;
        right: 91.66667%
    }

    .x-col-size-xl-push-22 {
        position: relative;
        left: 91.66667%
    }

    .x-col-size-xl-23 {
        width: 95.83333%
    }

    .x-col-size-xl-offset-23 {
        margin-left: 95.83333%
    }

    .x-col-size-xl-pull-23 {
        position: relative;
        right: 95.83333%
    }

    .x-col-size-xl-push-23 {
        position: relative;
        left: 95.83333%
    }

    .x-col-size-xl-24 {
        width: 100%
    }

    .x-col-size-xl-offset-24 {
        margin-left: 100%
    }

    .x-col-size-xl-pull-24 {
        position: relative;
        right: 100%
    }

    .x-col-size-xl-push-24 {
        position: relative;
        left: 100%
    }
}

</style>

