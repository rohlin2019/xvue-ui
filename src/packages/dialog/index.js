import Vue from 'vue'
import xDialogGroup from '../dialoggroup/dialoggroup';  

function createEle(data){
    var newdata = data
    if(newdata.content){
        newdata.content = newdata.content.replace(/(\'|\")/g,'')
    }
    // var props = `isCancel=${data.isCancel} isOkBtn='${data.isOklBtn}' isCancelBtn='${data.isCancelBtn}' content='${data.content}' :visible='${data.visible}' titleText='${data.title}' :duration='${data.duration}' type='${data.type}' :delay='${data.delay}' :openAnimation='${data.openAnimation}' confirmText='${data.confirmText}' cancelText='${data.cancelText}'`
    const div = document.createElement('div');
    div.innerHTML = `<x-dialog-group></x-dialog-group>`;
    document.body.appendChild(div);
    const dialogvue = new Vue({
        el: div,
        data: newdata,
        components: { xDialogGroup }
    }).$children[0];
    dialogvue.add(newdata)    
}

export default {
    name: 'x-dialog',
    default (obj) {
        let data = {}
        Object.assign(data,obj,{
            type:"default"
        })
        return createEle(data);
    }
};