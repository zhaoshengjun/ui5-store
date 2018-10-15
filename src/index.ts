class Store {
  private _reducer: Function;
  private _state: Object;

  constructor(reducer: Function, initState: Object = {}) {
    this._reducer = reducer;
    this._state = initState;
  }

  getState() {
    return this._state;
  }

  dispatch(action: string) {
    this._state = this._reducer(this._state, action);
  }
}
