import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './action';

// o * funciona de forma similar ao async e é chamado de generate
// utilizar desta forma possibilita mais funcionalidades que o async
function* addToCart({ id }) {
  // yield funciona de forma similar ao await
  // o yield não permit utilizar diretamente o api.get, sendo necessário o call
  // do redux saga
  const response = yield call(api.get, `/products/${id}`);

  // o put dispara uma action do redux
  yield put(addToCartSuccess(response.data));
}

// o all é para configurar quais ações serão ouvidas pelo redux-saga
// o takeLatest resolve apenas a ultima requisição, evita o clique duplo acidental
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
