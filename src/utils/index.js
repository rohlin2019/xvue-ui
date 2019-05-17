export default {
    isNumber(value) {
    　　var re = /^[1-9]+[0-9]*]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/ 

    　　if (!re.test(value)) {
    　　　　return false;
    　　}else{
    　　　　return true;
        }
    },
    //计算两个整数之间的百分比
    //curNum：当前数据，totalNum：总数据，isHasPercentStr：是否返回%字符
    getPercent(curNum, totalNum, isHasPercentStr) {
        curNum = parseInt(curNum);
        totalNum = parseInt(totalNum);
        if (isNaN(curNum) || isNaN(totalNum)) {
            return '-';
        }

        return isHasPercentStr ?
            totalNum <= 0 ? '0%' : (Math.ceil(curNum / totalNum * 10000) / 100 + '%') :
            totalNum <= 0 ? 0 : (Math.ceil(curNum / totalNum * 10000) / 100);
    }
}