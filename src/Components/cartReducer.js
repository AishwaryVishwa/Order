export const cartReducer=(state,action)=>{
    const prodArr=state.cartArr;
    const total=state.total;
    switch (action.type) {
       case 'add-to-cart':
           return (prodArr.find((val)=>val==action.data)?[...prodArr]:[...prodArr,action.data])
           break;
    
       default:
           return state;
           break;
    }
}