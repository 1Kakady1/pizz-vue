import { ADD_TO_CART, SUB_TO_CART, GET_PRODUCTS, PUSH_PRODUCTS } from './mutation-type.js'
import { db } from '../main'

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
          price: payload.price
        }); 

      }
      console.log("add",state.cart)
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


      console.log("sub",state.cart);
    },
    [PUSH_PRODUCTS](state,b){
      const countProd = state.cart.findIndex(x=>x.id === b.id) ;
      state.products.push({...b,count:countProd !== -1 ? state.cart[countProd] : 0});
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
    getCart(state){
      return  state.cart
    }

  },
  actions:{
    async [GET_PRODUCTS]({commit}){
     // console.log("get_prod", db.collection(' products').doc('pizza').collection("cat-pizza").where("hide", "==", false).get())
     //https://firebase.google.com/docs/firestore/query-data/query-cursors
     //https://firebase.google.com/docs/firestore/query-data/order-limit-data
      db.collection(' products').doc('pizza').collection("cat-pizza")
        .where("hide", "==", false)
        //.orderBy("price")
        //.startAfter(4)
        .limit(4)
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