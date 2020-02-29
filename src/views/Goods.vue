<template>
    <div class="big">
        <div class="left">
            <ul class="content">
                <div :class="{leftDiv:true,sel:i==cursel}" v-for="(v,i) in shuju" :key="i" @click="clickleft(i)">
                    <!-- 固定用法 必须在下面套一个ul   class必须为content-->
                        <p class="left-div-p">
                            <img src="../assets/imgs/discount_3@2x.png" v-show="v.type==1" alt="">
                            <img src="../assets/imgs/decrease_3@2x.png" v-show="v.type==2" alt="">
                            <img src="../assets/imgs/invoice_3@2x.png" v-show="v.type==3" alt="">
                            <img src="../assets/imgs/guarantee_3@2x.png" v-show="v.type==4" alt="">
                            {{v.name}}
                        </p>
                </div>
            </ul>
        </div>

        <div class="right">
            <ul class="content">
                <div :id="i" v-for="(v,i) in shuju" :key="i">
                <div class="right-lei">
                    <p>{{v.name}}</p>
                </div>
                <div class="right-cai" v-for="(a,b) in v.foods" :key="b">
                    <div class="right-cai-left">
                        <img :src="a.image" alt="">
                    </div>
                    <div class="right-cai-right">
                        <p class="p1">{{a.name}}</p>
                        <p class="p2" v-show="a.description">{{a.description}}</p>
                        <p class="p2">月售{{a.sellCount}}份</p>
                        <p><span class="red">￥{{a.price}}</span><span class="hua"><span v-show="a.oldPrice">￥</span>{{a.oldPrice}}</span></p>
                    </div>
                </div>
            </div>
            </ul>
        </div>





    </div>
</template>

<script>
    import {getgoods} from '../api/apis'
    import BScroll from 'better-scroll'


    export default {
        data(){
            return{
                shuju:[],
                cursel:0
            }
        },
        created(){
            getgoods().then((res)=>{
                this.shuju=res.data.data
                // console.log(this.shuju)
            })
        },
        mounted(){
            //(DOM节点，滚动配置)
            // var leftdiv=
            new BScroll(document.querySelector('.left'),{
                click:true
            })

            this.rightDiv=new BScroll(document.querySelector('.right'));
        },
        methods: {
            clickleft(val){
                this.cursel=val
                this.rightDiv.scrollToElement(document.getElementById(val),600)
                // console.log(val)
            }
        },
    }
</script>

<style lang="less" scoped>

.big{
    display: flex;
    overflow: auto;
    margin-bottom: 60px;
    .left{
        width: 80px;
        height: 100%;
        background-color: rgb(238, 238, 238);
        overflow: scroll;
        .sel{
            background-color: white !important;
        }
        .leftDiv{
            width: 100%;
            height: 55px;
            padding: 0 12px;
            background-color: #F3F6F6;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #D9DDE1;
            img{
                width: 14px;
                height: 14px;
                vertical-align:middle;
            }
        }
    }
    .right{
        flex: 1;
        height: 100%;
        // background-color: palevioletred;
        overflow: scroll;
        .right-lei{
            width: 100%;
            height: 28px;
            background-color: #F3F6F6;
            border-left: 2px solid #D9DDE1;
            line-height: 28px;
            p{
                color: #8F969B;
                padding-left: 20px;
            }
        }
        .right-cai{
            width: 100%;
            height: 110px;
            padding: 20px;
            background-color: white;
            display: flex;
            border-bottom: 1px solid #D9DDE1;
            .right-cai-left{
                width: 80px;
                height: 100%;
                background-color: #8F969B;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right-cai-right{
                margin-left: 10px;
                flex: 1;
                .p1{
                    width: 100%;
                    color: black;
                }
                .p2{
                    width: 100%;
                    height: 20px;
                    color: rgb(133, 133, 133);
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .red{
                    color: red;
                    font-weight: bolder;
                    font-size: 16px;
                    margin-right: 10px;
                }
                .hua{
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>