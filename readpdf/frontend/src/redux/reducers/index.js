import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import taxCalculateReducer from './taxCalculateReducer';
import dependentReducer from './dependentReducer';
import sheduleInputReducer from './scheduleInputReducer';
const rootReducer = combineReducers({
	counter: counterReducer,
	taxCalculate: taxCalculateReducer,
	dependentCount: dependentReducer,
	scheduleInput: sheduleInputReducer
});

export default rootReducer;
