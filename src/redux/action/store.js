import { createStore, combineReducers } from 'redux';
import quotationReducer from '../reducer/quotationReducer';

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  quotation: quotationReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
