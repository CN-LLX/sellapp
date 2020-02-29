<template>
    <div class="big">
        <div class="top">
            <div class="top-left">
                <p class="top-left-p1">3.9</p>
                <p class="top-left-p2">综合评分</p>
                <p class="top-left-p3">高于周五商家</p>
            </div>
            <div class="top-right">
                <div class="top-right-fen"><p>口味评分</p><Rate show-text v-model="data" /></div>
                <div class="top-right-fen"><p>服务评分</p><Rate show-text v-model="data" /></div>
                <div class="top-right-fen"><p>送达时间 <span class="mar">30fz</span></p></div>
            </div>
        </div>
        <div class="hui"></div>
        <div class="bot">
            <div class="bot-top">
                <div class="bot-top-an1"><p>全部<span>30</span></p></div>
                <div class="bot-top-an2"><p>满意<span>30</span></p></div>
                <div class="bot-top-an3"><p>不满意<span>30</span></p></div>
            </div>
            <div class="bot-min">
                <p>
                <img src="../assets/imgs/check_circle.svg" alt="">
                <span>只看有内容的评论</span>
                </p>
            </div>
            <div class="bot-con">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:3
            }
        }
    }
</script>

<style lang="less" scoped>
.top{
    width: 100%;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 18px;
    .top-left{
        width: 138px;
        height: 80%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .top-left-p1{
            font-size: 30px;
            color: #FA9A04;
        }
    }
    .top-right{
        width: 250px;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .top-right-fen{
            display: flex;
            justify-content: space-between;
            padding-right: 20px;
            p{
                line-height: 36px;
            }
            .mar{
                margin-left: 20px;
            }
        }
    }
}
.hui{
    width: 100%;
    height: 18px;
    background-color: #F3F6F6;
}
.bot{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bot-top{
        width: 90%;
        height: 68px;
        border-bottom: 1px solid #E4E7E7;
        display: flex;
        align-items: center;
        .bot-top-an1{
            width: 60px;
            height: 32px;
            background-color: #00A1DC;
            margin-right: 10px;
            border-radius: 2px;
            text-align: center;
            line-height: 32px;
            color: white;
            span{
                font-size: 12px
            }
        }
        .bot-top-an2{
            width: 60px;
            height: 32px;
            background-color: #CCEEF7;
            margin-right: 10px;
            border-radius: 2px;
            text-align: center;
            line-height: 32px;
            span{
                font-size: 12px
            }
        }
        .bot-top-an3{
            width: 70px;
            height: 32px;
            background-color: #E9ECEC;
            border-radius: 2px;
            text-align: center;
            line-height: 32px;
            span{
                font-size: 12px
            }
        }
    }
    .bot-min{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #E4E7E7;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            width: 90%;
            img{
                width: 30px;
                height: 30px;
                vertical-align: middle;
            }
        }
    }
    .bot-con{
        width: 90%;
        height: 130px;
        border-bottom: 1px solid #E4E7E7;
    }
}
</style>
<style>
.ivu-rate-text{
    margin-left: 0;
}
.ivu-rate-star{
    margin-right: 5px;
}
</style>