import Vue from 'vue'
import xToastGroup from '../toast/toastGroup'

function createToast(data){
    let newdata = data
    console.log(data)
    if(newdata.slots){
        newdata.slots = newdata.slots.replace(/(\'|\")/g,'')
    }
    // let props = `backgroundColor='${newdata.backgroundColor}' textColor='${newdata.textColor}' content='${newdata.content}' :duration='${newdata.duration}' type='${newdata.type}' slots='${newdata.slots}'`
    const div = document.createElement('x-toast-group');
    div.innerHTML = `<x-toast-group></x-toast-group>`;
    document.body.appendChild(div);
    let toastGroup = new Vue({
        el: div,
        data: newdata,
        components: { xToastGroup }
    }).$children[0];
    toastGroup.add(newdata)
}

export default {
    name: 'x-message',
    info (obj) {
        let data = {}
        Object.assign(data,obj,{
            type:"x-info"
        })
        return createToast(data);
    },
    success (obj) {
        let data = {}
        Object.assign(data,obj,{
            type:"x-success"
        })
        return createToast(data);
    },
    warning (obj) {
        let data = {}
        Object.assign(data,obj,{
            type:"x-warning"
        })
        return createToast(data);
    },
    error (obj) {
        let data = {}
        Object.assign(data,obj,{
            type:"x-error"
        })
        return createToast(data);
    },
    default (obj) {
        let data = {}
        Object.assign(data,obj,{
            type:"x-default"
        })
        return createToast(data);
    }
};