import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        datalist:[],
        gouwuche:[],
        show:false,
    },
    mutations:{
        getshuju(state,shuju){
            state.datalist=shuju
        },
        setnumadd(state,name){
            for(let i in state.datalist){
                for(let v in state.datalist[i].foods){
                    if(state.datalist[i].foods[v].name==name){
                        state.datalist[i].foods[v].num++
                    }
                }
            }
        },
        setnumreduce(state,name){
            for(let i in state.datalist){
                for(let v in state.datalist[i].foods){
                    // console.log(state.datalist[i].foods[v])
                    if(state.datalist[i].foods[v].name==name){
                        if(state.datalist[i].foods[v].num>0)
                        state.datalist[i].foods[v].num--
                    }
                }
            }
        },
        qingkong(state){
            state.datalist.map(v=>{
                v.foods.map(i=>{
                    i.num=0
                })
            })
            state.show=false;
        },
        show(state){
            state.show=!state.show
        }
    },
    getters:{
        shopcar(state){
            var arr=[];
            state.datalist.map(v=>{
                v.foods.map(i=>{
                    if(i.num!=0){
                        arr.push({
                            name:i.name,
                            num:i.num,
                            price:i.price,
                            image:i.image,
                        })
                    }
                })
            })
            var obj = {};
            var newarr =arr.filter(item =>
                obj[item.name] ? '' : (obj[item.name] = true),
            );
            state.gouwuche=newarr
            return state.gouwuche;
        }
    }
})








