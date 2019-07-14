import {combineReducers} from 'redux';
import mediaReducer from './modules/media/reducer';
import inputFilter from './modules/filterInput/reducer';

export default combineReducers({
   mediaData: mediaReducer,
   searchData: inputFilter,
})
