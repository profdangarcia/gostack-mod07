import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmount } from './action';

// o * funciona de forma similar ao async e é chamado de generate
// utilizar desta forma possibilita mais funcionalidades que o async
function* addToCart({ id }) {
  // select é utilizado para buscar informações dentro do estado
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    // yield funciona de forma similar ao await
    // o yield não permit utilizar diretamente o api.get, sendo necessário o call
    // do redux saga
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    // o put dispara uma action do redux
    yield put(addToCartSuccess(data));
  }
}

// o all é para configurar quais ações serão ouvidas pelo redux-saga
// o takeLatest resolve apenas a ultima requisição, evita o clique duplo acidental
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
