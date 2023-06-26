const redux = require('redux');
createStore =  redux.createStore;
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware

const initialCakeState={
    noOfcakes :100
}

const initialIceState={
    noOfIce :150 
}

function IceReducer (state=initialIceState,action){
    switch(action.type){
        case 'buy_ice' : return{
            ...state,
            noOfIce : state.noOfIce-1
        }
        default : return state
    }
}

function CakeReducer (state=initialCakeState,action){
    switch(action.type){
        case 'buy_cake' : return {
            ...state,
            noOfcakes : state.noOfcakes-1
        }
        default : return state
    }
}

function buyIce(){
    return {
        type : 'buy_ice',
        payload : 'value decreased'
    }
}

function buyCake(){
    return {
        type : 'buy_cake',
        payload : 'value decreased'
    }
}

const rootReducer = combineReducers({
    cake : CakeReducer,
    ice : IceReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));

console.log('initial value',store.getState());
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyCake())
store.dispatch(buyIce());
unsubscribe();
