import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
// import sumScheduleCReducer from './sumScheduleCReducer';
// import taxCalculateReducer from './taxCalculateReducer';
import dependentReducer from './dependentReducer';
const rootReducer = combineReducers({
	counter: counterReducer,
	// sum: sumScheduleCReducer,
	// taxCalculate: taxCalculateReducer,
	dependentCount: dependentReducer
});

export default rootReducer;
