export interface Action {
  type: string;
  payload: any;
}

export type State = any;
export type Reducer = (state: State, action: Action) => State;
export type Listener = Function;
