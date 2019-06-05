<template>
    <div id="xvueLoading" class="xvue-loading-page animated fadeIn" :style="[isBackground?computedBackgroundColor:'']">
        <div>
          <div class="xvue-loading-content">
            <div v-if="type == 'circle'">
                <div class="xvue-loading-circle"></div>
                <p class="x-loading-content-text">{{text}}</p>
            </div>
            <div v-else-if="type == 'circular'">
              <div class="xvue-max-height-frequency">
                <div class="xvue-loading-circular"></div>
                <div class="xvue-loading-circular"></div>
                <div class="xvue-loading-circular"></div>
              </div>
                <p class="x-loading-content-text">{{text}}</p>
            </div>
            <div v-else-if="type == 'frequency'">
                <div class="xvue-max-height-frequency">
                  <div class="xvue-loading-frequency"></div>
                </div>
                <p class="x-loading-content-text">{{text}}</p>
            </div>
            <div v-else-if="type == 'dot-square'">
                <div class="xvue-loading-dot-square"></div>
                <p class="x-loading-content-text">{{text}}</p>
            </div>
            <div v-else-if="type == 'dot-circle'">
                <div class="xvue-loading-dot-circle"></div>
                <p class="x-loading-content-text">{{text}}</p>
            </div>
            <div v-else-if="type == 'dot-follow'">
                <div class="xvue-loading-dot-follow"></div>
                <p class="x-loading-content-text">{{text}}</p>
            </div>
            <!-- spinner -->
            <div v-else>
                <div class="xvue-loading-loader"></div>
                <p class="x-loading-content-text">{{text}}</p>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      type:'spinner',
      text:'正在加载',
      backgroundColor:'rgba(0,0,0,.3)',
      isBackground:true
    }
  },
  computed: {
    computedBackgroundColor() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  },
  methods:{
    loadingTypeFun(data){
      if(data.type){
        this.type = data.type
      }
      if(data.text){
        this.text = data.text
      }
      if(data.backgroundColor){
        this.backgroundColor = data.backgroundColor
      }
      if(data.isBackground == true || data.isBackground == false){
        this.isBackground = data.isBackground
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.xvue-loading-page {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2000;
  user-select: none;
  .xvue-loading-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-radius: 5px;
    padding:15px;
    .x-loading-content-text {
      color: #fff;
      text-align: center;
      font-size: 14px;
      margin-top: 7px;
    }
  }
}


// start dot-follow
.xvue-loading-dot-follow {
  font-size: 30px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 0.8em auto;
  position: relative;
  -webkit-animation: dot-follow 1.7s infinite ease;
  animation: dot-follow 1.7s infinite ease;
}
@-webkit-keyframes dot-follow {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.11em -0.83em 0 -0.42em #ffffff, -0.11em -0.83em 0 -0.44em #ffffff, -0.11em -0.83em 0 -0.46em #ffffff, -0.11em -0.83em 0 -0.477em #ffffff;
  }
  5%,
  95% {
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.11em -0.83em 0 -0.42em #ffffff, -0.11em -0.83em 0 -0.44em #ffffff, -0.11em -0.83em 0 -0.46em #ffffff, -0.11em -0.83em 0 -0.477em #ffffff;
  }
  30% {
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.51em -0.66em 0 -0.42em #ffffff, -0.75em -0.36em 0 -0.44em #ffffff, -0.83em -0.03em 0 -0.46em #ffffff, -0.81em 0.21em 0 -0.477em #ffffff;
  }
  55% {
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.29em -0.78em 0 -0.42em #ffffff, -0.43em -0.72em 0 -0.44em #ffffff, -0.52em -0.65em 0 -0.46em #ffffff, -0.57em -0.61em 0 -0.477em #ffffff;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.11em -0.83em 0 -0.42em #ffffff, -0.11em -0.83em 0 -0.44em #ffffff, -0.11em -0.83em 0 -0.46em #ffffff, -0.11em -0.83em 0 -0.477em #ffffff;
  }
}
@keyframes dot-follow {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.11em -0.83em 0 -0.42em #ffffff, -0.11em -0.83em 0 -0.44em #ffffff, -0.11em -0.83em 0 -0.46em #ffffff, -0.11em -0.83em 0 -0.477em #ffffff;
  }
  5%,
  95% {
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.11em -0.83em 0 -0.42em #ffffff, -0.11em -0.83em 0 -0.44em #ffffff, -0.11em -0.83em 0 -0.46em #ffffff, -0.11em -0.83em 0 -0.477em #ffffff;
  }
  30% {
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.51em -0.66em 0 -0.42em #ffffff, -0.75em -0.36em 0 -0.44em #ffffff, -0.83em -0.03em 0 -0.46em #ffffff, -0.81em 0.21em 0 -0.477em #ffffff;
  }
  55% {
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.29em -0.78em 0 -0.42em #ffffff, -0.43em -0.72em 0 -0.44em #ffffff, -0.52em -0.65em 0 -0.46em #ffffff, -0.57em -0.61em 0 -0.477em #ffffff;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #ffffff, -0.11em -0.83em 0 -0.42em #ffffff, -0.11em -0.83em 0 -0.44em #ffffff, -0.11em -0.83em 0 -0.46em #ffffff, -0.11em -0.83em 0 -0.477em #ffffff;
  }
}

