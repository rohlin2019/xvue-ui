<template>
    <div class="x-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'xRadioGroup',
    componentName: 'xRadioGroup',
    props:{
        value: {}
    },
    methods:{
        onChange(item){
            this.$emit('change',item.computedModel)
        }
    }
}
</script>