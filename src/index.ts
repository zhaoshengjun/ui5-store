import { Action, Reducer, State } from "./interfaces";

class Store {
  private _reducer: Reducer;
  private _state: State;

  constructor(reducer: Reducer, initState: State = {}) {
    this._reducer = reducer;
    this._state = initState;
  }

  getState() {
    return this._state;
  }

  dispatch(action: Action) {
    this._state = this._reducer(this._state, action);
  }
}
