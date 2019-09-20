// @flow

import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';

import type { Store, Action, Dispatch } from 'redux'; 
import type { LazyStore } from 'pwa-helpers/lazy-reducer-enhancer.js';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// To make this your own, just import and add the types from
// your reducers and then set up the state object. You can then 
// replace all the 'Dream' with whatever you would like.
export type DreamState = {
  ...
};

export type DreamAction = Action<string>;
export type DreamStore = Store<DreamState, DreamAction, Dispatch> & LazyStore;

// Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management
export const store: DreamStore = dreamifyStore(createStore(
  (state: any) => state,
  devCompose(
    lazyReducerEnhancer(combineReducers),
    applyMiddleware(thunk))
));

// https://stackoverflow.com/a/41329247
function dreamifyStore(reduxStore: any): DreamStore {
  if (typeof reduxStore.addReducer === 'function') {
    return (reduxStore: DreamStore);
  }
  throw 'Non-Hackible Store';
}

// Initially loaded reducers.
store.addReducers({
});
