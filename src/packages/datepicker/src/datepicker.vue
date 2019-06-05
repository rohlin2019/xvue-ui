<style lang="scss" scoped>
.xvue-ui-date-picker{
    position: relative;
    user-select: none;
    .xvue-ui-date-picker-input{
        border:1px solid #ded9d9;
        height:35px;
        min-width:300px;
        border-radius:4px;
        outline: none;
        padding-left:5px;
        caret-color:#ded9d9;
        background:#fff;
        cursor: pointer;
        color:#1d1818;
    }
    .xvue-ui-date-picker-con{
        position:absolute;
        top:45px;
        left:0;
        width:307px;
        background:#fff;
        box-shadow: 0px 0px 5px #ccc;
        border-radius:5px;
        overflow: hidden;
    }
    .xvue-ui-date-picker-header{
        padding:15px 15px 5px 15px;
        border-bottom:1px solid rgb(230,230,230);
        .xvue-ui-date-picker-header-left-text{
            font-size:14px;
            color:#1d1818;
            text-align: center;
        }
        .xvue-ui-date-picker-header-right-control{
            padding:10px 0px;
            display: flex;
            justify-content: space-between;
            .xvue-ui-left-jiantou-icon{
                float:left;
                span{
                    cursor: pointer;
                    font-size:14px;
                }
                .xvue-ui-citn-arrow-left{
                    font-size:12px;
                }
            }
            .xvue-ui-right-jiantou-icon{
                float:right;
                span{
                    cursor: pointer;
                    font-size:14px;
                }
                .xvue-ui-citn-arrow-right{
                    font-size:12px;
                }
            }
            .xvue-ui-date-picker-header-middel{
                text-align: center;
            }
        }
    }
    .xvue-ui-date-picker-content{
        padding-top:10px;
        .xvue-ui-date-picker-date{
            display: flex;
            justify-content: space-around;
            li{
                text-align: center;
                float:left;
                font-size:12px;
                color:#1d1818;
            }
        }
        .xvue-ui-date-picker-date-li{
            display: flex-wrap;
            margin-top:10px;
            justify-content: space-around;
            li{
                width:14.2857143%;
                text-align: center;
                float:left;
                font-size:12px;
                color:#1d1818;
                margin:10px 0px;
                .xvue-ui-date-picker-days{
                    padding:5px;
                    border-radius:20px;
                    width:15px;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    height:15px;
                    cursor: pointer;
                }
                .xvue-ui-date-picker-days-checked{
                    background:#19b5fe;
                    color:#fff;
                }
            }
        }
    }
}
</style>

<template>
    <div class="xvue-ui-date-picker">
        <input type="text" :value="val" class="xvue-ui-date-picker-input" disabled @click="openDatePicker">
        <div class="xvue-ui-date-picker-con">
            <div class="xvue-ui-date-picker-header">
                <h1 class="xvue-ui-date-picker-header-left-text">请选择日期</h1>
                <div class="xvue-ui-date-picker-header-right-control">
                    <div class="xvue-ui-left-jiantou-icon">
                        <span class="citnfont citn-zuoshuangjiantou"></span>
                        <span class="citnfont citn-arrow-left xvue-ui-citn-arrow-left"></span>
                    </div>
                    <div class="xvue-ui-date-picker-header-middel">2019-06-02</div>
                    <div class="xvue-ui-right-jiantou-icon">
                        <span class="citnfont citn-arrow-right xvue-ui-citn-arrow-right"></span>
                        <span class="citnfont citn-youshuangjiantou"></span>
                    </div>
                </div>
            </div>
            <div class="xvue-ui-date-picker-content">
                <ul class="xvue-ui-date-picker-date">
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                </ul>
                <ul class="xvue-ui-date-picker-date-li citn-clear">
                    <li v-for="(dayItem,index) of currentDays"
                    :key="index">
                        <span class="xvue-ui-date-picker-days" :class="[{'xvue-ui-date-picker-days-checked':currentDayItem == dayItem.i}]" @click="selectDay(dayItem.i)">{{dayItem.i}}</span>
                    </li>
                </ul>
            </div>
        </div>      
    </div>
</template>

<script>
import {date} from '../../../newUtils'
import { isToday, format } from 'date-fns';
export default {
    props:{
        val:{
            type:String,
            default:'请选择日期'
        }
    },
    model:{
        prop:'val'  
    },
    data(){
        return {
            currentDayItem:13,
            currentDays:[]
        }
    },
    created(){
        this.computedDays()
    },
    methods:{
        // 获取本月1号是星期几
        getMonthOneDay(date){
            return new Date(date).getDay()
        },
        selectDay(i){
            this.currentDayItem = i
        },
        // 计算这个月多少天
        computedDays(){
            
            // 上个月多少天
            let prevDays = date.getCountDays(new Date('2019-05'))
            
            // 这个月多少天
            let currentDays = date.getCountDays(new Date('2019-06'))
            
            // 这个月一号星期几
            let monthOneDay = this.getMonthOneDay('2019-06-01')
            
            
            let whileIndex = 1 // 记录循环次数

            
            
                
                

            while(true){
                console.log('---22222')
                
                if(whileIndex >= monthOneDay){

                    for(let i = 1;i<=currentDays;i++){
                        this.currentDays.push({
                            i,is:false
                        })
                        if(i >= currentDays){
                            return;
                        }
                    }
                }
                whileIndex++
            }
        },
        openDatePicker(){
            
        }
    }
}
</script>