import {combineReducers} from 'redux';
import cardReducer from './card.reducer';

const rootReducer = combineReducers({
    card: cardReducer
});

export default rootReducer;