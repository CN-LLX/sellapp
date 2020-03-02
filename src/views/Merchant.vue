<template>
    <div class="big">
        <div class="top">
            <div class="top-top">
                <div class="left">
                    <p>{{shuju.name}}</p>
                    <div>
                        <Rate disabled v-model="shuju.score" />
                        <span class="left-span">月售{{shuju.sellCount}}</span>
                    </div>
                </div>
                <div class="right">
                    <Icon type="md-heart" />
                    <p>已收藏</p>
                </div>
            </div>
            <div class="top-bot">
                <div class="bot-con">
                    <p>起送价</p>
                    <span class="con-big">{{shuju.minPrice}}</span>
                    <span class="con-sma">元</span>
                </div>
                <div class="bot-con bd">
                    <p>商家配送</p>
                    <span class="con-big">{{shuju.deliveryPrice}}</span>
                    <span class="con-sma">元</span>
                </div>
                <div class="bot-con">
                    <p>平均配送时间</p>
                    <span class="con-big">{{shuju.deliveryTime}}</span>
                    <span class="con-sma">分钟</span>
                </div>
            </div>
        </div>
        <div class="cheng"></div>
        <div class="gonggao">
            <p class="g-top">活动与公告</p>
            <div class="g-red">
                <p class="g-red-con">{{shuju.bulletin}}</p>
            </div>
            <div class="g-sup" v-for="(v,i) in shuju.supports" :key="i">
                <div class="g-sup-con">
                    <img src="../assets/imgs/decrease_3@2x.png" alt="" v-show="v.type==0">
                    <img src="../assets/imgs/discount_3@2x.png" alt="" v-show="v.type==1">
                    <img src="../assets/imgs/special_3@2x.png" alt="" v-show="v.type==2">
                    {{v.description}}
                </div>
            </div>
        </div>
        <div class="cheng"></div>
        <div class="shijing">
            <p class="s-top">商家实景</p>
            <div class="s-img">
                <div class="s-img-box" v-for="(v,i) in shuju.pics" :key="i">
                    <img :src="v" alt="">
                </div>
                <!-- <div class="s-img-box">
                    <img src="" alt="">
                </div>
                <div class="s-img-box">
                    <img src="" alt="">
                </div> -->
            </div>
        </div>
        <div class="cheng"></div>
        <div class="xinxi">
            <p class="x-top">商家信息</p>
            <div class="x-sup" v-for="(v,i) in shuju.infos" :key="i">
                <div class="x-sup-con">
                    {{v}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getmian} from '../api/apis'

    export default {
        data(){
            return{
                shuju:[],
                data:3
            }
        },
        created(){
            getmian().then((res)=>{
                this.shuju=res.data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
.big{
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    .top{
        width: 100%;
        height: 150px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e4e7e7;
        .top-top{
            width: 100%;
            height: 58px;
            display: flex;
            justify-content: space-between;
            padding-bottom: 18px;
            .left{
                p{
                    font-size: 16px;
                    color: black;
                }
                .left-span{
                    font-size: 12px;
                }
            }
            .right{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                flex-direction: column;
                color: red;
                p{
                    color: black;
                }
                .ivu-icon-md-heart:before{
                    font-size: 40px;
                }
            }
        }
        .top-bot{
            width: 100%;
            flex: 1;
            border-top: 1px solid #e4e7e7;
            display: flex;
            .bd{
                border-left: 1px solid #e4e7e7;
                border-right: 1px solid #e4e7e7;
            }
            .bot-con{
                flex: 1;
                text-align: center;
                margin-top: 14px;
                .con-big{
                    font-size: 20px;
                }
                .con-sma{
                    font-size: 10px;
                }

            }
        }
    }
    .cheng{
        width: 100%;
        height: 18px;
        background-color: #F3F6F6;
        border-bottom: 1px solid #e4e7e7;
    }
    .gonggao{
        width: 100%;
        padding: 20px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e4e7e7;

        .g-top{
            font-weight: bolder;
            color: black;
        }
        .g-red{
            width: 100%;
            color: red;
            display: flex;
            justify-content: center;
            padding-top: 10px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e4e7e7;
            .g-red-con{
                width: 90%;
                line-height: 25px;
            }
        }
        .g-sup{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #e4e7e7;   
            display: flex;
            align-items: center;
            justify-content: center;
            .g-sup-con{
                width: 90%;
                img{
                    width: 20px;
                    height: 20px;
                    vertical-align: middle;
                }
            }
        }
    }
    .shijing{
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e4e7e7;   
        .s-top{
            font-weight: bolder;
            color: black;
        }
        .s-img{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .s-img-box{
                width: 120px;
                height: 90px;
                margin-right: 20px;
                margin-top: 20px;
                img{
                    width: 120px;
                    height: 90px;
                }
            }
        }
    }
    .xinxi{
        width: 100%;
        padding: 20px;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        .x-top{
            font-weight: bolder;
            color: black;
            padding-bottom: 10px;
            border-bottom: 1px solid #e4e7e7;   
        }
        .x-sup{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #e4e7e7;   
            display: flex;
            align-items: center;
            justify-content: center;
            .x-sup-con{
                width: 90%;
            }
        }
    }
}
</style>