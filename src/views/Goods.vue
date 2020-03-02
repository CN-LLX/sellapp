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
                        <div class="dp">
                            <p>
                                <span class="red">￥{{a.price}}</span>
                                <span class="hua">
                                    <span v-show="a.oldPrice">￥</span>
                                    {{a.oldPrice}}
                                </span>
                            </p>
                            <div class="butt">
                                <div class="but-right" @click="numadd(a.name)">+</div>
                                <p class="but-con" v-show="a.num!==0">{{a.num}}</p>
                                <div class="but-left" v-show="a.num!==0" @click="numreduce(a.name)">-</div>
                            </div>
                        </div>
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
                cursel:0
            }
        },
        created(){
            getgoods().then((res)=>{
                this.$store.commit('getshuju',res.data.data)
                
                // this.shuju=res.data.data
                
            })
        },
        mounted(){
            //(DOM节点，滚动配置)
            new BScroll(document.querySelector('.left'),{
                click:true
            })
            this.rightDiv=new BScroll(document.querySelector('.right'),{
                click:true,
                probeType:3
            });
            this.rightDiv.on('scroll',(obj)=>{
                var _y=Math.abs(obj.y)
                for(let v of this.gethight){
                    if(_y>=v.min && _y<v.max){
                        this.cursel=v.index
                    }
                }
            })
        },
        computed:{
            gethight(){
                var arr=[];
                var num=0;
                for(var v in this.shuju){
                    var h=document.getElementById(v).offsetHeight;
                    arr.push({min:num ,max: num+h,index:v})
                    num+=h
                }
                return arr
            },
            shuju(){
                return this.$store.state.datalist
            }
        },
        methods: {
            clickleft(val){
                this.cursel=val
                this.rightDiv.scrollToElement(document.getElementById(val),600)
            },
            numreduce(val){
                this.$store.commit('setnumreduce',val)
            },
            numadd(val){
                this.$store.commit('setnumadd',val)
                console.log(this.$store.getters.shopcar)
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
            padding-right: 15px;
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
                .dp{
                    display: flex;
                    justify-content: space-between;
                    .red{
                        color: red;
                        font-weight: bolder;
                        font-size: 16px;
                        margin-right: 10px;
                    }
                    .hua{
                        text-decoration: line-through;
                    }
                    .butt{
                        width: 75px;
                        // display: flex;
                        // justify-content: space-between;
                        .but-con{
                            width: 20px;
                            text-align: center;
                            line-height: 24px;
                            font-size: 12px;
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
.ivu-btn-circle.ivu-btn-icon-only{
    width: 24px;
    height: 24px;
}
</style>