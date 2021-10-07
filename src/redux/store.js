import { createStore, applyMiddleware } from 'redux'
//import cakeReducer from './cake/cakeReducer'
//import iceCreamReducer from './iceCream/iceCreamReducer'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
//thunk middleware helps for an action creator to return a function instead of an action
//the function can perform side effects as fetching data, the function can also perform dispatch based on regular response 
//the actions are then handled by the reducers which updates the redux state
//when the state is updated the component which has subscribed to the state changes will recieve the updated state which is then used in JSX 
//redux axios middleware and redux persist npm packages for further reading   

export default store