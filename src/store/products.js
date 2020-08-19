import { ADD_TO_CART, SUB_TO_CART, GET_PRODUCTS, PUSH_PRODUCTS, GET_PRODUCT,SET_PRODUCT_TO_CART } from './mutation-type.js'
import { db } from '../main'
import {set_cookie,getCookie} from '../helpers/function'

/* eslint-disable no-debugger */

export default {
  state: {
    products: [],
    counter:0,
    cart: []
  },
  mutations: {
    [ADD_TO_CART](state,payload=null){

      const indexCart = state.cart.findIndex(x=>x.id === payload.id);
      const indexProd = state.products.findIndex(x=>x.id === payload.id);
      
      if(indexCart !== -1){

        state.cart[indexCart].count += 1; 
        state.products[indexProd].count += 1; 

      } else {

        state.products[indexProd].count += 1; 

        state.cart.push({
          id: payload.id,
          count: 1,
          price: payload.price,
          title: state.products[indexProd].title,
          preview: state.products[indexProd].image,
          url:  state.products[indexProd].url
        }); 

      }

      set_cookie("products",JSON.stringify(state.cart ),34); 
    },
    [SUB_TO_CART](state,payload=null){

      const indexCart = state.cart.findIndex(x=>x.id === payload.id);
      const indexProd = state.products.findIndex(x=>x.id === payload.id);

      if(indexCart !== -1 &&  state.products[indexProd].count > 0){

        state.cart[indexCart].count -= 1; 
        state.products[indexProd].count -= 1; 

      } 
      
      if(indexCart !== -1){

        if (state.cart[indexCart].count <=0) {

          state.products[indexProd].count = 0; 
          console.log("sub del",indexProd);
          state.cart.splice(indexCart,1);
        }

      }

      set_cookie("products",JSON.stringify(state.cart ),34);

    },
    [PUSH_PRODUCTS](state,b){

      const issetProd = state.products.findIndex(x=>x.id === b.id) ;
      const countProd = state.cart.findIndex(x=>x.id === b.id) ;
      
      //debugger;
      if(issetProd === -1){

        state.products.push({...b,count:countProd !== -1 ? state.cart[countProd].count : 0});

      } else if(countProd !== -1){

        state.products[issetProd].count= state.cart[countProd].count;
        state.products[issetProd].price= state.cart[countProd].price;

      }

    },

    addProduct(state){
        state.counter++;
    }
  },
  getters:{
    getCounter(state){
      return  state.counter 
    },
    getProducts(state){
      return  state.products
    },
    getProduct: state => url  =>{
      return  state.products.find(x=>x.url === url)
    },
    getCart(state){
      return  state.cart
    }

  },
  actions:{

    async [SET_PRODUCT_TO_CART]({commit,state},payload){

      const getCookies = getCookie('products');

      if(getCookies !== null && getCookies !== undefined && getCookies !== ''){

        state.cart = JSON.parse(getCookies);
        state.cart.forEach(async (item)=>{
          await db.collection(' products').doc('pizza').collection(`cat-${payload.cat}`)
          .where("url", "==", item.url)
          .get()
          .then(res=>{
            res.docs.forEach(item=>{
              commit(PUSH_PRODUCTS,{...item.data(),id:item.id})
            })
          });
        })

      }
    },

    async [GET_PRODUCT]({commit,state},payload){

      const getCookies = getCookie('products');

      if(getCookies !== null && getCookies !== undefined && getCookies !== ''){
        state.cart = JSON.parse(getCookies);
      }

      await db.collection(' products').doc('pizza').collection(`cat-${payload.cat}`)
      .where("url", "==", payload.product)
      .get()
      .then(res=>{
        res.docs.forEach(item=>{
          //console.log("get prod", item.data())
          commit(PUSH_PRODUCTS,{...item.data(),id:item.id})
        })
      })

    },

    async [GET_PRODUCTS]({commit,state}){

      const getCookies = getCookie('products');

      if(getCookies !== null && getCookies !== undefined && getCookies !== ''){
        state.cart = JSON.parse(getCookies);
      }

      db.collection(' products').doc('pizza').collection("cat-pizza")
        .where("hide", "==", false)
        .orderBy("price")
        //.startAt(1)
        //.limitToFirst(1+1)
        //.startAfter(4+2)
        //.endAt(4)
        //.limit(4)
        .get()
        .then(res=>{
          res.docs.forEach(item=>{
            commit(PUSH_PRODUCTS,{...item.data(),id:item.id})
          })
        })
        .catch(e=>console.error("ERROR GET_PRODUCTS",e));


    }
  }
}