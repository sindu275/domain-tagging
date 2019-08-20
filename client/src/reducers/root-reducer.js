import { combineReducers } from 'redux';
import {domainDataReducer} from './domain-data';
export default combineReducers({
 domainData: domainDataReducer
});