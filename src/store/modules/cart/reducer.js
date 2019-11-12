import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      /** o produce recebe o estado atual e o draft é o rascunho
       * do estado que pode ser modificado */
      return produce(state, draft => {
        // verificação da existencia do produto no carrinho
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}

/**
 * SEM UTILIZAR O IMMER
 * */
// export default function cart(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, { ...action.product, amount: 1 }];
//     default:
//       return state;
//   }
// }
