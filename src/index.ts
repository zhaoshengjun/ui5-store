import { Action, Reducer, State, Listener } from "./interfaces";

class Store {
  private _reducer: Reducer;
  private _state: State;
  private _listeners: Array<Listener>;

  constructor(reducer: Reducer, initState: State = {}) {
    this._reducer = reducer;
    this._state = initState;
    this._listeners = [];
  }

  dispatch(action: Action) {
    this._state = this._reducer(this._state, action);
    // after state changed, call each listener
    for (let listener of this._listeners) {
      listener();
    }
  }

  subscribe(listener: Listener) {
    this._listeners.push(listener);
  }
}
