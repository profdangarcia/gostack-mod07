import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// integração do redux ao reactotron (antes do redux-saga)
// const enhancer =
//   process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
