// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { cardsReducer } from './card/reducers';

const rootReducer = combineReducers({
    cardsReducer
})



export default function configureStore() {

    const middlewareEnhancer = applyMiddleware(thunkMiddleware)
  
    const composedEnhancers = compose(middlewareEnhancer)
  
    const store = createStore(rootReducer, composedEnhancers)
  
    return store
  }

export type RootState = ReturnType<typeof rootReducer>;

export const someNewTestVar1 = {};
export const someNewTestVar2 = {};
export const someNewTestVar3 = {};
export const someNewTestVar4 = {};
export const someNewTestVar5 = {};
export const someNewTestVar6 = {};
export const someNewTestVar7 = {};
export const someNewTestVar8 = {};
export const someNewTestVar9 = {};


export const someNewTestVar11 = {};
export const someNewTestVar22 = {};
export const someNewTestVar33 = {};
export const someNewTestVar44 = {};
export const someNewTestVar55 = {};
export const someNewTestVar66 = {};
export const someNewTestVar77 = {};
export const someNewTestVar88 = {};
export const someNewTestVar99 = {};