// end dot-follow

// start dot-circle
.xvue-loading-dot-circle {
  margin: 3em auto;
  font-size: 12px;
  width: 1em;
  height: 1em;
  margin-top:30px;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: dot-circle 1.1s infinite ease;
  animation: dot-circle 1.1s infinite ease;
}
@-webkit-keyframes dot-circle {
  0%,
  100% {
    box-shadow: 0em -2.4em 0em 0em #ffffff, 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.5), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.7), 1.7em -1.7em 0 0em #ffffff, 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.5), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.7), 2.4em 0em 0 0em #ffffff, 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.5), 2.4em 0em 0 0em rgba(255, 255, 255, 0.7), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.5), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.7), 0em 2.4em 0 0em #ffffff, -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.5), 0em 2.4em 0 0em rgba(255, 255, 255, 0.7), -1.7em 1.7em 0 0em #ffffff, -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.5), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.7), -2.4em 0em 0 0em #ffffff, -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.5), -2.4em 0em 0 0em rgba(255, 255, 255, 0.7), -1.7em -1.7em 0 0em #ffffff;
  }
}
@keyframes dot-circle {
  0%,
  100% {
    box-shadow: 0em -2.4em 0em 0em #ffffff, 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.5), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.7), 1.7em -1.7em 0 0em #ffffff, 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.5), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.7), 2.4em 0em 0 0em #ffffff, 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.5), 2.4em 0em 0 0em rgba(255, 255, 255, 0.7), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.5), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.7), 0em 2.4em 0 0em #ffffff, -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.2), -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.5), 0em 2.4em 0 0em rgba(255, 255, 255, 0.7), -1.7em 1.7em 0 0em #ffffff, -2.4em 0em 0 0em rgba(255, 255, 255, 0.2), -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.5), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.7), -2.4em 0em 0 0em #ffffff, -1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.4em 0em 0em rgba(255, 255, 255, 0.2), 1.7em -1.7em 0 0em rgba(255, 255, 255, 0.2), 2.4em 0em 0 0em rgba(255, 255, 255, 0.2), 1.65em 1.65em 0 0em rgba(255, 255, 255, 0.2), 0em 2.4em 0 0em rgba(255, 255, 255, 0.2), -1.7em 1.7em 0 0em rgba(255, 255, 255, 0.5), -2.4em 0em 0 0em rgba(255, 255, 255, 0.7), -1.7em -1.7em 0 0em #ffffff;
  }
}

// start dot-circle

// start dot-circular
.xvue-loading-dot-square {
  font-size: 12px;
  margin: 3em auto;
  width: .5em;
  height: .5em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: dot-square 1.3s infinite linear;
  animation: dot-square 1.3s infinite linear;
}
@-webkit-keyframes dot-square {
  0%,
  100% {
    box-shadow: 0em -2em 0em 0.1em #ffffff, 1em -1em 0 0em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 0em #ffffff;
  }
  12.5% {
    box-shadow: 0em -2em 0em 0em #ffffff, 1em -1em 0 0.1em #ffffff, 2em 0em 0 0em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  25% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 0em #ffffff, 2em 0em 0 0.1em #ffffff, 1em 1em 0 0em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  37.5% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 0em #ffffff, 1em 1em 0 0.1em #ffffff, 0em 2em 0 0em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  50% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 0em #ffffff, 0em 2em 0 0.1em #ffffff, -1em 1em 0 0em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  62.5% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 0em #ffffff, -1em 1em 0 0.1em #ffffff, -2em 0em 0 0em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  75% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 0em #ffffff, -2em 0em 0 0.1em #ffffff, -1em -1em 0 0em #ffffff;
  }
  87.5% {
    box-shadow: 0em -2em 0em 0em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 0em #ffffff, -2em 0em 0 0em #ffffff, -1em -1em 0 0.1em #ffffff;
  }
}
@keyframes dot-square {
  0%,
  100% {
    box-shadow: 0em -2em 0em 0.1em #ffffff, 1em -1em 0 0em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 0em #ffffff;
  }
  12.5% {
    box-shadow: 0em -2em 0em 0em #ffffff, 1em -1em 0 0.1em #ffffff, 2em 0em 0 0em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  25% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 0em #ffffff, 2em 0em 0 0.1em #ffffff, 1em 1em 0 0em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  37.5% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 0em #ffffff, 1em 1em 0 0.1em #ffffff, 0em 2em 0 0em #ffffff, -1em 1em 0 -0.5em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  50% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 0em #ffffff, 0em 2em 0 0.1em #ffffff, -1em 1em 0 0em #ffffff, -2em 0em 0 -0.5em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  62.5% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 0em #ffffff, -1em 1em 0 0.1em #ffffff, -2em 0em 0 0em #ffffff, -1em -1em 0 -0.5em #ffffff;
  }
  75% {
    box-shadow: 0em -2em 0em -0.5em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 0em #ffffff, -2em 0em 0 0.1em #ffffff, -1em -1em 0 0em #ffffff;
  }
  87.5% {
    box-shadow: 0em -2em 0em 0em #ffffff, 1em -1em 0 -0.5em #ffffff, 2em 0em 0 -0.5em #ffffff, 1em 1em 0 -0.5em #ffffff, 0em 2em 0 -0.5em #ffffff, -1em 1em 0 0em #ffffff, -2em 0em 0 0em #ffffff, -1em -1em 0 0.1em #ffffff;
  }
}

