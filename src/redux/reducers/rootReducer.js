import {combineReducers} from 'redux'


import  Products from './products'
import  Reviews from './review'
import  isLogged from './isLogged'

let rootReducer=combineReducers({Products,Reviews,isLogged});
export default rootReducer;
