import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import sumScheduleCReducer from './sumScheduleCReducer';
import taxCalculateReducer from './taxCalculateReducer';
const rootReducer = combineReducers({
	counter: counterReducer,
	sum: sumScheduleCReducer,
	taxCalculate: taxCalculateReducer
});

export default rootReducer;
