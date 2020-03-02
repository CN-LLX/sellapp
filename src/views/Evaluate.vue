<template>
  <div class="big">
    <div class="top">
      <div class="top-left">
        <p class="top-left-p1">{{shuju.score}}</p>
        <p class="top-left-p2">综合评分</p>
      </div>
      <div class="top-right">
        <div class="top-right-fen">
          <p>口味评分</p>
          <Rate disabled v-model="shuju.foodScore" />
          <span class="color-y">{{shuju.foodScore}}</span>
        </div>
        <div class="top-right-fen">
          <p>服务评分</p>
          <Rate disabled v-model="shuju.serviceScore" />
          <span class="color-y">{{shuju.serviceScore}}</span>
        </div>
        <div class="top-right-fen">
          <p>
            送达时间
            <span class="mar">{{shuju.deliveryTime}}分钟</span>
          </p>
        </div>
      </div>
    </div>
    <div class="hui"></div>
    <div class="bot">
      <div class="bot-top">
        <div class="bot-top-an1">
          <p>
            全部
            <span>30</span>
          </p>
        </div>
        <div class="bot-top-an2">
          <p>
            满意
            <span>30</span>
          </p>
        </div>
        <div class="bot-top-an3">
          <p>
            不满意
            <span>30</span>
          </p>
        </div>
      </div>
      <div class="bot-min">
        <p>
          <img src="../assets/imgs/check_circle.svg" alt />
          <span>只看有内容的评论</span>
        </p>
      </div>

      <div class="bot-con" v-for="(v,i) in zongping" :key="i">
        <div class="con-left">
          <div class="yuan">
            <img :src="v.avatar" alt />
          </div>
        </div>
        <div class="con-right">
          <div class="con-right-top">
            <span class="fons-12">{{v.username}}</span>
            <span
              class="color-c"
            >{{new Date(v.rateTime).toLocaleDateString().replace(/\//g, "-") + " " + new Date(v.rateTime).toTimeString().substr(0, 8)}}</span>
          </div>
          <div class="con-right-str">
            <Rate disabled v-model="v.score" />
            <span class="color-h">{{v.deliveryTime}}</span>
            <span class="color-h" v-show="v.deliveryTime">分钟</span>
          </div>
          <p class="con-right-con">{{v.text}}</p>
          <div class="con-right-bot">
            <Icon
              type="md-thumbs-up"
              v-show="v.rateType==0"
              :style="{color: (v.rateType==0 ? '#00A1DC':'#ccc')}"
            />
            <Icon
              type="md-thumbs-down"
              v-show="v.rateType==1"
              :style="{color: (v.rateType==1 ? '#ccc':'#00A1DC')}"
            />
            <div class="tuijian" v-for="(a,b) in v.recommend" :key="b">{{a}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getmian } from "../api/apis";
import { getevaluate } from "../api/apis";
// import BScroll from 'better-scroll'

export default {
  data() {
    return {
      shuju: {},
      zongping: [],
      data: 3,
      valueCustomText: 3
    };
  },
  created() {
    getmian().then(res => {
      this.shuju = res.data.data;
      console.log(this.shuju);
    });
    getevaluate().then(res => {
      this.zongping = res.data.data;
      console.log(this.zongping);
    });
  }
  //   mounted(){
  //       new BScroll(document.querySelector('.bot'))
  //   }
};
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 18px;
  .top-left {
    width: 138px;
    height: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .top-left-p1 {
      font-size: 30px;
      color: #fa9a04;
    }
  }
  .top-right {
    width: 250px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .top-right-fen {
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      line-height: 36px;
      .color-y {
        color: #fa9a04;
      }

      .mar {
        margin-left: 20px;
      }
    }
  }
}
.hui {
  width: 100%;
  height: 18px;
  background-color: #f3f6f6;
}
.bot {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  .bot-top {
    width: 90%;
    height: 68px;
    border-bottom: 1px solid #e4e7e7;
    display: flex;
    align-items: center;
    .bot-top-an1 {
      width: 60px;
      height: 32px;
      background-color: #00a1dc;
      margin-right: 10px;
      border-radius: 2px;
      text-align: center;
      line-height: 32px;
      color: white;
      span {
        font-size: 12px;
      }
    }
    .bot-top-an2 {
      width: 60px;
      height: 32px;
      background-color: #cceef7;
      margin-right: 10px;
      border-radius: 2px;
      text-align: center;
      line-height: 32px;
      span {
        font-size: 12px;
      }
    }
    .bot-top-an3 {
      width: 70px;
      height: 32px;
      background-color: #e9ecec;
      border-radius: 2px;
      text-align: center;
      line-height: 32px;
      span {
        font-size: 12px;
      }
    }
  }
  .bot-min {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e4e7e7;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 90%;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
  }
  .bot-con {
    width: 90%;
    height: 130px;
    padding-top: 16px;
    border-bottom: 1px solid #e4e7e7;
    display: flex;
    .con-left {
      width: 30px;
      height: 100%;
      margin-right: 10px;
      .yuan {
        width: 100%;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 30px;
        }
      }
    }
    .con-right {
      flex: 1;
      overflow: hidden;
      // background-color: #00A1DC;
      .con-right-top {
        display: flex;
        justify-content: space-between;
        .fons-12 {
          font-size: 12px;
        }
        .color-c {
          font-size: 12px;
          color: #ccc;
        }
      }
      .con-right-str {
        .color-h {
          color: #ccc;
        }
      }
      .con-right-con {
        color: black;
        font-size: 14px;
      }
      .con-right-bot {
        display: flex;
        align-items: center;
        .tuijian {
          text-align: center;
          width: 80px;
          height: 20px;
          border: 1px solid #ccc;
          margin: 0 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<style>
html,
body,
#app {
  width: 100%;
}
.ivu-rate-text {
  margin-left: 0;
}
.ivu-rate-star {
  margin-right: 5px;
}
.ivu-rate {
  font-size: 17px;
}
/* .ivu-icon{
    color: #00A1DC;
} */
</style>