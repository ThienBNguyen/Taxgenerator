import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import sumScheduleCReducer from './sumScheduleCReducer';
const rootReducer = combineReducers({
	counter: counterReducer,
	sum: sumScheduleCReducer
});

export default rootReducer;
