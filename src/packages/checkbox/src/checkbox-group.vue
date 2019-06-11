<template>
    <div class="x-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'xCheckboxGroup',
    componentName: 'xCheckboxGroup',
    props:{
        model: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    watch: {
        model () {
            this.getModelArray()
        }
    },
    mounted(){
        this.getModelArray()
    },
    methods:{
        getModelArray(){
            let that = this
            this.$children.forEach((e) => {
                for(let i = 0;i<this.model.length;i++){
                    if(this.model[i] === e.label){
                        e.computedChecked = true
                    }
                }
            })
        },
        onChange(item){
            let checkedModel = []
            let noCheckedModel = []
            this.$children.forEach((e) => {
                if(e.$options.componentName === 'xCheckbox'){
                    if(e.computedChecked){
                        checkedModel.push(e.label)
                    }else{
                        noCheckedModel.push(e.label)
                    }
                }
            })
            this.$emit('on-change',checkedModel,noCheckedModel)
        }
    }
}
</script>