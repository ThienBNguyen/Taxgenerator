import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import taxCalculateReducer from './taxCalculateReducer';
import dependentReducer from './dependentReducer';
import sheduleInputReducer from './scheduleInputReducer';
import longCapitalGainLossCalculateReducer from './longCapitalGainLossCalculateReducer';
import shortCapitalGainLossCalculateReducer from './shortCapitalGainLossCalculateReducer';

const rootReducer = combineReducers({
	counter: counterReducer,
	taxCalculate: taxCalculateReducer,
	dependentCount: dependentReducer,
	scheduleInput: sheduleInputReducer,
	longCapitalGain: longCapitalGainLossCalculateReducer,
	shortCapitalGain: shortCapitalGainLossCalculateReducer
});

export default rootReducer;
