import { db } from '../main'

export const getCartProduts = async (ids,cat="pizza") =>{

    let productsToCart = [];

    ids.forEach(async (item)=>{
        await db.collection(' products').doc(['pizza']).collection(`cat-${cat}`)
            .where("url", "==", item)
            .get()
            .then(res=>{
                res.docs.forEach(item=>{
                    console.log("get prod", item.data())
                    productsToCart.push({...item.data(),id:item.id})
                })
            })
    });

    return productsToCart
    


}