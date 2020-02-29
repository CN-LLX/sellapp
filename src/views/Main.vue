<template>
    <div class="box">
        <div class="h180">
            <div class="top">
                <div class="top-div">
                    <div class="top-div-left">
                        <img :src="shuju.avatar" alt="">
                    </div>
                    <div class="top-div-right">
                        <div class="top-right-div">
                            <img src="../assets/imgs/brand@2x.png" alt="" class="ping">
                            <span class="fontw">{{shuju.name}}</span>
                        </div>
                        <p class="top-right-div">{{shuju.description}}/{{shuju.deliveryTime}}分钟送达</p>
                        <div class="top-right-div">
                            <img src="../assets/imgs/decrease_1@2x.png" alt="" class="jian">
                            <span class="fonts">
                                {{shuju.supports ? shuju.supports[0].description:''}}, 
                                {{shuju.supports ? shuju.supports[1].description:''}},
                                {{shuju.supports ? shuju.supports[2].description:''}}
                                </span>
                            </div>
                    </div>
                </div>
                <div class="but-div">
                    <img src="../assets/imgs/bulletin@2x.png" alt="" class="gong">
                    <span>{{shuju.bulletin}}</span>
                </div>
            </div>
            <div class="bg" :style="{backgroundImage : `url(${shuju.avatar})`}"></div>
            <div class="router-link-div">
                <router-link to="/goods" class="router-link-div-item">商品</router-link>
                <router-link to="/evaluate" class="router-link-div-item">评价</router-link>
                <router-link to="/merchant" class="router-link-div-item">商家</router-link>
            </div>
        </div>
        <router-view/>
        <div class="shopcar">
            <div class="shopcar-left">
                <img src="../assets/imgs/shopcar.png" alt="">
                <span class="zong">￥0</span>
                <span class="pei">另需配送费￥{{this.shuju.deliveryPrice}}元</span>
            </div>
            <div class="shopcar-right">
                ￥{{this.shuju.minPrice}}起送
            </div>
        </div>
    </div>
</template>

<script>
    import {getmian} from '../api/apis'
    export default {
        data(){
            return {
                shuju:{}
            }
        },
        created(){
            getmian().then((res)=>{
                this.shuju=res.data.data
            })
        },
        methods:{

        }
        
    }
</script>

<style lang="less" scoped>
img{
    vertical-align: middle;
}
.h180{
    height: 180px;
}
.bg{
    width: 100%;
    height: 140px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter:blur(4px);
}
.top{
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-content: center;
    .but-div{
        width: 100%;
        height: 28px;
        background-color: #3F4244;
        display: flex;
        align-items:center;
        .gong{
            width: 26px;
            height: 15px;
            margin-left: 12px;
            margin-right: 6px;
        }
        span{
            display: inline-block;
            color: white;
            font-size: 12px;
            line-height: 28px;
            width: 90%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .top-div{
        width: 100%;
        height: 115px;
        padding-left: 16px;
        padding-top: 16px;
        padding-bottom: 15px;
        display: flex;
        .top-div-left{
            width: 85px;
            height: 100%;
            border-radius: 5px;
            background-color: red;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .top-div-right{
            margin-left: 16px;
            flex: 1;
            color: white;
            .top-right-div{
                margin-bottom: 3px;
                .fontw{
                    font-size: 16px;
                    font-weight: bolder;
                    margin-left: 6px;
                }
                .ping{
                    width: 34px;
                    height: 20px;
                }
                .jian{
                    width: 14px;
                    height: 14px;
                    margin-right: 6px;
                }
                .fonts{
                    font-size: 12px;
                }
            }

        }
    }

}
.router-link-div{
    height: 40px;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    color: red;
    border-bottom: 1px solid #D9DDE1;
    .active{
        color: red;
    }
    a{
        font-size: 16px;
        color: rgb(34, 34, 34);
    }
}
.shopcar{
    color: white;
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    background-color: #131D27;
    display: flex;
    justify-content: space-between;
    .shopcar-left{
        width: 250px;
        height: 100%;
        // background-color: red;
        img{
            position: absolute;
            top: -16px;
            left: 16px;
            width: 50px;
            height: 50px;
        }
        .zong{
            font-size: 22px;
            font-weight: bolder;
            color: #909397;
            margin-left: 70px;
            margin-right: 20px;
            line-height: 60px;
        }
        .pei{
            font-size: 12px;
            color:#909397;
        }
    }
    .shopcar-right{
        width: 110px;
        height: 100%;
        background-color: #2A353A;
        color:#909397;
        font-size: 16px;
        line-height: 60px;
        text-align: center;
        font-weight: bolder;
    }
}
</style>
<style>
html,body,#app{
    height: 100%;
}
.box{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.box>.big{
    flex: 1;
}
</style>