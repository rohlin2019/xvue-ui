import Vue from 'vue'
import xLoading from './src/loading'

function createLoading(data){
    let newdata = data
    // if(newdata.slots){
    //     newdata.slots = newdata.slots.replace(/(\'|\")/g,'')
    // }
    // let props = `backgroundColor='${newdata.backgroundColor}' textColor='${newdata.textColor}' content='${newdata.content}' :duration='${newdata.duration}' type='${newdata.type}' slots='${newdata.slots}'`
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
        console.log('---')
        if(removeObj){
            console.log(removeObj)
            removeObj.parentNode.removeChild(removeObj);
        }
    }
};