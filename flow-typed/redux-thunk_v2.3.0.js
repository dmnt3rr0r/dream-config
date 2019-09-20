// https://stackoverflow.com/a/42643465
declare export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
declare export type GetState = () => Object;
declare export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
declare export type PromiseAction = Promise<Action>;
