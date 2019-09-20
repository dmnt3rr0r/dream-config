/* metadata */
declare export function updateMetadata(metadata: {
  title?: string,
  description?: string,
  url?: string,
  image?: string,
  imageAlt?: string
}): void;

declare export function setMetaTag(attrName:string, attrValue:string, content:string): void;

/* media-query */
declare export function installMediaQueryWatcher(mediaQuery: string, layoutChangedCallback: (mediaQueryMatches: boolean) => void): void;

/* network */
declare export function installOfflineWatcher(offlineUpdatedCallback: (isOffline: boolean) => void): void;

/* router */
declare export function installRouter(locationUpdatedCallback: (location:Location, event: Event|null) => void): void;

/* lazyReducer */
import type { ReducersMapObject, StoreEnhancer, combineReducers } from 'redux';
declare export interface LazyStore {
  addReducers: (newReducers: ReducersMapObject) => void
}
declare export function lazyReducerEnhancer(combineReducers: typeof combineReducers)




