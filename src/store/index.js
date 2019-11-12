import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

// integração do redux ao reactotron
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
