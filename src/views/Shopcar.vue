<template>
<div class="shopcarbig">
    <div class="shop">

    </div>
    <div class="con">
        <div class="con-top">
            <p class="con-top-p">
                <span>
                    购物车
                    <span >(共{{shujunum}}件商品)</span>
                </span>
                <span @click="qingkong"><Icon type="ios-trash-outline"/>清空购物车</span>
            </p>
        </div>
        <div class="con-con" v-for="(v,i) in shuju" :key="i">
            <div class="con-con-con">
                <div class="con-left">
                    <div class="img">
                        <img :src="v.image" alt="">
                    </div>
                    <div class="text">
                        <p class="text-top">{{v.name}}</p>
                        <p class="text-bot">￥{{v.price*v.num}}</p>
                    </div>
                </div>
                <div class="con-right">
                    <div class="butt">
                        <div class="but-right" @click="numadd(v.name)">+</div>
                        <p class="but-con">{{v.num}}</p>
                        <div class="but-left" @click="numjian(v.name)">-</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        created(){            
        },
        computed:{
            shuju(){
                return this.$store.state.gouwuche
            },
            shujunum(){
                var zong=0;
                this.$store.getters.shopcar.map(v=>{
                    zong+=v.num
                })
                return zong
            }
        },
        methods:{
            numadd(val){
                this.$store.commit('setnumadd',val)
            },
            numjian(val){
                this.$store.commit('setnumreduce',val)
            },
            qingkong(){
                this.$store.commit('qingkong') 
            }
        }

    }
</script>

<style lang="less" scoped>
.shopcarbig{
    height: 100%;
    .shop{
        width: 100%;
        position: absolute;
        bottom: 60px;
        left: 0;
        height: 100%;
        background-color: rgb(0, 0, 0);
        opacity:0.5;
    }
    .con{
        width: 100%;
        max-height: 70%;
        background-color: rgb(255, 255, 255);
        position: absolute;
        bottom: 60px;
        left: 0;   
        display: flex;
        flex-direction: column;
        overflow: scroll;
        .con-top{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid rgb(224, 224, 224);
            flex-shrink:0;
            .con-top-p{
                width: 90%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        } 
        .con-con{
            width: 100%;
            height: 90px;
            display: flex;
            justify-content: center;
            flex-shrink:0;
            .con-con-con{
                width: 90%;
                border-bottom: 1px solid rgb(224, 224, 224);
                display: flex;
                justify-content: space-between;
                align-items: center;
                .con-left{
                    width: 200px;
                    height: 85%;
                    display: flex;
                    .img{
                        width: 46%;
                        height: 100%;
                        margin-right: 10px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text{
                        width: 70%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .text-top{
                            font-size: 18px;
                        }
                        .text-bot{
                            color: red;
                            font-weight: bolder;
                        }
                    }
                }
                .con-right{
                    .butt{
                        width: 90px;
                        .but-con{
                            width: 30px;
                            text-align: center;
                            line-height: 24px;
                            font-size: 16px;
                            float: right;
                        }
                        .but-left{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background-color: #00A1DC;
                            text-align: center;
                            line-height: 24px;
                            color: white;
                            font-size: 20px;
                            float: right;
                        }
                        .but-right{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background-color: #00A1DC;
                            text-align: center;
                            line-height: 24px;
                            color: white;
                            font-size: 20px;
                            float: right;
                        }
                    }
                }
            }
        }
    }
}

</style>
<style>
.con-top .ivu-icon{
    font-size: 18px;
}
</style>