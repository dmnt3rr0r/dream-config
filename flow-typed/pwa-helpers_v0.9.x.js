declare module "pwa-helpers/metadata.js" {
  /* metadata */
  declare export function updateMetadata(metadata: {
    title?: string,
    description?: string,
    url?: string,
    image?: string,
    imageAlt?: string
  }): void;

  declare export function setMetaTag(attrName:string, attrValue:string, content:string): void;
}

declare module "pwa-helpers/media-query.js" {
  /* media-query */
  declare export function installMediaQueryWatcher(mediaQuery: string, layoutChangedCallback: (mediaQueryMatches: boolean) => void): void;
}

declare module "pwa-helpers/network.js" {
  /* network */
  declare export function installOfflineWatcher(offlineUpdatedCallback: (isOffline: boolean) => void): void;
}

declare module "pwa-helpers/router.js" {
  /* router */
  declare export function installRouter(locationUpdatedCallback: (location:Location, event: Event|null) => void): void;

}

declare module "pwa-helpers/lazy-reducer-enhancer.js" {
  /* lazyReducer */
  import type { ReducersMapObject, StoreEnhancer, combineReducers } from 'redux';

  declare export interface LazyStore {
    addReducers: (newReducers: ReducersMapObject) => void;
  }

  declare export function lazyReducerEnhancer(combiR: combineReducers): void;
}
