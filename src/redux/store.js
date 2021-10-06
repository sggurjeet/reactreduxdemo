import { createStore, applyMiddleware } from 'redux'
//import cakeReducer from './cake/cakeReducer'
//import iceCreamReducer from './iceCream/iceCreamReducer'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
//import thunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store