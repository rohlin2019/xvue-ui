import Vue from 'vue'
import xLoading from './src/loading'

function createLoading(data){
    let newdata = data
    const div = document.createElement('x-loading');
    div.innerHTML = `<x-loading></x-loading>`;
    document.body.appendChild(div);
    let loading = new Vue({
        el: div,
        data: newdata,
        components: { xLoading }
    }).$children[0];
    loading.loadingTypeFun(newdata)
}

export default {
    loading(obj) {
        if(!document.getElementById('xvueLoading')){
            let data = {}
            Object.assign(data,obj,{
                loadingType:"x-loading"
            })
            return createLoading(data);
        }
    },
    clear(){
        let removeObj = document.getElementById('xvueLoading');
        if(removeObj){
            removeObj.parentNode.removeChild(removeObj);
        }
    }
};