// end dot-circular


// start frequency
.xvue-max-height-frequency{
  height:50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xvue-loading-frequency,
.xvue-loading-frequency:before,
.xvue-loading-frequency:after {
  background: #FFF;
  -webkit-animation: frequency 1s infinite ease-in-out;
  animation: frequency 1s infinite ease-in-out;
  width: 1em;
  height: 1em;
}
.xvue-loading-frequency:before,
.xvue-loading-frequency:after {
  position: absolute;
  top: 0;
  content: '';
}
.xvue-loading-frequency:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.xvue-loading-frequency {
  text-indent: -9999em;
  margin: 4px auto;
  position: relative;
  font-size: 11px;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.xvue-loading-frequency:after {
  left: 1.5em;
}
@-webkit-keyframes frequency {
  0%,
  80%,
  100% {
    box-shadow: 0 0 #FFF;
    height: 1em;
  }
  40% {
    box-shadow: 0 -2em #ffffff;
    height: 2em;
  }
}
@keyframes frequency {
  0%,
  80%,
  100% {
    box-shadow: 0 0 #FFF;
    height: 1em;
  }
  40% {
    box-shadow: 0 -2em #ffffff;
    height: 2em;
  }
}

// end frequency

// start circle
.xvue-loading-circle {
  margin: 20px;
  height: 2em;
  width: 2em;
  border-radius: 50%;
  display: inline-block;
  transform: scale(0);
  animation: bulge 2s infinite ease-in-out;
}

.xvue-loading-circle::after {
  position: absolute;
  display: inline-block;
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: inherit;
  top: 0;
  left: 0;
  z-index: -1;
  transform: scale(1);
  animation: blow 2s infinite ease-in-out;
}

.xvue-loading-circle:nth-child(1) {
  background-color: #fff;
  animation-delay: 0s;
}


// end circle

// start circular
.xvue-loading-circular {
  margin: 5px;
  height: .8em;
  width: .8em;
  border-radius: 50%;
  display: inline-block;
  transform: scale(0);
  animation: bulge 2s infinite ease-in-out;
}

.xvue-loading-circular::after {
  position: absolute;
  display: inline-block;
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: inherit;
  top: 0;
  left: 0;
  z-index: -1;
  transform: scale(1);
  animation: blow 2s infinite ease-in-out;
}

.xvue-loading-circular:nth-child(1) {
  background-color: #fff;
  animation-delay: 0s;
}

.xvue-loading-circular:nth-child(2) {
  background-color: #fff;
  animation-delay: .25s;
}

.xvue-loading-circular:nth-child(3) {
  background-color: #fff;
  animation-delay: .50s;
}


@keyframes bulge {
  50% {
    transform: scale(1);
  }
}


@keyframes blow {
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.5;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
// end circular


// start loader
.xvue-loading-loader {
  display: inline-block;
  text-indent: -9999em;
  border-top: 0.3em solid rgb(255, 255, 255);
  border-right: 0.3em solid rgb(255, 255, 255);
  border-bottom: 0.3em solid rgb(255, 255, 255);
  border-left: 0.3em solid #555;
  -moz-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -moz-animation: loader 1300ms infinite linear;
  -webkit-animation: loader 1300ms infinite linear;
  animation: loader 1300ms infinite linear;
  -moz-transition: all 1500ms ease;
  -o-transition: all 1500ms ease;
  -webkit-transition: all 1500ms ease;
  transition: all 1500ms ease;
}
.xvue-loading-loader,
.xvue-loading-loader:after {
  border-radius: 50%;
  width: 2em;
  height: 2em;
}
@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes loader {
  0% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.is-loading {
  overflow: hidden;
}
.is-loading .curtain {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
  z-index: 99;
}
.is-loading .loader {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
// end loader



</style>
