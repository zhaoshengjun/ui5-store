import { Action, Reducer, Listener } from "./interfaces";

export class Store {
  private _reducer: Reducer<any>;
  private _state: any;
  private _listeners: Array<Listener>;

  constructor(reducer: Reducer<any>, initState?: any) {
    this._reducer = reducer;
    this._state = initState;
    this._listeners = [];
  }

  dispatch(action: Action) {
    this._state = this._reducer(this._state, action);
    // after state changed, call each listener
    for (let listener of this._listeners) {
      listener(this._state);
    }
  }

  subscribe(listener: Listener) {
    this._listeners.push(listener);
  }
}
